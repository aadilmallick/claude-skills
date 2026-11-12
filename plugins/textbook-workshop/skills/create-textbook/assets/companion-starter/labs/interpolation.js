// A genuine small demo of the mounting contract; replace for the authored subject.
export function mount(stage,controls){
  let fraction=.35;const a=2,b=10;
  const canvas=document.createElement('canvas');canvas.setAttribute('role','img');canvas.setAttribute('aria-label','A point interpolated between values two and ten');stage.append(canvas);const ctx=canvas.getContext('2d');if(!ctx)throw new Error('Canvas 2D is unavailable');
  const label=document.createElement('label');label.textContent='Interpolation fraction';const input=document.createElement('input');Object.assign(input,{type:'range',min:0,max:1,step:.01,value:fraction});input.setAttribute('aria-label','Interpolation fraction');const output=document.createElement('output');label.append(input,output);
  const result=document.createElement('p');result.setAttribute('role','status');const reset=document.createElement('button');reset.textContent='Reset';controls.append(label,result,reset);
  function draw(){const r=canvas.getBoundingClientRect(),dpr=Math.min(devicePixelRatio||1,2);canvas.width=Math.max(1,Math.round(r.width*dpr));canvas.height=Math.max(1,Math.round(r.height*dpr));const w=canvas.width,h=canvas.height,padding=45*dpr,x=padding+fraction*(w-2*padding),y=h/2;
    ctx.fillStyle='#0d1924';ctx.fillRect(0,0,w,h);ctx.strokeStyle='#4a6e82';ctx.lineWidth=3*dpr;ctx.beginPath();ctx.moveTo(padding,y);ctx.lineTo(w-padding,y);ctx.stroke();
    ctx.fillStyle='#c5dce7';ctx.font=`${14*dpr}px system-ui`;ctx.fillText(`a = ${a}`,padding-20*dpr,y+40*dpr);ctx.fillText(`b = ${b}`,w-padding-25*dpr,y+40*dpr);ctx.fillStyle='#91edce';ctx.beginPath();ctx.arc(x,y,11*dpr,0,2*Math.PI);ctx.fill();
    const value=a+(b-a)*fraction;output.textContent=`t = ${fraction.toFixed(2)}`;result.textContent=`${a} + (${b} − ${a}) × ${fraction.toFixed(2)} = ${value.toFixed(2)}`;
  }
  input.oninput=()=>{fraction=Number(input.value);draw();};reset.onclick=()=>{fraction=.35;input.value=fraction;draw();};const observer=new ResizeObserver(draw);observer.observe(stage);draw();return ()=>{observer.disconnect();canvas.remove();};
}
