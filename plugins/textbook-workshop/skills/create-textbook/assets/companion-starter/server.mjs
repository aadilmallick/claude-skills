// Run from any directory: node PATH/TO/companion/server.mjs
// Serves only explicitly allowed book/companion files on loopback.
import http from 'node:http';import {readFile,realpath,stat} from 'node:fs/promises';import path from 'node:path';import {fileURLToPath} from 'node:url';
const companion=path.dirname(fileURLToPath(import.meta.url)),root=path.dirname(companion);
const types={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.mjs':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json; charset=utf-8','.md':'text/plain; charset=utf-8','.txt':'text/plain; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.webp':'image/webp','.woff2':'font/woff2'};
const server=http.createServer(async(req,res)=>{try{
  if(req.method!=='GET'&&req.method!=='HEAD'){res.writeHead(405);res.end();return;}
  let pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);if(pathname==='/')pathname='/companion/index.html';
  if(pathname.split('/').some(p=>p.startsWith('.')||p.includes('\\'))||!(/^\/(companion|chapters|assets)\//.test(pathname)||['/book.md','/book.json'].includes(pathname))){res.writeHead(403);res.end('Not served');return;}
  const candidate=path.resolve(root,'.'+pathname),actual=await realpath(candidate);
  const relative=path.relative(root,actual).split(path.sep).join('/');
  const allowedActual=/^(companion|chapters|assets)\//.test(relative)||['book.md','book.json'].includes(relative);
  if(!actual.startsWith(root+path.sep)||!allowedActual||!(await stat(actual)).isFile()||!types[path.extname(actual)]){res.writeHead(403);res.end('Not served');return;}
  const file=await readFile(actual);res.writeHead(200,{'Content-Type':types[path.extname(actual)],'X-Content-Type-Options':'nosniff','Cache-Control':'no-store'});res.end(req.method==='HEAD'?undefined:file);
}catch{res.writeHead(404);res.end('File not found');}});
const port=Number(process.env.PORT||4173);server.listen(port,'127.0.0.1',()=>console.log(`Companion ready: http://127.0.0.1:${server.address().port}/`));
