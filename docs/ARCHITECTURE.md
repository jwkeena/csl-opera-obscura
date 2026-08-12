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
`https://jwkeena.github.io/csl-opera-obscura` — a **manual** publish (`npm run deploy`), **no CI**;
see §9 (and bump the "last updated" date first). Corrections and additions welcome
(jwkeena@gmail.com).

## 2. Repo layout
```
bibliography/                 # the CRA app
  src/
    texts/                    # THE DATA — per-type entry files (see §3)
      letters.js  prose.js  poems.js  annotations.js  diaries.js  blurbs.js
      index.js                #   re-exports `texts` = concat of all six
      _drafts.js              #   commented-out drafts, NOT imported (preserved; see §3/§7)
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

## 3. The data model — `src/texts/`
The entry data lives in **per-type ES-module files** under `src/texts/` (split from the former
single `texts.js` monolith on 2026-06-25 — see §7). Each per-type file is the source of truth:
```js
// src/texts/letters.js
export const letters = [ { … }, … ];
```
`src/texts/index.js` re-exports the concatenation, so `App.js`'s `import { texts } from './texts'`
is unchanged (it resolves the folder's `index.js`):
```js
import { letters } from './letters'; /* …5 more… */
export const texts = [...letters, ...prose, ...poems, ...annotations, ...diaries, ...blurbs];
```
**765 active entries** total (the import is consumed in exactly one place, `App.js`). Each entry is
a flat object:

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

Type distribution (2026-08-12): Letter 278 · Prose 217 · Poem 131 · Annotation 76 · Diary 40 ·
Blurb 23 = **765**. (Plus 5 commented-out draft entries preserved in `_drafts.js`, not active.)

**Bibliographic house style** (verified across all entries; the canonical reference is the search
repo's `add-opera-obscura` skill): page numbers and ranges are **bare Arabic numerals with a plain
hyphen** (`84-85`) — never `p.`/`pp.` and never an en-dash; note page-refs likewise
(`vol. 89 (Spring 1996), 7-9`); a Collected Letters reprint is `Reprinted in <i>CL</i> vol:page`.

**App.js consumption:** copies `texts` into state, builds a display row per entry (the `reference`
column is assembled from `printedIn` + `issueOrVolume` + `monthAndDay`), and applies the
`sortByOption` / `sortDirection` / `typesDisplayed` UI state. Unknown fields (like `id`) are
ignored, so adding fields is safe for the app. **Load/spinner contract:** the imports are
**static**, so `texts` is the complete array synchronously before `App` mounts —
`componentDidMount → formatTexts()` processes all entries, then (in the `setState` callback)
`sort("year")` + `hideLoadingSpinner()`; `render()` returns `null` while `state.texts === null`
(the HTML `#loading-spinner` shows). Never use dynamic `import()` here or the spinner would hide
before data is ready.

## 4. The `id` scheme
**Why:** a stable identity decoupled from mutable metadata. Without it, a correction to an
entry's title/year/etc. is indistinguishable from a delete + re-add (the only prior identity was
a composite of those mutable fields). The `id` is the durable key.

**Non-sequential by design:** entries are added out of order, in between existing ones, so
sequential numbers would be churny. Ids are random opaque tokens — order-independent and stable.

**Tool:** `normalize_texts.py` (in the search repo, `Scripts/Extraction/OperaObscura/`).
Comment/string-aware (won't touch commented-out drafts), idempotent (only mints ids for entries
lacking one), format-preserving, lossless, collision-safe — and it also **re-sorts each per-type
file by `year` then title** so the files stay tidy. Run it after adding entries; existing ids are
never changed. New entries may be added WITHOUT an id — the next run mints one. (The earlier
single-file `assign_texts_ids.py` is superseded by this folder-aware tool.)

## 5. Authoring workflow
1. Add or correct an entry in the matching `src/texts/<type>.js` (append anywhere; a new entry can
   omit `id`).
2. Run `normalize_texts.py` → it mints the `id` and re-sorts the file by year.
3. `npm start` to preview. **Before publishing, bump the `last updated` date in
   `components/AboutModal/index.js`** (a manual string — §9). Then `npm run deploy` to publish.
4. Commit in this repo. (The downstream search corpus is updated separately — §6.)

