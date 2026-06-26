# Opera Obscura — Architecture

Architecture reference for **this** repo (`csl-opera-obscura` / `csl-opera-nova-et-obscura`):
the bibliography of C.S. Lewis's published-but-obscure works (fragmentary pieces, mostly not in
the standard Walter Hooper volumes). This doc documents the OO system itself. For how the
derived full-text **search + analytics corpus** consumes this data, see the **separate search
repo** `csl-opera-omnia-search` (its `.claude/docs/citation-architecture.md` and
`extraction-details.md`) — that's the "downstream" pointer in §6.

> Docs convention: each system's architecture docs live with that system. This repo's docs
> describe the bibliography app + its data; they point across to the search repo for the
> ingestion/consumption side, and vice-versa.

---

## 1. What it is
A React single-page app (Create React App + Materialize CSS) presenting the bibliography as a
sortable/filterable table (by year, title, reference, type). Deployed to GitHub Pages at
`https://jwkeena.github.io/csl-opera-obscura` via `npm run deploy` (`gh-pages -d build`).
Corrections and additions welcome (jwkeena@gmail.com).

## 2. Repo layout
```
bibliography/                 # the CRA app
  src/
    texts.js                  # THE DATA — all bibliography entries (see §3)
    App.js                    # loads texts, formats → sorts → filters → renders the table
    App.css / index.css       # styling (Materialize)
    components/               # AboutModal, Footer, FormSelect(+Option), Modal,
                              #   SearchBar, TableRow, Tooltip
  scripts/fix-css-blocking.js # post-build step (run by `npm run build`)
  public/ , build/            # CRA static + production build (build/ gitignored)
  package.json                # start / build / deploy (gh-pages), homepage
docs/                         # ← these architecture docs
README.md                     # project blurb + submissions
```
Note: `.claude/` is gitignored, so docs live in `docs/` (or repo root), never under `.claude/`.

## 3. The data model — `texts.js`
A single CommonJS module:
```js
const texts = [ { … }, … ];
module.exports = { texts };
```
~766 entries, imported in exactly one place (`App.js: import { texts } from './texts'`). Each
entry is a flat object:

| field | type | meaning |
|-------|------|---------|
| `id` | string | **stable, non-sequential, immutable** unique key (added 2026-06-25). 6-char random token from `23456789abcdefghjkmnpqrstuvwxyz` (no ambiguous 0/o/1/l/i). Assigned once, never changes → entries can be inserted out of order with no renumbering. App.js ignores it; it exists for stable identity + downstream change-tracking (§5–§6). |
| `title` | string (HTML) | curly quotes; `<i>…</i>` for italics |
| `printedIn` | string (HTML) \| null | where it was published |
| `issueOrVolume` | string \| null | bibliographic |
| `pageRange` | string \| null | bibliographic |
| `year` | number | publication/composition year (primary sort) |
| `monthAndDay` | string \| null | finer date |
| `textProvided` | `false` \| string (HTML) | `false` = text not transcribed (citation only); otherwise the actual text as an HTML string |
| `type` | string | one of `Prose` · `Poem` · `Letter` · `Annotation` · `Diary` · `Blurb` |
| `notes` | string[] (HTML) \| null | editorial notes |

Type distribution (2026-06-25): Letter 279 · Prose 216 · Poem 132 · Annotation 76 · Diary 40 ·
Blurb 23.

**App.js consumption:** copies `texts` into state, builds a display row per entry (the `reference`
column is assembled from `printedIn` + `issueOrVolume` + `monthAndDay`), and applies the
`sortByOption` / `sortDirection` / `typesDisplayed` UI state. Unknown fields (like `id`) are
ignored, so adding fields is safe for the app.

## 4. The `id` scheme
**Why:** a stable identity decoupled from mutable metadata. Without it, a correction to an
entry's title/year/etc. is indistinguishable from a delete + re-add (the only prior identity was
a composite of those mutable fields). The `id` is the durable key.

**Non-sequential by design:** entries are added out of order, in between existing ones, so
sequential numbers would be churny. Ids are random opaque tokens — order-independent and stable.

**Tool:** `assign_texts_ids.py` (lives in the search repo, `Scripts/Extraction/OperaObscura/`).
Idempotent (only touches entries lacking an `id`), format-preserving (inserts one `id: "…"` line
as the first field; everything else byte-identical), lossless (verified by byte-accounting +
field-level before/after diff), collision-safe. Run it after adding id-less entries; existing ids
are never changed. New entries may be added WITHOUT an id — the next run mints one.

## 5. Authoring workflow
1. Edit `texts.js` to add or correct entries (new entries can omit `id`).
2. Run the id assigner so new entries get a stable `id`.
3. `npm start` to preview; `npm run deploy` to publish to GitHub Pages.
4. Commit in this repo. (The downstream search corpus is updated separately — §6.)

## 6. Downstream — the derived search/analytics corpus
`texts.js` is the **source of truth** for the separate **`csl-opera-omnia-search`** repo, which
turns the whole Lewis corpus (these obscure texts + the major works) into a client-side full-text
search engine + analytics dashboard. That repo:
- copies `texts.js` and **extracts each entry** into structured JSON under its `Texts/` tree
  (Prose→Varia, Poem→Poems, Letter→Letters/UncollectedLetters, Annotation→Annotations,
  Diary→Diaries, Blurb→Blurbs);
- builds a search index + analytics (word frequencies, hapax, foreign passages, **citations**);
- runs a locus-based **citation playbook** over each text.
The whole ingest is orchestrated by its `/sync-opera-obscura` skill +
`Scripts/Extraction/OperaObscura/update_opera_obscura.py` (change detection via a content-hash
manifest; `--dry-run` to preview). The `id` field is the stable key that ingestion uses (or will
use) for robust change detection so a *correction* updates the same corpus doc instead of
orphaning it. **For the consumption/ingestion details, read the search repo's
`.claude/docs/citation-architecture.md` (§9 Opera Obscura sync) and `extraction-details.md`.**

## 7. Planned restructuring (under design)
`texts.js` is one ~8.4k-line module — increasingly unwieldy to author. Under consideration: split
into per-type files (`src/texts/{letters,prose,poems,annotations,diaries,blurbs}.js`) re-exported
via a `src/texts/index.js` that concatenates them, so `App.js`'s `import { texts } from './texts'`
stays unchanged (it resolves the folder index). Benefits: easier authoring, localized diffs, a 1:1
map to the six downstream extractors. A detailed split plan (with a no-data-loss migration) is
forthcoming and will be added to this `docs/` folder.
