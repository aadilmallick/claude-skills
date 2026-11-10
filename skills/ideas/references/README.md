# ideas-cli

Print Google autocomplete suggestions for a topic, one per line. No API key, no config, no single point of failure, just a terminal command wrapping a free public endpoint.

## Why

Autocomplete suggestions are real search demand: what people actually type into Google. This CLI turns that into a scriptable, pipeable list you can feed into content planning, SEO research, or any downstream tool, including the [`content-ideas`](https://github.com/alexadark/content-ideas-skill) Claude Code skill.


## Usage

```bash
ideas "ai automation"
```

```
ai automation tools
ai automation software
ai automation examples
ai automation for small business
...
```

### `--deep`

Runs the query across every letter A-Z plus common question words (`how`, `why`, `what`, `best`), then de-duplicates. Much broader coverage, for real keyword research instead of a single autocomplete pass.

```bash
ideas --deep "ai automation"
```

## How it works

Calls `https://suggestqueries.google.com/complete/search`, the same endpoint behind the dropdown under Google's search box. Public, free, no key required.

## File structure

```
ideas-cli/
├── ideas.mjs     # the CLI, single file
├── package.json
├── README.md
└── LICENSE
```