# Runnable companion starter

This is an executable development harness, not a completed textbook companion. Copy this directory to the authored book project as `companion/`. It requires Node.js 18+ and no npm dependencies.

From the book project root:

```sh
node companion/check.mjs
node companion/server.mjs
```

Open the printed localhost address. The sample module performs actual linear interpolation and draws the selected position. Its controls expose the fraction and arithmetic. View its source through the app. The server serves only intended book and companion paths on loopback.

Replace `catalog.json` and implement the actual subject experiments in `labs/`. Each module exports `mount(stage, controls)` and returns cleanup, optionally asynchronously. Keep a stable chapter ID in each catalog entry. Add suitable lesson links and a proper math/Markdown reading view if requested; the default book link downloads/displays the authored Markdown directly.

Change `starter` to false only when the subject-specific companion is complete and verified. The textbook validator rejects an unchanged starter. Readability, numerical accuracy, runtime output, capability handling, and accessibility require author review beyond the static catalog check.
