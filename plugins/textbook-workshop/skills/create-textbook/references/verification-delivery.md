# Verification and delivery

## Independent layers of evidence

| Layer | What it can establish | What it cannot establish alone |
| --- | --- | --- |
| Source audit | Provenance and inspected coverage | Every linked source was read |
| Dependency/teaching review | Prerequisites and narrative sequence | Learner mastery |
| Prose depth measurement | A short or imbalanced draft | Good teaching merely from length |
| Math rendering | Supported equation syntax | Correct equations or numerical answers |
| Numerical tests | Chosen invariants and known outcomes | Complete domain correctness |
| Static/build checks | File resolution, syntax, bundling | Actual visual or hardware execution |
| Runtime/visual inspection | Observed behavior on tested environments | All browsers, GPUs, or accessibility combinations |
| Archive inspection | Required files and integrity | That unexecuted setup instructions work |

Do not collapse these claims into 'everything tested.' Maintain a concise evidence record with commands/actions, observed outcomes, and limits. Reuse valid checks for unchanged implementations; rerun affected checks after a change. Do not repeatedly broaden testing without a new concern.

## Book checks

Confirm all planned chapters exist, prerequisite explanations appear before use, worked examples have intermediate reasoning, and fragments identify setup. Verify the single volume matches the canonical chapters. Check unique stable anchors, chapter/section contents, internal links, source listings, figure paths, and code-fence balance.

Use `scripts/validate_textbook.py PROJECT_ROOT` after assembly. Its checks are deliberately structural. It uses authored chapter depth targets and rejects `draft`/`planned` chapters in final mode. Use `--draft` only for interim inspection, never as evidence of completion. Validate the actual math syntax with an available renderer and verify important arithmetic manually or with meaningful tests.

For PDF, use the host's PDF workflow and render pages. Inspect equations, code, figures, tables, page breaks, and navigation at useful scale. A PDF that generated successfully can still clip a matrix or wrap code incorrectly. For Markdown, test the intended reader's support for anchors, math, and SVG/PNG assets; document limitations if no rendering surface is available.

## Companion checks

Read the documented setup from a learner's perspective. Confirm versions, working directory, run command, local URL, and where to find examples. Run the examples using permitted host tools, inspect their output, and exercise controls. Verify data or computations are genuine. Check the built output when present.

Tie experiments to chapters through stable IDs and explicit descriptions. Include lifecycle behavior, loading failure, invalid inputs, capability checks, keyboard/focus behavior, and representative responsive layouts. Some areas need numerical invariants; some need visual inspection; many need both. State untested platforms rather than promising universal support.

## Packaging

Use one clear output directory with `book.md`, chapter source, declared assets, companion source/build, manifest, provenance, notices, and verification report. Include all referenced supporting files and dependency records. Exclude secrets, authentication data, full source-document extracts without redistribution permission, `node_modules`, `.git`, caches, and unnecessary intermediates. Never copy an entire workspace indiscriminately.

Create the ZIP outside the directory being packaged. Inspect its file inventory, traversal safety, required files, and integrity. Prefer relative paths so extraction on another machine works. Verify the assembled book's content is the edition represented by the archive. If edits occur after assembly or packaging, rebuild and inspect again.

## Final response

Lead with links to the actual single-volume textbook and complete package. Include a concise description of coverage and companion behavior. Distinguish a generated book from a hosted reading website and an instruction plugin from an executable service. State material runtime/rendering limitations. Do not claim a PDF, hosted publication, complete optional project, or installed dependency that was not produced or verified.
