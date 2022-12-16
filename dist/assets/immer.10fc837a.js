function d(e){for(var t=arguments.length,o=Array(t>1?t-1:0),r=1;r<t;r++)o[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(o.length?" "+o.map(function(n){return"'"+n+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function D(e){return!!e&&!!e[P]}function j(e){var t;return!!e&&(function(o){if(!o||typeof o!="object")return!1;var r=Object.getPrototypeOf(o);if(r===null)return!0;var n=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return n===Object||typeof n=="function"&&Function.toString.call(n)===be}(e)||Array.isArray(e)||!!e[x]||!!(!((t=e.constructor)===null||t===void 0)&&t[x])||W(e)||U(e))}function F(e,t,o){o===void 0&&(o=!1),A(e)===0?(o?Object.keys:Y)(e).forEach(function(r){o&&typeof r=="symbol"||t(r,e[r],e)}):e.forEach(function(r,n){return t(n,r,e)})}function A(e){var t=e[P];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:W(e)?2:U(e)?3:0}function M(e,t){return A(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function R(e,t){return A(e)===2?e.get(t):e[t]}function ce(e,t,o){var r=A(e);r===2?e.set(t,o):r===3?(e.delete(t),e.add(o)):e[t]=o}function le(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function W(e){return ye&&e instanceof Map}function U(e){return de&&e instanceof Set}function S(e){return e.o||e.t}function J(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=me(e);delete t[P];for(var o=Y(t),r=0;r<o.length;r++){var n=o[r],u=t[n];u.writable===!1&&(u.writable=!0,u.configurable=!0),(u.get||u.set)&&(t[n]={configurable:!0,writable:!0,enumerable:u.enumerable,value:e[n]})}return Object.create(Object.getPrototypeOf(e),t)}function L(e,t){return t===void 0&&(t=!1),Q(e)||D(e)||!j(e)||(A(e)>1&&(e.set=e.add=e.clear=e.delete=se),Object.freeze(e),t&&F(e,function(o,r){return L(r,!0)},!0)),e}function se(){d(2)}function Q(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function w(e){var t=G[e];return t||d(18,e),t}function pe(e,t){G[e]||(G[e]=t)}function te(){return k}function $(e,t){t&&(w("Patches"),e.u=[],e.s=[],e.v=t)}function z(e){X(e),e.p.forEach(ve),e.p=null}function X(e){e===k&&(k=e.l)}function re(e){return k={p:[],l:k,h:e,m:!0,_:0}}function ve(e){var t=e[P];t.i===0||t.i===1?t.j():t.O=!0}function N(e,t){t._=t.p.length;var o=t.p[0],r=e!==void 0&&e!==o;return t.h.g||w("ES5").S(t,e,r),r?(o[P].P&&(z(t),d(4)),j(e)&&(e=I(t,e),t.l||K(t,e)),t.u&&w("Patches").M(o[P].t,e,t.u,t.s)):e=I(t,o,[]),z(t),t.u&&t.v(t.u,t.s),e!==V?e:void 0}function I(e,t,o){if(Q(t))return t;var r=t[P];if(!r)return F(t,function(u,i){return oe(e,r,t,u,i,o)},!0),t;if(r.A!==e)return t;if(!r.P)return K(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var n=r.i===4||r.i===5?r.o=J(r.k):r.o;F(r.i===3?new Set(n):n,function(u,i){return oe(e,r,n,u,i,o)}),K(e,n,!1),o&&e.u&&w("Patches").R(r,o,e.u,e.s)}return r.o}function oe(e,t,o,r,n,u){if(D(n)){var i=I(e,n,u&&t&&t.i!==3&&!M(t.D,r)?u.concat(r):void 0);if(ce(o,r,i),!D(i))return;e.m=!1}if(j(n)&&!Q(n)){if(!e.h.F&&e._<1)return;I(e,n),t&&t.A.l||K(e,n)}}function K(e,t,o){o===void 0&&(o=!1),e.h.F&&e.m&&L(t,o)}function C(e,t){var o=e[P];return(o?S(o):e)[t]}function ne(e,t){if(t in e)for(var o=Object.getPrototypeOf(e);o;){var r=Object.getOwnPropertyDescriptor(o,t);if(r)return r;o=Object.getPrototypeOf(o)}}function q(e){e.P||(e.P=!0,e.l&&q(e.l))}function T(e){e.o||(e.o=J(e.t))}function B(e,t,o){var r=W(t)?w("MapSet").N(t,o):U(t)?w("MapSet").T(t,o):e.g?function(n,u){var i=Array.isArray(n),f={i:i?1:0,A:u?u.A:te(),P:!1,I:!1,D:{},l:u,t:n,k:null,o:null,j:null,C:!1},a=f,c=H;i&&(a=[f],c=E);var s=Proxy.revocable(a,c),p=s.revoke,h=s.proxy;return f.k=h,f.j=p,h}(t,o):w("ES5").J(t,o);return(o?o.A:te()).p.push(r),r}function he(e){return D(e)||d(22,e),function t(o){if(!j(o))return o;var r,n=o[P],u=A(o);if(n){if(!n.P&&(n.i<4||!w("ES5").K(n)))return n.t;n.I=!0,r=ue(o,u),n.I=!1}else r=ue(o,u);return F(r,function(i,f){n&&R(n.t,i)===f||ce(r,i,t(f))}),u===3?new Set(r):r}(e)}function ue(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return J(e)}function Pe(){function e(r){if(!j(r))return r;if(Array.isArray(r))return r.map(e);if(W(r))return new Map(Array.from(r.entries()).map(function(i){return[i[0],e(i[1])]}));if(U(r))return new Set(Array.from(r).map(e));var n=Object.create(Object.getPrototypeOf(r));for(var u in r)n[u]=e(r[u]);return M(r,x)&&(n[x]=r[x]),n}function t(r){return D(r)?e(r):r}var o="add";pe("Patches",{$:function(r,n){return n.forEach(function(u){for(var i=u.path,f=u.op,a=r,c=0;c<i.length-1;c++){var s=A(a),p=""+i[c];s!==0&&s!==1||p!=="__proto__"&&p!=="constructor"||d(24),typeof a=="function"&&p==="prototype"&&d(24),typeof(a=R(a,p))!="object"&&d(15,i.join("/"))}var h=A(a),l=e(u.value),v=i[i.length-1];switch(f){case"replace":switch(h){case 2:return a.set(v,l);case 3:d(16);default:return a[v]=l}case o:switch(h){case 1:return v==="-"?a.push(l):a.splice(v,0,l);case 2:return a.set(v,l);case 3:return a.add(l);default:return a[v]=l}case"remove":switch(h){case 1:return a.splice(v,1);case 2:return a.delete(v);case 3:return a.delete(u.value);default:return delete a[v]}default:d(17,f)}}),r},R:function(r,n,u,i){switch(r.i){case 0:case 4:case 2:return function(f,a,c,s){var p=f.t,h=f.o;F(f.D,function(l,v){var y=R(p,l),b=R(h,l),m=v?M(p,l)?"replace":o:"remove";if(y!==b||m!=="replace"){var g=a.concat(l);c.push(m==="remove"?{op:m,path:g}:{op:m,path:g,value:b}),s.push(m===o?{op:"remove",path:g}:m==="remove"?{op:o,path:g,value:t(y)}:{op:"replace",path:g,value:t(y)})}})}(r,n,u,i);case 5:case 1:return function(f,a,c,s){var p=f.t,h=f.D,l=f.o;if(l.length<p.length){var v=[l,p];p=v[0],l=v[1];var y=[s,c];c=y[0],s=y[1]}for(var b=0;b<p.length;b++)if(h[b]&&l[b]!==p[b]){var m=a.concat([b]);c.push({op:"replace",path:m,value:t(l[b])}),s.push({op:"replace",path:m,value:t(p[b])})}for(var g=p.length;g<l.length;g++){var _=a.concat([g]);c.push({op:o,path:_,value:t(l[g])})}p.length<l.length&&s.push({op:"replace",path:a.concat(["length"]),value:p.length})}(r,n,u,i);case 3:return function(f,a,c,s){var p=f.t,h=f.o,l=0;p.forEach(function(v){if(!h.has(v)){var y=a.concat([l]);c.push({op:"remove",path:y,value:v}),s.unshift({op:o,path:y,value:v})}l++}),l=0,h.forEach(function(v){if(!p.has(v)){var y=a.concat([l]);c.push({op:o,path:y,value:v}),s.unshift({op:"remove",path:y,value:v})}l++})}(r,n,u,i)}},M:function(r,n,u,i){u.push({op:"replace",path:[],value:n===V?void 0:n}),i.push({op:"replace",path:[],value:r})}})}var ie,k,Z=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",ye=typeof Map<"u",de=typeof Set<"u",ae=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",V=Z?Symbol.for("immer-nothing"):((ie={})["immer-nothing"]=!0,ie),x=Z?Symbol.for("immer-draftable"):"__$immer_draftable",P=Z?Symbol.for("immer-state"):"__$immer_state",be=""+Object.prototype.constructor,Y=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,me=Object.getOwnPropertyDescriptors||function(e){var t={};return Y(e).forEach(function(o){t[o]=Object.getOwnPropertyDescriptor(e,o)}),t},G={},H={get:function(e,t){if(t===P)return e;var o=S(e);if(!M(o,t))return function(n,u,i){var f,a=ne(u,i);return a?"value"in a?a.value:(f=a.get)===null||f===void 0?void 0:f.call(n.k):void 0}(e,o,t);var r=o[t];return e.I||!j(r)?r:r===C(e.t,t)?(T(e),e.o[t]=B(e.A.h,r,e)):r},has:function(e,t){return t in S(e)},ownKeys:function(e){return Reflect.ownKeys(S(e))},set:function(e,t,o){var r=ne(S(e),t);if(r!=null&&r.set)return r.set.call(e.k,o),!0;if(!e.P){var n=C(S(e),t),u=n==null?void 0:n[P];if(u&&u.t===o)return e.o[t]=o,e.D[t]=!1,!0;if(le(o,n)&&(o!==void 0||M(e.t,t)))return!0;T(e),q(e)}return e.o[t]===o&&typeof o!="number"&&(o!==void 0||t in e.o)||(e.o[t]=o,e.D[t]=!0,!0)},deleteProperty:function(e,t){return C(e.t,t)!==void 0||t in e.t?(e.D[t]=!1,T(e),q(e)):delete e.D[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var o=S(e),r=Reflect.getOwnPropertyDescriptor(o,t);return r&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:r.enumerable,value:o[t]}},defineProperty:function(){d(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){d(12)}},E={};F(H,function(e,t){E[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),E.deleteProperty=function(e,t){return E.set.call(this,e,t,void 0)},E.set=function(e,t,o){return H.set.call(this,e[0],t,o,e[0])};var ge=function(){function e(o){var r=this;this.g=ae,this.F=!0,this.produce=function(n,u,i){if(typeof n=="function"&&typeof u!="function"){var f=u;u=n;var a=r;return function(y){var b=this;y===void 0&&(y=f);for(var m=arguments.length,g=Array(m>1?m-1:0),_=1;_<m;_++)g[_-1]=arguments[_];return a.produce(y,function(fe){var ee;return(ee=u).call.apply(ee,[b,fe].concat(g))})}}var c;if(typeof u!="function"&&d(6),i!==void 0&&typeof i!="function"&&d(7),j(n)){var s=re(r),p=B(r,n,void 0),h=!0;try{c=u(p),h=!1}finally{h?z(s):X(s)}return typeof Promise<"u"&&c instanceof Promise?c.then(function(y){return $(s,i),N(y,s)},function(y){throw z(s),y}):($(s,i),N(c,s))}if(!n||typeof n!="object"){if((c=u(n))===void 0&&(c=n),c===V&&(c=void 0),r.F&&L(c,!0),i){var l=[],v=[];w("Patches").M(n,c,l,v),i(l,v)}return c}d(21,n)},this.produceWithPatches=function(n,u){if(typeof n=="function")return function(c){for(var s=arguments.length,p=Array(s>1?s-1:0),h=1;h<s;h++)p[h-1]=arguments[h];return r.produceWithPatches(c,function(l){return n.apply(void 0,[l].concat(p))})};var i,f,a=r.produce(n,u,function(c,s){i=c,f=s});return typeof Promise<"u"&&a instanceof Promise?a.then(function(c){return[c,i,f]}):[a,i,f]},typeof(o==null?void 0:o.useProxies)=="boolean"&&this.setUseProxies(o.useProxies),typeof(o==null?void 0:o.autoFreeze)=="boolean"&&this.setAutoFreeze(o.autoFreeze)}var t=e.prototype;return t.createDraft=function(o){j(o)||d(8),D(o)&&(o=he(o));var r=re(this),n=B(this,o,void 0);return n[P].C=!0,X(r),n},t.finishDraft=function(o,r){var n=o&&o[P],u=n.A;return $(u,r),N(void 0,u)},t.setAutoFreeze=function(o){this.F=o},t.setUseProxies=function(o){o&&!ae&&d(20),this.g=o},t.applyPatches=function(o,r){var n;for(n=r.length-1;n>=0;n--){var u=r[n];if(u.path.length===0&&u.op==="replace"){o=u.value;break}}n>-1&&(r=r.slice(n+1));var i=w("Patches").$;return D(o)?i(o,r):this.produce(o,function(f){return i(f,r)})},e}(),O=new ge,Oe=O.produce;O.produceWithPatches.bind(O);O.setAutoFreeze.bind(O);O.setUseProxies.bind(O);var we=O.applyPatches.bind(O);O.createDraft.bind(O);O.finishDraft.bind(O);export{Pe as T,Oe as f,we as p};