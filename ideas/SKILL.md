---
name: content-ideas
description: "Turn a topic into a search-intent content plan and ship it as a shareable page. Runs the `ideas` CLI (Google autocomplete), groups the keywords by search intent (questions, comparisons, how-to, commercial), writes three content angles per intent, then renders and deploys the plan to Vercel via the plan-preview skill. Use when the user says 'content ideas for <topic>', 'content plan', 'plan content around <topic>', 'what should I write/make about <topic>', or wants an SEO / search-intent content plan built from a keyword. NOT for scanning Reddit, Hacker News, Product Hunt, or Google Trends for product, YouTube, or niche ideas — that is idea-scout."
---

Turn any topic into a search-intent content plan, and ship it as a shareable page, in one prompt.

Content planning usually means guessing what people search for, then writing generic angles. This skill grounds the plan in real Google autocomplete data: it pulls actual keyword suggestions for a topic, sorts them by search intent, and writes three concrete content angles per intent. No fabricated keywords, no invented demand.

1. Runs the [`ideas`](./references/ideas.mjs) CLI against Google Suggest for your topic (`--deep` mode: every letter A-Z plus question words, for broad coverage).
2. Classifies every keyword into one of four buckets: **Questions**, **Comparisons**, **How-to**, **Commercial**.
3. Writes 3 grounded content angles per bucket (format, target keyword, hook).
4. Saves a local `content-plan-<topic>.md`.
5. Hands off to the `plan-preview` skill to render it as a styled HTML page and deploy it to Vercel or Netlify or Github pages

<objective>
Topic → Google autocomplete keywords → content plan grouped by search intent → shareable HTML deployed to Vercel or Netlify or Github pages. Chains `ideas` CLI + intent classification + plan-preview.
</objective>

<inputs>
- **topic** (required) — extract from "content ideas for X" / "content plan for X". If none given, ask for one.
- **--limit N** (optional) — passthrough to `ideas` to cap raw keywords. Default: no cap.
- **style** (optional) — plan-preview visual style. Default Editorial.
</inputs>

<workflow>
1. **Get topic.** Slug = kebab-case topic (lowercase, spaces→`-`, strip punctuation).
2. **Run** `ideas "<topic>" --deep` (add `--limit N` if user asked). Capture stdout, one keyword per line.
   - Exit 1 / "Could not reach Google Suggest" → stop, tell user it's a network issue, retry.
   - Empty stdout / "No suggestions found" → stop, tell user the topic returned nothing, suggest a broader or differently-worded topic. Do NOT invent keywords.
3. **Classify** every keyword into exactly one bucket (see `<intent_grouping>`).
4. **Write angles** — 3 per bucket (see `<content_angles>`).
5. **Write plan** to `./content-plan-<slug>.md` (see `<plan_format>`).
6. **Hand off** to plan-preview (see `<handoff>`). Deploy to Vercel.
7. **Report** — Vercel URL + local `.md` path + one-line count of keywords per bucket.
</workflow>

<intent_grouping>
Every keyword lands in ONE bucket. Match top-down, first hit wins. Ambiguous → the higher rule.

| Priority | Bucket | Signals in the keyword |
|---|---|---|
| 1 | **How-to** | `how to`, `how do`, `how can`, `tutorial`, `guide`, `setup`, `install`, `steps`, `example`, `learn` |
| 2 | **Comparisons** | `vs`, `versus`, ` or `, `alternative(s)`, `compare`, `difference`, `better than`, `like <x>` |
| 3 | **Commercial** | `best`, `top`, `price/pricing`, `cost`, `buy`, `cheap(est)`, `free`, `deal`, `discount`, `review(s)`, `software`, `tool(s)`, `app`, `service(s)`, `near me` |
| 4 | **Questions** | question words (`what`, `why`, `when`, `where`, `which`, `who`, `is`, `are`, `does`, `can`, `should`, `meaning`, `definition`), a trailing `?`, AND any bare informational phrase that matched nothing above |

Bucket empty after sorting → keep the section, note "no direct autocomplete matches; angles inferred from the topic."
</intent_grouping>

<content_angles>
Per bucket, 3 concrete angles. Each angle:
- **Title** — a real headline someone would click, not a label.
- **Format** — pick one that fits the intent: blog post, pillar article, YouTube video, YouTube Short, LinkedIn post, carousel, comparison table, checklist, landing page, email.
- **Targets** — the exact keyword(s) from the `ideas` output it answers.
- **Angle** — one line on the take / hook.

Match format to intent: How-to → tutorial/video/checklist. Comparisons → comparison table/blog. Commercial → landing page/review/pillar. Questions → blog/Short/carousel. Ground every angle in a real keyword from the output; don't fabricate demand.
</content_angles>

<plan_format>
Write `./content-plan-<slug>.md`:

```markdown
# Content Plan: <Topic>

Built from Google autocomplete (`ideas "<topic>" --deep`). <N> keywords across 4 search intents.

## Questions
Keywords: <comma list of this bucket's keywords>

### <Angle title>
- **Format:** <format>
- **Targets:** <keyword(s)>
- **Angle:** <one line>

### <Angle title>
...  (3 angles total)

## Comparisons
...

## How-to
...

## Commercial
...
```

Order sections: Questions, Comparisons, How-to, Commercial. Keep every raw keyword visible in its bucket's `Keywords:` line so the plan stays traceable.
</plan_format>

<handoff>
Invoke the **plan-preview** skill on `./content-plan-<slug>.md`. Tell it:
- **Documentation mode**, Editorial style (unless user picked another).
- Editorial tab names per intent, not "Section 1".
- **Deploy to Vercel** — project slug `content-plan-<slug>`. This is required, not optional; don't just offer it.

plan-preview owns HTML generation and `scripts/deploy-vercel.sh`. Do not hand-roll the HTML.
</handoff>

<boundaries>
- Only plan around keywords `ideas` actually returned. Never fabricate keywords or search demand.
- Do not modify the generated HTML directly; plan-preview owns it.
- One keyword → one bucket. No duplicates across sections.
</boundaries>

<success_criteria>
- `ideas "<topic>" --deep` ran; real keywords captured (or clean stop on empty/error).
- 4 sections, each with its keyword list + exactly 3 grounded angles.
- `content-plan-<slug>.md` written.
- plan-preview rendered it and deployed to Vercel; user gets the live URL.
</success_criteria>