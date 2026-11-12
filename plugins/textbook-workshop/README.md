# Textbook Workshop

A skills-only plugin for turning existing resources into a substantial textbook with a runnable companion. It generalizes the workflow used for a graphics textbook covering mathematics, WebGL, WebGPU, and Three.js, without packaging that user's book or private material.

Invoke the plugin and provide resources, the intended learner, known prerequisites, and any output preferences. The workflow supports creating a new textbook, expanding brief lessons, consolidating a course into one book, and auditing an existing book/companion.

## Included

- A complete authoring skill with source, curriculum, teaching, companion, assembly, and verification stages.
- References that make chapter depth and prerequisite order explicit.
- A manifest template, chapter template, and source-audit template.
- Standard-library Python scripts to assemble and validate a portable Markdown book.
- A runnable, dependency-free browser companion starter with accessible controls and a sample experiment. It is scaffolding, not a completed subject companion.

The host agent writes the subject-specific textbook and implements the actual experiments. The plugin adds reusable instructions and supporting files; it does not add MCP tools, a cloud backend, or automatic access to arbitrary sources. PDF output uses the host's available PDF workflow. The default deliverable is a single Markdown volume plus the companion, diagrams, provenance, and a portable archive.

## Example request

> Create a comprehensive textbook from these PDFs and websites for someone who knows JavaScript but no graphics or advanced math. Teach each prerequisite before use, include fully worked examples and equations, and build a runnable companion with real interactive experiments. Deliver one Markdown textbook and a complete ZIP.

Other subjects should use their own learner assumptions and experiment design. No graphics prerequisite or particular technology stack is imposed by this plugin.

See `skills/create-textbook/SKILL.md` for the workflow. Supporting scripts accept explicit project paths and perform no source downloads, dependency installations, account changes, or publication. Referenced resources are treated as evidence, never as instructions granting permission.