## 6. Downstream — the derived search/analytics corpus
`src/texts/` is the **source of truth** for the separate **`csl-opera-omnia-search`** repo, which
turns the whole Lewis corpus (these obscure texts + the major works) into a client-side full-text
search engine + analytics dashboard. That repo:
- copies the entry data and **extracts each entry** into structured JSON under its `Texts/` tree
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

## 7. The split (done 2026-06-25)
The former single ~8.4k-line `texts.js` was split into the per-type files described in §3
(`src/texts/{letters,prose,poems,annotations,diaries,blurbs}.js` + `index.js`), per
`texts-split-plan.md` (Option B). Migration was done by `split_texts.py` (search repo) using a
comment/string-aware lexer (`texts_lexer.py`): each real entry's exact source was copied verbatim,
verified 761-in/761-out (identical multiset) before `texts.js` was deleted; the CRA production
build (`npm run build`) compiled successfully. `App.js`'s import is unchanged.

**Two things the migration also handled:**
- **5 commented-out drafts preserved** in `src/texts/_drafts.js` (not imported) — incl. one full
  letter (Sarah Hauser, 1957) and four empty "Blurbologist" placeholders. To activate one,
  uncomment it, move it into the matching per-type file, and run `normalize_texts.py`.
- **A corruption fix:** the earlier single-file `assign_texts_ids.py` (comment-blind) had wrongly
  inserted live `id:` lines into those 5 commented blocks, which left `texts.js` syntactically
  broken. The robust split dropped those stray lines, so the per-type files are clean and build.

## 8. Frontend invariants (conventions)
Details of `App.js` + `components/` that are easy to break and were each the source of a real bug
(established 2026-08-12):

- **A modal's id is the entry's stable `id`, never the row's list index.** Each `TableRow` passes
  `uid={id}` to its `Modal`, which builds `id="modal-<uid>"` (and `key` uses `id` too). The list
  index is unstable: under search/filter, `React.memo` reuses row instances while freshly-shown
  rows mount at low indices, so index-derived ids **collide in the DOM** — a trigger then opens the
  wrong modal (two search hits showing the *same* text) and Materialize's body-overflow lock can
  fail to release (the window scrollbar stops coming back). A per-entry `id` is unique + stable, so
  it never collides. Do not reintroduce index-based modal ids.
- **Footnotes render on hover, not as a giant tooltip.** In `formatTexts`, a note shaped `[N] …`
  that matches a `<sup>N</sup>` marker in `textProvided` is attached as a hover tooltip
  (`<sup class="footnote-ref" title="…">`) on that marker and dropped from the notes tooltip — so a
  heavily-footnoted piece (e.g. the Radio Talks' 24 notes) no longer overflows the screen. An
  unmatched `[N]` note stays in the notes list.
- **Search covers `title` + `reference` + `textProvided` only — NOT `notes`/`tooltipNotes`.** A term
  that appears only in a note (e.g. "Four Loves", present only in a note on the Radio Talks entry)
  will not match. Intentional.
- **Sticky footer:** `#root` is a `min-height:100vh` flex column; `.App` is `flex:1 0 auto` and
  `.main-content` is `flex:1 0 auto`, so the footer pins to the page bottom even with one result.

## 9. Deploy & dependencies
- **No CI / GitHub Actions.** The site is published **manually**: `git push origin master` updates
  the *source* on GitHub; `npm run deploy` (`predeploy` build → `gh-pages -d build`) pushes the
  *compiled* bundle to the **`gh-pages`** branch, which is what GitHub Pages serves. ⚠ Pushing
  `master` alone does **not** refresh the live site — only `npm run deploy` does; `gh-pages` holds
  the build, not the source. Verify after: the deployed `static/js/main.*.js` bundle contains the
  new content.
- **★ Bump the "last updated" date before every deploy (user directive 2026-08-12).** It is a
  hardcoded string in `components/AboutModal/index.js` (`last updated M.DD.YY · By Justin Keena`),
  not auto-generated — set it to today's date in the same commit as the change you're shipping, or
  it silently goes stale.
- **Dependabot** opens dependency-bump PRs against `origin/master` on GitHub; they merge remotely.
  Keep local `master` current by merging `origin/master` — the bumps touch only
  `package.json`/`package-lock.json`, disjoint from `src/` content, so it merges cleanly — then
  `npm install` before building. (Aug 2026: local `master` had diverged 3/36 from origin — the
  split + content held locally, 18 dependabot bumps held remotely — reconciled by one clean merge.)
