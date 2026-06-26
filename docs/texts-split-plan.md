# Plan — split `texts.js` into per-type files

Status: **DONE 2026-06-25** (executed by `split_texts.py`; CRA build passed). Note: a comment/string-aware lexer (`texts_lexer.py`) was needed — the naive parser had counted 766 by wrongly including 5 commented-out draft blocks; the true active count is **761** (+5 drafts preserved in `_drafts.js`).

Decisions locked (2026-06-25): **Option B** (per-type files
ARE the source; `index.js` re-exports), **6 files** (one per type), **chronological order**
(by `year` asc) kept tidy by an **auto-normalizer** (`normalize_texts.py`: append an entry
anywhere → run it → file is re-sorted + the entry gets an `id`). Goal: make the ~8.4k-line
`texts.js` easier to author and diff, organized by type, **with zero data loss** and no change to
the deployed app's behavior.

## Constraints (hard)
1. **No data loss.** Every one of the 761 entries — every field, including the new `id` and the
   exact HTML in `title`/`textProvided`/`notes` — must survive byte-for-byte.
2. **App unchanged.** `App.js`'s `import { texts } from './texts'` must keep working and the
   rendered table must be identical.
3. **Downstream unbroken.** The search repo's ingest (`update_opera_obscura.py` + the 6
   extractors + `assign_texts_ids.py`) must keep parsing the same 761 entries.
4. Easy to add entries out of order; pairs naturally with the stable `id`.

## Target structure (recommended: Option B — folder + re-export)
```
src/texts/
  letters.js       export const letters = [ {…}, … ]
  prose.js         export const prose = [ … ]
  poems.js         export const poems = [ … ]
  annotations.js   export const annotations = [ … ]
  diaries.js       export const diaries = [ … ]
  blurbs.js        export const blurbs = [ … ]
  index.js         // re-export: concat all six into `texts`
```
`src/texts/index.js`:
```js
import { letters } from './letters';
import { prose } from './prose';
import { poems } from './poems';
import { annotations } from './annotations';
import { diaries } from './diaries';
import { blurbs } from './blurbs';
export const texts = [...letters, ...prose, ...poems, ...annotations, ...diaries, ...blurbs];
```
`App.js` keeps `import { texts } from './texts'` — it resolves the **folder** (`src/texts/index.js`),
so no App change. The old `src/texts.js` is deleted (its content now lives in the per-type files).
Within each per-type file, entries can be ordered however you like (by year, or just appended);
order only affects the default pre-sort, and `App.js` sorts by `year` anyway.

### Alternative (Option A — keep a generated `texts.js`)
Author in `src/texts/<type>.js`; a small script concatenates them back into a generated
`src/texts.js` (kept in the repo, marked "GENERATED — do not edit"). Pro: ZERO change to App.js
*and* to the search-repo parser (both still read `texts.js`). Con: a generated file in the repo +
you must run the concatenator before `npm run deploy` / before the downstream sync.
**Recommendation: Option B** — the per-type files *are* the source; no generated artifact to keep
in sync. (Choose A only if you want the search-repo parser to stay literally untouched.)

## Migration (one-time, automated, verified)
A migration script (run once):
1. Parse the current `texts.js` into its 761 entry objects, preserving each entry's **exact text**
   (the brace-matched `_raw`, which already includes the `id`).
2. Bucket by `type` (Letter/Prose/Poem/Annotation/Diary/Blurb).
3. Write each bucket to `src/texts/<type>.js` as `export const <type> = [ <verbatim entry objects> ];`
   — entry text copied byte-for-byte (only the array wrapper + `export const` is new).
4. Write `src/texts/index.js` (the re-export above) and delete `src/texts.js`.
Section comments (`// PROSE PIECES`) are not in entry bodies; they become redundant once files are
per-type, so they're dropped (or regenerated as a file header). Nothing in the *data* is lost.

## Verification (must all pass before committing)
- **Field-identical:** a checker imports/parses the new per-type files, rebuilds the entry list,
  and compares to the pre-split entries **keyed by `id`** — every field of every entry identical,
  761 in / 761 out, no dupes, no drops.
- **App builds + renders:** `npm run build` succeeds; `npm start` shows the same table (same count,
  sort, filters).
- **Downstream parses:** the search repo's `update_opera_obscura.py --dry-run` (after its parser is
  pointed at the folder) reports the same 761 entries with no spurious new/removed.

## Downstream changes (search repo — `csl-opera-omnia-search`)
Only one function needs to change: `parse_all_entries()` in `update_opera_obscura.py` — instead of
reading a single `texts.js`, read every `src/texts/*.js` except `index.js` (parse each with the
existing brace-walker, concatenate). All consumers (`update_opera_obscura.py`, the 6 extractors,
`assign_texts_ids.py`) go through that one function, so they all follow automatically. (Option A
needs **no** downstream change.) The `_Processed` copy step copies the folder instead of the file.

## Pair with: wire `id` into change detection
Do this together with the split (it's the payoff for the ids):
- Change `identity_key()` in `update_opera_obscura.py` to use `entry['id']` when present (fallback
  to the composite hash for any id-less entry). Then a *correction* to an entry's title/metadata
  registers as a clean **MODIFY** instead of delete+new.
- One-time **manifest re-baseline** right after, so the key change doesn't show as "761 new + 761
  removed" once. (Add a `--rebaseline` mode: rebuild `.opera_obscura_manifest.json` from current
  entries without extracting.)
- (Later/optional) **id-keyed corpus folders** so *title* corrections update the same corpus folder
  instead of orphaning a new one — a larger change to the 6 extractors; defer until needed.

## Rollout (checkpointed)
1. Write + run the migration script → per-type files + `index.js`; delete `texts.js`. **Verify**
   (field-identical + `npm run build`). Review the git diff in the OO repo; commit there.
2. Search repo: update `parse_all_entries()` for the folder; `--dry-run` shows the same 761; wire
   `identity_key` on `id` + add `--rebaseline`; re-baseline. Commit in the search repo.
3. Author new entries in the per-type files going forward; run `assign_texts_ids.py` to mint ids.

## Decisions (locked 2026-06-25)
- **Structure: Option B** — per-type files are the source; `src/texts/index.js` re-exports the
  concatenation; `App.js` import unchanged; old `src/texts.js` deleted.
- **Granularity: 6 files** — one per type (letters/prose/poems/annotations/diaries/blurbs).
- **Ordering: chronological** (by `year` asc, stable) within each file, maintained by the
  auto-normalizer so adding stays effortless (append anywhere → normalize). The app still applies
  its own (year → title → reference) display sort, so file order is for authoring readability.

## App load/spinner contract (must be preserved — verified)
`App.js` does `import { texts } from './texts'` (static) → `componentDidMount → formatTexts()`
formats the FULL array, then in the `setState` callback runs `sort("year")` + `hideLoadingSpinner()`
(`render()` returns `null` while `state.texts === null`, so the HTML `#loading-spinner` shows).
Because the per-type imports are **static**, `texts` is still the complete 761-entry array
synchronously before `App` mounts — so the spinner still hides only after everything is loaded +
formatted + sorted (+ fonts ready). Do NOT use dynamic `import()` for the per-type files.
