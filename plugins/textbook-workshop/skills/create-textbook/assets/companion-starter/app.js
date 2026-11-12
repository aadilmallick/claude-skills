const stage=document.querySelector('#stage'),controls=document.querySelector('#controls');
let cleanup=()=>{},generation=0;
const response=await fetch('/companion/catalog.json');
if(!response.ok)throw new Error('Companion catalog could not be loaded');
const catalog=await response.json();document.querySelector('#title').textContent=catalog.title;
if(!catalog.starter){document.querySelector('#notice').textContent='Choose an experiment, change a parameter, and connect the result to the book.';document.querySelector('footer').textContent='Use the book chapters for the reasoning and these experiments for the working implementation.';}
async function open(entry,button){
  const current=++generation;cleanup();cleanup=()=>{};stage.replaceChildren();controls.replaceChildren();
  document.querySelectorAll('#gallery button').forEach(b=>b.setAttribute('aria-current',String(b===button)));
  const heading=document.querySelector('#heading');heading.replaceChildren();const title=document.createElement('h2');title.textContent=entry.title;const description=document.createElement('p');description.textContent=entry.description;heading.append(title,description);
  try{
    const url=new URL(entry.module,new URL('/companion/',location.href));
    if(url.origin!==location.origin||!url.pathname.startsWith('/companion/'))throw new Error('Experiment path must remain inside companion');
    const sourceResponse=await fetch(url);if(!sourceResponse.ok)throw new Error('Source module could not be loaded');
    const source=await sourceResponse.text();const module=await import(url.href);if(current!==generation)return;
    document.querySelector('#source').textContent=source;
    if(typeof module.mount!=='function')throw new Error('Module must export mount(stage, controls)');
    const dispose=await module.mount(stage,controls);
    if(current!==generation){dispose?.();return;}
    cleanup=typeof dispose==='function'?dispose:()=>{};
  }catch(error){if(current===generation){stage.replaceChildren();const message=document.createElement('p');message.className='error';message.setAttribute('role','status');message.textContent=error.message;stage.append(message);}}
}
for(const entry of catalog.experiments){const button=document.createElement('button');button.textContent=entry.title;button.onclick=()=>open(entry,button);document.querySelector('#gallery').append(button);}
const first=document.querySelector('#gallery button');if(first)first.click();
addEventListener('pagehide',()=>{generation++;cleanup();});
