# Case study: a graphics textbook with runnable studies

This sanitized example explains the design lessons behind the workflow. It contains no original user's resources, account identifiers, hosted URLs, or local paths.

A learner who knew JavaScript wanted a comprehensive introduction to web graphics, its mathematics, WebGL, Three.js, and WebGPU. Sources included a broad graphics textbook, a first-principles WebGL website, a WebGPU tutorial, and primary API documentation.

The initial curriculum had a sensible sequence and working experiments, but roughly 500–800 prose words per technical chapter made it read like a set of guides. The learner explicitly asked for textbook depth. The successful revision expanded the reasoning across the whole core, then reorganized the sections so the worked explanations preceded the formulas and API summaries.

For vectors, the chapter began with a destination minus a starting point, calculated the displacement and distance, normalized it to separate direction from speed, and introduced the local meaning of cosine before the dot-product angle relationship. For buffer layouts, the narrative moved from ordinary host values to bytes, scalar representations, alignment, structs, arrays, and actual shader bindings. Neither topic was solved by appending a generic 'deep dive' to the old overview.

The runnable companion included small Canvas studies, raw GPU rendering, scene-library examples, and compute experiments. Its source listings were the actual modules used by the app. Verification distinguished a mathematical test from a browser render and a real native GPU dispatch from a fallback. Optional advanced integrations remained clearly labeled as learner projects.

The single-volume edition added a preface, parts, chapter/section navigation, references, complete source listings, and guided project briefs. Website-only routes became book anchors, figure paths became portable relative assets, and the archive included the runnable companion and setup instructions. Original source extractions and credentials were excluded.

Transfer the process, not the subject-specific numbers: a different book may need fewer chapters, another implementation stack, or a different depth profile. Preserve the core obligations—prerequisites before use, worked reasoning, genuine execution, source honesty, coherent assembly, and a reviewable portable result.
