import {readFile,access} from 'node:fs/promises';import path from 'node:path';import {fileURLToPath} from 'node:url';
const root=path.dirname(fileURLToPath(import.meta.url)),catalog=JSON.parse(await readFile(path.join(root,'catalog.json'),'utf8'));const ids=new Set();
if(!catalog.experiments?.length)throw new Error('Declare experiments');
for(const entry of catalog.experiments){if(!entry.id||!entry.title||!entry.chapter||typeof entry.module!=='string')throw new Error('Incomplete experiment metadata');if(ids.has(entry.id))throw new Error('Duplicate experiment ID');ids.add(entry.id);const file=path.resolve(root,entry.module);if(!file.startsWith(root+path.sep))throw new Error('Module path escapes companion');await access(file);}
console.log(`Catalog/module paths checked: ${ids.size}. Starter: ${catalog.starter}. Runtime behavior requires browser verification.`);
