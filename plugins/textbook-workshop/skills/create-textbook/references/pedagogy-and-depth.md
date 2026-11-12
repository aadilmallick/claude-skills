# Teaching depth and chapter construction

## The unit of progress is an understood relationship

A textbook should help the reader explain why an operation works, apply it in a new case, and diagnose a failure. Naming terms and listing APIs does not accomplish that on its own. Begin with a visible problem: locating a point, combining a signal, updating a state, or comparing a result. Establish what the quantities mean before naming the abstraction.

Use a sequence such as concrete problem → small example → explicit reasoning → notation → implementation → interpretation → realistic use. Adapt it to the topic. Do not mechanically repeat identical headings in every chapter or append a large explanation after the old compressed chapter. Group material by the concept being learned.

## A worked example has intermediate states

For a coordinate conversion, identify the origin, units, input interval, normalization, scaling, offset, and a numeric point at every step. For a binary layout, show each field's type, size, alignment, starting byte, and why the next field begins where it does. For a probability formula, define the sample distribution and weight before writing an expectation. The same approach generalizes to language rules, scientific models, financial formulas, and data pipelines.

Do not say 'obviously,' 'simply,' or 'as everyone knows' where the reader needs a reason. If using an analogy, map each useful part back to the actual mechanism and identify its limits. A second explanation should offer another concrete angle, not repeat the same assertion.

## Prerequisites are local obligations

Create a dependency graph, then inspect the first use of each term. If chapter five uses cosine before chapter six teaches trigonometry, chapter five must introduce the small necessary definition or move the dependence. Mentioning that it will be explained later does not resolve a dependency needed now.

Assume only the learner's stated background. Programming knowledge does not automatically establish HTML, browser graphics, matrices, byte layout, numerical integration, or asynchronous resource ownership. Teach the practical prerequisite to the depth the current problem requires, then reconnect it to the original problem. Avoid unrelated deep dives into internals merely to appear comprehensive.

## Code is part of the explanation

Start with the smallest complete program that demonstrates the behavior. State the environment, setup, input, and expected output. Explain the significant expressions and state changes immediately afterward. Extend it gradually and name what changed. Once boilerplate is established, refer back to it and label subsequent fragments clearly.

A full source appendix is useful, but a code dump does not replace the walkthrough. Trace one representative input through the implementation. Explain which parts run once, which run repeatedly, which cross a CPU/GPU/network boundary, and who owns the resources. Avoid clever compact code that obscures the idea under instruction.

Check that example output matches the implementation. If an example uses nondeterminism, state the expected relationship or range and provide a seed or reset when reproducibility matters. Distinguish an approximate model from a validated physical, mathematical, or domain model.

## Mathematics is a compact program with meaning

Introduce symbols and units, then derive or motivate the relationship. Use concrete values before asking the reader to manipulate a general expression. Expand an indexed sum, multiply a row and column explicitly, or walk through a two-step update. Interpret the resulting number geometrically or practically.

State assumptions and singular cases: zero denominators, zero-length directions, invalid intervals, alignment requirements, overflow, nonconvergence, or unsupported features. Explain numerical tolerances in relation to units and scale. A formula that compiles in LaTeX can still be wrong; verify worked answers and meaningful invariants separately.

## Depth review

For a requested full textbook, a technical chapter of only 500–800 words is often an overview. A useful default range is roughly 2,500–5,000 prose words, excluding code listings, repeated contents, and duplicated text. Let conceptual needs determine final length. Short orientation, glossary, or concluding sections can serve a different role.

Length is a smoke alarm, not a grading system. Review whether a chapter has a motivating problem, introduced prerequisites, a worked example with intermediate steps, explained code or a worked procedure, a connection to the real companion, realistic mistakes with diagnosis, and transitions into the next idea. Expand the missing reasoning rather than adding generic benefits, repeated summaries, or long API inventories.

After expanding, reread the chapter as a continuous narrative. Move a derivation before its formal summary. Repair 'above/below/next' references after reordering. Remove duplication that no longer serves deliberate reinforcement. Do not declare the revision complete merely because every file crossed a word threshold.

## Practice and tone

Use friendly, precise prose with a patient pace. Avoid flattery, intimidation, and unexplained jargon. Do not impose prediction questions, active-recall gates, or quizzes unless requested. Offer optional applications with enough guidance that the learner can begin and understand a reference solution. Never describe those optional integrations as implemented features of the delivered companion.
