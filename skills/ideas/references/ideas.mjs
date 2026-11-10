#!/usr/bin/env node

const args = process.argv.slice(2);
const deep = args.includes("--deep");
const topic = args.filter((a) => a !== "--deep").join(" ").trim();

if (!topic) {
  console.error('Usage: ideas [--deep] "your topic"');
  process.exit(1);
}

const suggest = async (query) => {
  const url =
    "https://suggestqueries.google.com/complete/search?client=firefox&q=" +
    encodeURIComponent(query);
  try {
    const res = await fetch(url);
    if (!res.ok) return [];
    const [, suggestions] = await res.json();
    return suggestions || [];
  } catch {
    return [];
  }
};

const queries = [topic];
if (deep) {
  const modifiers = [..."abcdefghijklmnopqrstuvwxyz", "how", "why", "what", "best"];
  for (const m of modifiers) queries.push(`${topic} ${m}`);
}

const results = await Promise.all(queries.map(suggest));
const unique = [...new Set(results.flat())];

if (unique.length === 0) {
  console.error(`No suggestions for "${topic}"`);
  process.exit(0);
}

for (const s of unique) console.log(s);