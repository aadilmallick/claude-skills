# Runnable companion requirements

## A companion performs the ideas

The default companion is a local browser application with an experiment gallery, chapter associations, real controls, visible values/results, source inspection, reset behavior, and setup instructions. Build a richer reading website when requested. For math-heavy reading, use a suitable Markdown/math renderer rather than showing raw formulas as if they were rendered equations. Use available established builders and host workflows where appropriate.

Map the curriculum to experiments. Not every conceptual section needs its own animation, but every major implementation claim must have real code and an execution path. State which chapters share an experiment and why. A complete companion is measured by coverage and behavior, not an arbitrary minimum count.

For programming, include complete runnable examples in the stated environment. For mathematics/science, provide simulations or calculators whose outputs are derived from the displayed parameters. For a predominantly noncomputational topic, design meaningful interactive cases or analyses rather than adding irrelevant animation. A topic-specific exception to the browser default should follow the user's preference or an explained environment need.

## Starter contract

`assets/companion-starter` is a dependency-free harness. Copy it into the authored project as `companion/`. From that project root, `node companion/server.mjs` serves the allowed book/companion files on localhost. `node companion/check.mjs` checks the declared module files and metadata. The server does not install dependencies or send data anywhere.

Each catalog entry declares `id`, `title`, `chapter`, `description`, and `module`. A module exports `mount(stage, controls)`, optionally asynchronously, and returns a cleanup function. The host clears the previous controls, disposes the previous experiment, and ignores/disposes late mounts after navigation. The sample interpolation module demonstrates this interface with actual Canvas computation.

Replace the sample subject and catalog; set `starter` to false only after real subject-specific work is implemented and verified. Do not rename the interpolation demo to pretend it demonstrates an unrelated concept. Final validation intentionally rejects an unchanged starter. A code or mathematical result must correspond to the taught model and declared approximation.

## Reproducibility

State supported runtime versions and actual setup commands. Include package manifests and lockfiles if dependencies are introduced. Prefer local bundled libraries/assets in the production build. Keep data fixtures small, synthetic, or appropriately licensed. Include decoders, fonts, shaders, models, or other resources that the examples actually require. Record external dependencies when local bundling is inappropriate.

The built output and source are different deliverables. Verify the build after authoring, serve it, and inspect it independently of the development page when applicable. A Markdown book can remain readable if a GPU or optional runtime is unavailable; show a useful capability message instead of an empty output area.

## Interaction and accessibility

Use labeled native inputs and visible numeric values. Provide keyboard routes for important actions, visible focus, sufficient contrast, and textual status when a visual result changes meaningfully. Keep decorative animation optional, honor reduced motion, and provide pause/reset for continuous simulations. Do not flood assistive technology with a status update every frame.

Inspect representative narrow and desktop layouts. Prevent controls from hiding the lesson's main result. Long code/equations can scroll within their own regions without creating horizontal overflow for the entire page. Long chapter navigation should remain usable.

## Numerical and resource behavior

Separate simulation time from frame count. Define large time-step and invalid-input policies. Keep geometry, units, coordinate frames, distributions, and approximation choices consistent with the book. Use deterministic resets or seeds for meaningful comparisons.

Stop loops, remove listeners, disconnect observers, and release owned resources on unmount. Preserve shared resources still in use. Handle async failure and stale completion. Do not silently replace an unavailable native API with another backend and claim the original API was exercised. Name deliberate fallbacks.

## Evidence

Execute setup and inspect actual output. Exercise at least representative extremes, reset, navigation, repeated entry/exit, and failure paths appropriate to the change. Test nontrivial numerical logic against known results or invariants. A build check does not prove a shader rendered, an API was available, a simulation was correct, or a control changed the result. Record exactly what was executed and any untested hardware/platform cases.
