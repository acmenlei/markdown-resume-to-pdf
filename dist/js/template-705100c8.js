import{m as x}from"./element-plus-37c3e502.js";import{_ as B,h as S,N as w,E}from"./index-739b053e.js";import{D as y,o as a,c as l,Z as I,_ as N,a as e,U as c,V as m,at as g,au as A,r as F,b as T,O as f,u as i,F as v,a6 as C,R as p,Q as q}from"./@vue-c6fcbc26.js";import{u as V}from"./vue-router-5174534a.js";import{t as d,f as z}from"./config-0c738696.js";import"./@vueuse-63034ea9.js";import"./lodash-es-9d35530d.js";import"./async-validator-604317c1.js";import"./@element-plus-a7a51df2.js";import"./dayjs-d3824421.js";import"./aos-80360ef4.js";import"./@popperjs-535f1f87.js";import"./@ctrl-aa1b1e70.js";import"./pinia-c946f11f.js";import"./picture-verification-code-77c40e50.js";import"./axios-93ecc7d0.js";import"./nprogress-6c9d9548.js";const k=t=>(g("data-v-63ca35bc"),t=t(),A(),t),G={class:"resume-card","data-aos":"zoom-in"},M={class:"template-hot"},O=k(()=>e("i",{class:"iconfont icon-hot font-20"},null,-1)),R=["src"],U=k(()=>e("div",{class:"resume-card-mask"},[e("button",{class:"btn center pointer"},"\u4F7F\u7528\u6A21\u677F")],-1)),J=y({__name:"resumeCard",props:{theme:null},setup(t){const o=V(),s=n=>{o.push({path:"/editor",query:{type:n}})};return(n,u)=>(a(),l("div",G,[I(e("p",M,[O,c(" "+m(t.theme.hot),1)],512),[[N,t.theme.hot]]),e("div",{onClick:u[0]||(u[0]=_=>s(t.theme.type))},[e("img",{src:t.theme.img,loading:"lazy"},null,8,R),U,c(" "+m(t.theme.name),1)])]))}});const L=B(J,[["__scopeId","data-v-63ca35bc"]]),D=["\u5168\u90E8","\u6821\u62DB","\u793E\u62DB","\u82F1\u6587","Geek","\u8FD0\u8425","\u5546\u52A1","\u8BBE\u8BA1","\u4E92\u8054\u7F51","\u7B80\u7EA6","\u6697\u9ED1","\u901A\u7528","\u4E8B\u4E1A\u5355\u4F4D","\u7814\u7A76\u751F\u590D\u8BD5"];function Q(){const t=F("\u5168\u90E8"),o=F([...d.value]);function s(n){if(t.value=D[n],t.value==="\u5168\u90E8"){o.value=[...d.value];return}o.value=d.value.filter(u=>u.name.includes(t.value))}return{queryCategory:s,category:t,data:o}}function Z(){const t=F([]);async function o(){const s=await z();if(!s.result){S(s.msg);return}const n=JSON.parse(s.result);d.value.forEach(u=>u.hot=n[`t${u.type}`]),t.value=[...d.value].sort((u,_)=>_.hot-u.hot).slice(0,10)}return T(()=>o()),{templateCondition:o,ranks:t}}function j(t){return t>=1e3?(t/1e3).toFixed(1)+"k":t}const h=t=>(g("data-v-fba737e4"),t=t(),A(),t),H={class:"resume-container flex"},K={class:"resume-left-container content-card","data-aos":"fade-right"},P={key:0,class:"resume-card-container"},W={class:"resume-right-container","data-aos":"fade-left"},X={class:"resume-hot-rank content-card mb-20"},Y=h(()=>e("strong",{class:"mb-20"},"\u7B80\u5386\u6A21\u677F\u70ED\u5EA6\u6392\u884C",-1)),tt={key:0},et=["onClick"],ut={class:"line-1"},ot={class:"mr-10"},st=h(()=>e("i",{class:"iconfont icon-hot"},null,-1)),at=h(()=>e("div",{class:"resume-notification content-card"},[e("strong",null,"\u516C\u544A"),e("p",null,[c(" \u5982\u679C\u4F60\u89C9\u5F97\u9879\u76EE\u5BF9\u4F60\u6709\u6240\u5E2E\u52A9\uFF0C\u8BF7\u8003\u8651\u4E3A "),e("a",{href:"https://github.com/acmenlei/codecv",target:"_blank"},"\u9879\u76EE"),c(" \u70B9\u4E00\u4E2A "),e("i",{class:"iconfont icon-star"}),c("\uFF0C\u82E5\u9047\u5230 BUG \u8BF7\u901A\u8FC7\u5E95\u90E8\u5FAE\u4FE1/ "),e("a",{href:"https://github.com/acmenlei/codecv/issues",target:"_blank"},"issues"),c(" \u63CF\u8FF0\u5E76\u590D\u73B0\u4F60\u6240\u9047\u5230\u7684\u95EE\u9898\uFF0C\u826F\u597D\u7684\u7528\u6237\u4F53\u9A8C\u9700\u8981\u5927\u5BB6\u4E00\u8D77\u6765\u6784\u5EFA\uFF0C\u611F\u8C22\u5927\u5BB6\u7684\u652F\u6301\uFF5E\u{1F64F} ")])],-1)),nt=y({__name:"template",setup(t){const{queryCategory:o,data:s}=Q(),{ranks:n}=Z();return(u,_)=>{const b=x;return a(),l("div",H,[e("div",K,[f(w,{button:"\u521B\u4F5C\u6A21\u677F",tabs:i(D),onTabClick:i(o)},null,8,["tabs","onTabClick"]),i(s).length?(a(),l("div",P,[(a(!0),l(v,null,C(i(s),r=>(a(),p(L,{key:r.id,theme:r},null,8,["theme"]))),128))])):(a(),p(E,{key:1,title:"\u6682\u65F6\u6CA1\u6709\u8FD9\u7C7B\u6A21\u677F \u4F60\u53EF\u4EE5\u70B9\u51FB\u53F3\u4E0A\u89D2\u521B\u4F5C\u6A21\u677F\u6216\u8054\u7CFB\u4F5C\u8005\u6DFB\u52A0\uFF5E"}))]),e("div",W,[e("div",X,[Y,i(n).length?(a(),l("ul",tt,[(a(!0),l(v,null,C(i(n),(r,$)=>(a(),l("li",{key:r.type,class:"flex hover pointer",onClick:rt=>u.$router.push({path:"/editor",query:{type:r.type}})},[f(b,{content:r.name,placement:"left"},{default:q(()=>[e("p",ut,[e("span",ot,m($+1),1),c(m(r.name),1)])]),_:2},1032,["content"]),e("sub",null,[st,c(" "+m(i(j)(+String(r.hot))),1)])],8,et))),128))])):(a(),p(E,{key:1,title:"\u6B63\u5728\u52A0\u8F7D\u4E2D"}))]),at])])}}});const kt=B(nt,[["__scopeId","data-v-fba737e4"]]);export{kt as default};
