var T=Object.defineProperty;var L=(e,t,o)=>t in e?T(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var h=(e,t,o)=>(L(e,typeof t!="symbol"?t+"":t,o),o);import{_ as u,E as P}from"./jspdf.0b42b4d1.js";import{t as A}from"./config.6b04bcd2.js";import{r as D}from"./element-plus.98668c60.js";import w from"./html2canvas.4d0ab5af.js";import{s as v,e as b}from"./index.98ebefcf.js";const I=(e,t)=>{const o=e[t];return o?typeof o=="function"?o():Promise.resolve(o):new Promise((s,l)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(l.bind(null,new Error("Unknown variable dynamic import: "+t)))})};async function $(e){return(await I(Object.assign({"../../templates/modules/10front_end/style.scss":()=>u(()=>Promise.resolve({}),["./style.8fdab5df.css"],import.meta.url),"../../templates/modules/11fresh/style.scss":()=>u(()=>Promise.resolve({}),["./style.4360e96f.css"],import.meta.url),"../../templates/modules/12internet_social/style.scss":()=>u(()=>Promise.resolve({}),["./style.0343bb9d.css"],import.meta.url),"../../templates/modules/13geek/style.scss":()=>u(()=>Promise.resolve({}),["./style.6efe79b4.css"],import.meta.url),"../../templates/modules/14heading/style.scss":()=>u(()=>Promise.resolve({}),["./style.02ea8f92.css"],import.meta.url),"../../templates/modules/15simple_versatile/style.scss":()=>u(()=>Promise.resolve({}),["./style.49fceeab.css"],import.meta.url),"../../templates/modules/1internet_avatar/style.scss":()=>u(()=>Promise.resolve({}),["./style.35250429.css"],import.meta.url),"../../templates/modules/2concise/style.scss":()=>u(()=>Promise.resolve({}),["./style.8211914a.css"],import.meta.url),"../../templates/modules/3operation/style.scss":()=>u(()=>Promise.resolve({}),["./style.2366b17b.css"],import.meta.url),"../../templates/modules/4internet/style.scss":()=>u(()=>Promise.resolve({}),["./style.30ddf51a.css"],import.meta.url),"../../templates/modules/5graduation_reexam/style.scss":()=>u(()=>Promise.resolve({}),["./style.aa357dd8.css"],import.meta.url),"../../templates/modules/6operation_avatar/style.scss":()=>u(()=>Promise.resolve({}),["./style.492d19b3.css"],import.meta.url),"../../templates/modules/7simple_avatar/style.scss":()=>u(()=>Promise.resolve({}),["./style.eac5aea9.css"],import.meta.url),"../../templates/modules/8general/style.scss":()=>u(()=>Promise.resolve({}),["./style.86f71d3a.css"],import.meta.url),"../../templates/modules/9business/style.scss":()=>u(()=>Promise.resolve({}),["./style.55d7f298.css"],import.meta.url),"../../templates/modules/create/style.scss":()=>u(()=>Promise.resolve({}),["./style.30a0cd92.css"],import.meta.url)}),`../../templates/modules/${e}/style.scss`)).default}const H=e=>{for(const t of A)if(e===t.type)return t.content;return""},q={h1:{max:30,min:-15,top:0,tag:"",optimal:0},h2:{max:30,min:-15,top:0,tag:"",optimal:0},h3:{max:20,min:-15,top:0,tag:"",optimal:0},h4:{max:20,min:-15,top:0,tag:"",optimal:0},h5:{max:20,min:-15,top:0,tag:"",optimal:0},h6:{max:20,min:-15,top:0,tag:"",optimal:0},li:{max:10,min:-15,top:0,tag:"",optimal:0},p:{max:10,min:-15,top:0,tag:"",optimal:0}},O=(e,t)=>e.optimal>t.optimal,g=(e,t,o)=>[e[t],e[o]]=[e[o],e[t]];class z{constructor(t){h(this,"container",[]);h(this,"cmp",O);this.cmp=t}push(t){const{container:o,cmp:s}=this;o.push(t);let l=o.length-1;for(;l;){const a=Math.floor((l-1)/2);if(!s(o[l],o[a]))return;g(o,l,a),l=a}}pop(){const{container:t,cmp:o}=this;if(!t.length)return null;g(t,0,t.length-1);const s=t.pop(),l=t.length;let a=0,n=a*2+1;for(;n<l;){const i=a*2+2;if(i<l&&o(t[i],t[n])&&(n=i),!o(t[n],t[a]))break;g(t,n,a),a=n,n=a*2+1}return s}top(){return this.container.length?this.container[0]:null}isEmpty(){return this.container.length===0}}function G(){return document.createElement("style")}function U(){return document.createElement("div")}function C(e){return document.head.querySelector(`style[${e}]`)}function j(e){var t;(t=C(e))==null||t.remove()}function R(e){return e.match(/\d+/g).map(o=>parseInt(o))}function J(e,t){const{showLoading:o,closeLoading:s}=x();o("\u6B63\u5728\u5BFC\u51FAPDF \u8BF7\u8010\u5FC3\u7B49\u5F85...");const l=getComputedStyle(t).getPropertyValue("background-color"),[a,n,i]=R(l);w(t,{allowTaint:!1,logging:!1,useCORS:!0,scale:4,backgroundColor:l}).then(m=>{var y;const r=new P("p","mm","a4");r.setFillColor(a,n,i),r.rect(0,0,r.internal.pageSize.width,r.internal.pageSize.height,"F");const c=m.getContext("2d"),_=210,E=297,f=Math.floor(E*m.width/_);let p=0;for(;p<m.height;){const d=document.createElement("canvas");d.width=m.width,d.height=Math.min(f,m.height-p),(y=d.getContext("2d"))==null||y.putImageData(c==null?void 0:c.getImageData(0,p,m.width,Math.min(f,m.height-p)),0,0),r.addImage(d.toDataURL("image/jpeg",1),"JPEG",0,0,_,Math.min(E,_*d.height/d.width)),p+=f,m.height-p>1&&(r.addPage(),r.setFillColor(a,n,i),r.rect(0,0,r.internal.pageSize.width,r.internal.pageSize.height,"F"))}r.save(`${e}.pdf`),v("PDF\u5BFC\u51FA\u6210\u529F")}).catch(m=>{b("\u5BFC\u51FA\u5931\u8D25, "+m)}).finally(s)}function x(){let e=null;function t(s){e=D.service({lock:!0,text:s,background:"rgba(0, 0, 0, 0.7)"})}function o(){e&&e.close()}return{showLoading:t,closeLoading:o}}function K(e=0){const t=document.documentElement||document.body;let o=Math.abs(t.scrollTop-e)/20,s=0,l=-1;const a=o;function n(){s=t.scrollTop;const i=s-e;l==s||i==0||(l=s,window.requestAnimationFrame(function(){if(o=i>0?a:-a,s-=o,Math.abs(i)<a){t.scrollTop=e;return}t.scrollTop=s,Math.abs(i)>0&&n()}))}n()}function Q(e){let t=e==null?void 0:e.offsetTop,o=e==null?void 0:e.offsetParent;for(;o!==null;)t+=o.offsetTop,o=o.offsetParent;return t}function F({node:e,latest:t,uid:o}){var l,a;let s="";if(e.nodeType===Node.ELEMENT_NODE){const n=e.classList,i=e.tagName.toLowerCase();n.contains("flex-layout")?s+=`
::: start
`:n.contains("iconfont")?s+=`icon:${n[1].slice(5)} `:n.contains("head-layout")?s+=`
::: headStart
`:i==="a"?s+="[":["b","strong"].includes(i)?s+="**":i[0]==="h"?s+="#".repeat(+i[1])+" ":i==="li"?s+=`${((l=e.parentElement)==null?void 0:l.tagName.toLowerCase())=="ul"?"- ":o+". "}`:["td","th"].includes(i)?s+="| ":i==="code"?s+="`":i==="i"&&n[0]!="iconfont"?s+="*":i==="br"&&(s+="&nbsp;");const m=e.childNodes;for(let r=0;r<m.length;r++){const c=m[r].nodeType==m[r].ELEMENT_NODE&&((a=m[r].parentElement)==null?void 0:a.tagName.toLowerCase())=="ol";s+=F({node:m[r],latest:r===m.length-1,uid:c?++o:0})}if(n.contains("flex-layout"))s+="::: end";else if(n.contains("head-layout"))s+="::: headEnd";else if(n.contains("flex-layout-item")&&!t)s+=`
:::`;else if(i=="a")s+=`](${e.getAttribute("href")})`;else if(["b","strong"].includes(i))s+="**";else if(i=="img"){const r=e.alt,c=r==null?void 0:r.includes("\u4E2A\u4EBA\u5934\u50CF");s+=`![${c?"\u4E2A\u4EBA\u5934\u50CF":r}](${e.src})`}else i==="tr"?s+="|":["th","td"].includes(i)?s+=" ":i==="code"?s+="`":i==="i"&&n[0]!="iconfont"&&(s+="*");["b","span","strong","a","i","td","th","thead","code","ul","ol"].includes(i)||(s+=`
`)}else{const n=e.textContent||"";s+=n}return s}export{z as H,G as a,U as b,Q as c,J as d,F as e,H as g,$ as i,q as o,C as q,j as r,K as s};