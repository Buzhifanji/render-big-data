import{d as xt,g as H,w as z,S as K,i as G,s as J,a as h,c as at,v as U,o as Y,b as T,e as p,f as Q,h as g,j as N,k as b,l as w,m as v,n as Ct,u as ut,p as ft,q as dt,t as k,r as R,x as y,y as P,z as V,A as Z,B as $,C as mt,D as _t,E as ht,F as Tt,G as Vt,H as Bt,I as Ht,J as F,K as tt}from"./vendor-8443d815.js";import{M as et}from"./mock-909d1a3a.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerpolicy&&(l.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?l.credentials="include":o.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function Nt(e,t){let n=-1,i=0,o=e.length-1;const l=()=>Math.floor((i+o)/2);let c=l();for(;o-i>1;){const r=e[c];if(t<r)o=c,c=l();else if(t>r)i=c,c=l();else return n=c,n}return n=i,n}function A(e){return e.getBoundingClientRect().height}function nt(e){return+e.getAttribute("data-index")}const S=z({totalHeight:0,scrollTop:0,startIndex:0,endIndex:0}),O=e=>{S.update(t=>{for(const n in e)t[n]=e[n];return t})},pt=z([]),ot=xt(S,e=>H(pt).slice(e.startIndex,e.endIndex)),B=z({renderNum:15,assumedHeight:100});let I=[],C=[],j=0;function gt(e=I){return e.reduce((t,n)=>t+n.value,0)}function Lt(e,t){const n=[0];for(let i=1;i<e;i++)n[i]=n[i-1]+t;return n}function At(e,t){const n=[0];for(let i=1;i<e.length;i++)n[i]=e[i-1]+t[i-1].value;return n}function Ot(e){j=e;const t=H(B).assumedHeight;I=Array(e).fill({isRecord:!1,value:t}),C=Lt(e,t);const n=gt();O({totalHeight:n})}function X(e,t){if(t!==0&&I[e]&&!I[e].isRecord){I[e]={isRecord:!0,value:t};const n=gt();C=At(C,I),S.update(i=>(i.totalHeight=n,i.scrollTop=C[i.startIndex],i))}}function it(){I.forEach(e=>e.isRecord=!1)}function Xt(e){return Nt(C,e)}function Ft(e){const t=H(B).renderNum;if(j<t)return[0,j];{let n=e%2!==0?e-1:e,i=n+t;return n+t>j&&(n=j-t,i=j),[n,i]}}function lt(e){const t=Xt(e),[n,i]=Ft(t);O({startIndex:n,endIndex:i,scrollTop:C[n]||0})}const L="src/lib/virtual-list.svelte";function bt(e){let t;const n={c:function(){t=p("em"),t.textContent="no content was provided",g(t,"class","s-ygXz_r5PaE3b"),b(t,L,47,6,1435)},m:function(o,l){w(o,t,l)},p:V,d:function(o){o&&y(t)}};return h("SvelteRegisterBlock",{block:n,id:bt.name,type:"fallback",source:"(47:10)        ",ctx:e}),n}function D(e){let t,n,i,o,l,c,r;const a=e[5].default,u=at(a,e,e[4],null),s=u||bt(e),_={c:function(){t=p("div"),n=p("div"),i=Q(),o=p("div"),s&&s.c(),g(n,"class","virtual-list-phantom s-ygXz_r5PaE3b"),N(n,"height",e[0].totalHeight+"px"),b(n,L,37,2,1187),g(o,"class","virtual-list-content s-ygXz_r5PaE3b"),N(o,"transform","translate3d(0px, "+e[0].scrollTop+"px, 0px)"),b(o,L,41,2,1280),g(t,"class","virtual-list-container s-ygXz_r5PaE3b"),b(t,L,36,0,1105)},l:function(m){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(m,f){w(m,t,f),v(t,n),v(t,i),v(t,o),s&&s.m(o,null),e[6](o),e[7](t),l=!0,c||(r=Ct(t,"scroll",e[3],!1,!1,!1),c=!0)},p:function(m,[f]){(!l||f&1)&&N(n,"height",m[0].totalHeight+"px"),u&&u.p&&(!l||f&16)&&ut(u,a,m,m[4],l?dt(a,m[4],f,null):ft(m[4]),null),(!l||f&1)&&N(o,"transform","translate3d(0px, "+m[0].scrollTop+"px, 0px)")},i:function(m){l||(k(s,m),l=!0)},o:function(m){R(s,m),l=!1},d:function(m){m&&y(t),s&&s.d(m),e[6](null),e[7](null),c=!1,r()}};return h("SvelteRegisterBlock",{block:_,id:D.name,type:"component",source:"",ctx:e}),_}function Pt(e,t,n){let{$$slots:i={},$$scope:o}=t;U("Virtual_list",i,["default"]);let l;const c=S.subscribe(f=>n(0,l=f));let r,a;function u(f){const E=f.target;lt(E.scrollTop)}const s=new ResizeObserver(()=>{requestAnimationFrame(()=>{it(),[...a.children].forEach(f=>{const E=nt(f),jt=A(f);X(E,jt)})})});Y(()=>{O({startIndex:0}),s==null||s.observe(r)}),T(()=>{s==null||s.disconnect(),c()});const _=[];Object.keys(t).forEach(f=>{!~_.indexOf(f)&&f.slice(0,2)!=="$$"&&f!=="slot"&&console.warn(`<Virtual_list> was created with unknown prop '${f}'`)});function d(f){P[f?"unshift":"push"](()=>{a=f,n(2,a)})}function m(f){P[f?"unshift":"push"](()=>{r=f,n(1,r)})}return e.$$set=f=>{"$$scope"in f&&n(4,o=f.$$scope)},e.$capture_state=()=>({onDestroy:T,onMount:Y,getELmentHeight:A,getELmentIndex:nt,_scrollState:S,updateScrollState:O,resetHeight:it,updateHeight:X,watchScroll:lt,scrollState:l,unsubscribe:c,container:r,content:a,onScroll:u,resizeObserver:s}),e.$inject_state=f=>{"scrollState"in f&&n(0,l=f.scrollState),"container"in f&&n(1,r=f.container),"content"in f&&n(2,a=f.content)},t&&"$$inject"in t&&e.$inject_state(t.$$inject),[l,r,a,u,o,i,d,m]}class vt extends K{constructor(t){super(t),G(this,t,Pt,D,J,{}),h("SvelteRegisterComponent",{component:this,tagName:"Virtual_list",options:t,id:D.name})}}const wt="src/lib/virtual-list-item.svelte";function yt(e){let t;const n={c:function(){t=p("em"),t.textContent="no content was provided",b(t,wt,24,4,669)},m:function(o,l){w(o,t,l)},p:V,d:function(o){o&&y(t)}};return h("SvelteRegisterBlock",{block:n,id:yt.name,type:"fallback",source:"(24:8)      ",ctx:e}),n}function M(e){let t,n,i;const o=e[5].default,l=at(o,e,e[4],null),c=l||yt(e),r={c:function(){t=p("div"),c&&c.c(),g(t,"data-index",n=e[1].toString()),b(t,wt,22,0,602)},l:function(u){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(u,s){w(u,t,s),c&&c.m(t,null),e[6](t),i=!0},p:function(u,[s]){l&&l.p&&(!i||s&16)&&ut(l,o,u,u[4],i?dt(o,u[4],s,null):ft(u[4]),null),(!i||s&2&&n!==(n=u[1].toString()))&&g(t,"data-index",n)},i:function(u){i||(k(c,u),i=!0)},o:function(u){R(c,u),i=!1},d:function(u){u&&y(t),c&&c.d(u),e[6](null)}};return h("SvelteRegisterBlock",{block:r,id:M.name,type:"component",source:"",ctx:e}),r}function Dt(e,t,n){let i,{$$slots:o={},$$scope:l}=t;U("Virtual_list_item",o,["default"]);let{index:c=0}=t,r,a;const u=S.subscribe(d=>n(3,a=d));Z(()=>{if(r){const d=A(r);X(i,d)}}),T(()=>{u()});const s=["index"];Object.keys(t).forEach(d=>{!~s.indexOf(d)&&d.slice(0,2)!=="$$"&&d!=="slot"&&console.warn(`<Virtual_list_item> was created with unknown prop '${d}'`)});function _(d){P[d?"unshift":"push"](()=>{r=d,n(0,r)})}return e.$$set=d=>{"index"in d&&n(2,c=d.index),"$$scope"in d&&n(4,l=d.$$scope)},e.$capture_state=()=>({afterUpdate:Z,onDestroy:T,updateHeight:X,getELmentHeight:A,_scrollState:S,index:c,node:r,scrollState:a,unsubscribe:u,_index:i}),e.$inject_state=d=>{"index"in d&&n(2,c=d.index),"node"in d&&n(0,r=d.node),"scrollState"in d&&n(3,a=d.scrollState),"_index"in d&&n(1,i=d._index)},t&&"$$inject"in t&&e.$inject_state(t.$$inject),e.$$.update=()=>{e.$$.dirty&12&&n(1,i=a.startIndex+c)},[r,i,c,a,l,o,_]}class kt extends K{constructor(t){super(t),G(this,t,Dt,M,J,{index:2}),h("SvelteRegisterComponent",{component:this,tagName:"Virtual_list_item",options:t,id:M.name})}get index(){throw new Error("<Virtual_list_item>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set index(t){throw new Error("<Virtual_list_item>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}function st(e){S.update(t=>(t.endIndex=e,t))}function Mt(e){const t=H(B);B.update(()=>(Object.assign(t,e),t))}function ct(e,t){pt.set(e),t?(Mt(t),st(H(B).renderNum)):st(14),Ot(e.length)}const x="src/App.svelte";function rt(e,t,n){const i=e.slice();return i[4]=t[n],i[6]=n,i}function St(e){let t;const n={c:function(){t=p("div"),t.textContent="lazy loading",g(t,"class","s-XsEmFtvddWTw"),b(t,x,41,8,1182)},m:function(o,l){w(o,t,l)},p:V,i:V,o:V,d:function(o){o&&y(t)}};return h("SvelteRegisterBlock",{block:n,id:St.name,type:"if",source:"(41:31) ",ctx:e}),n}function Et(e){let t,n;t=new vt({props:{$$slots:{default:[Rt]},$$scope:{ctx:e}},$$inline:!0});const i={c:function(){mt(t.$$.fragment)},m:function(l,c){_t(t,l,c),n=!0},p:function(l,c){const r={};c&129&&(r.$$scope={dirty:c,ctx:l}),t.$set(r)},i:function(l){n||(k(t.$$.fragment,l),n=!0)},o:function(l){R(t.$$.fragment,l),n=!1},d:function(l){ht(t,l)}};return h("SvelteRegisterBlock",{block:i,id:Et.name,type:"if",source:"(33:6) {#if selected === 0}",ctx:e}),i}function It(e){let t,n=e[4].key+"",i,o,l=e[4].value+"",c,r;const a={c:function(){t=p("p"),i=F(n),o=F(": "),c=F(l),r=Q(),g(t,"class","content s-XsEmFtvddWTw"),b(t,x,36,14,1022)},m:function(s,_){w(s,t,_),v(t,i),v(t,o),v(t,c),w(s,r,_)},p:function(s,_){_&1&&n!==(n=s[4].key+"")&&tt(i,n),_&1&&l!==(l=s[4].value+"")&&tt(c,l)},d:function(s){s&&y(t),s&&y(r)}};return h("SvelteRegisterBlock",{block:a,id:It.name,type:"slot",source:"(36:12) <VirtualListItem {index}>",ctx:e}),a}function W(e){let t,n;t=new kt({props:{index:e[6],$$slots:{default:[It]},$$scope:{ctx:e}},$$inline:!0});const i={c:function(){mt(t.$$.fragment)},m:function(l,c){_t(t,l,c),n=!0},p:function(l,c){const r={};c&129&&(r.$$scope={dirty:c,ctx:l}),t.$set(r)},i:function(l){n||(k(t.$$.fragment,l),n=!0)},o:function(l){R(t.$$.fragment,l),n=!1},d:function(l){ht(t,l)}};return h("SvelteRegisterBlock",{block:i,id:W.name,type:"each",source:"(35:10) {#each data as item, index}",ctx:e}),i}function Rt(e){let t,n,i=e[0];$(i);let o=[];for(let r=0;r<i.length;r+=1)o[r]=W(rt(e,i,r));const l=r=>R(o[r],1,1,()=>{o[r]=null}),c={c:function(){for(let a=0;a<o.length;a+=1)o[a].c();t=Tt()},m:function(a,u){for(let s=0;s<o.length;s+=1)o[s].m(a,u);w(a,t,u),n=!0},p:function(a,u){if(u&1){i=a[0],$(i);let s;for(s=0;s<i.length;s+=1){const _=rt(a,i,s);o[s]?(o[s].p(_,u),k(o[s],1)):(o[s]=W(_),o[s].c(),k(o[s],1),o[s].m(t.parentNode,t))}for(Vt(),s=i.length;s<o.length;s+=1)l(s);Bt()}},i:function(a){if(!n){for(let u=0;u<i.length;u+=1)k(o[u]);n=!0}},o:function(a){o=o.filter(Boolean);for(let u=0;u<o.length;u+=1)R(o[u]);n=!1},d:function(a){Ht(o,a),a&&y(t)}};return h("SvelteRegisterBlock",{block:c,id:Rt.name,type:"slot",source:"(34:8) <VirtualList>",ctx:e}),c}function q(e){let t,n,i,o,l,c,r,a;const u=[Et,St],s=[];function _(m,f){return m[1]===0?0:m[1]===1?1:-1}~(c=_(e))&&(r=s[c]=u[c](e));const d={c:function(){t=p("main"),n=p("h1"),n.textContent="render big data",i=Q(),o=p("section"),l=p("div"),r&&r.c(),g(n,"class","s-XsEmFtvddWTw"),b(n,x,25,2,657),g(l,"class","card s-XsEmFtvddWTw"),b(l,x,31,4,864),g(o,"class","s-XsEmFtvddWTw"),b(o,x,26,2,684),g(t,"class","s-XsEmFtvddWTw"),b(t,x,24,0,648)},l:function(f){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(f,E){w(f,t,E),v(t,n),v(t,i),v(t,o),v(o,l),~c&&s[c].m(l,null),a=!0},p:function(f,[E]){r&&r.p(f,E)},i:function(f){a||(k(r),a=!0)},o:function(f){R(r),a=!1},d:function(f){f&&y(t),~c&&s[c].d()}};return h("SvelteRegisterBlock",{block:d,id:q.name,type:"component",source:"",ctx:e}),d}function Wt(e,t,n){let{$$slots:i={},$$scope:o}=t;U("App",i,[]);let l=[];const c=ot.subscribe(s=>n(0,l=s));function r(){setTimeout(()=>{const s=[];for(let _=0;_<1e4;_++)s.push({key:_,value:et.mock({content:"@cparagraph()"}).content});ct(s)},1e3)}r();let a=0;T(()=>{c()});const u=[];return Object.keys(t).forEach(s=>{!~u.indexOf(s)&&s.slice(0,2)!=="$$"&&s!=="slot"&&console.warn(`<App> was created with unknown prop '${s}'`)}),e.$capture_state=()=>({onDestroy:T,Mock:et,VirtualList:vt,VirtualListItem:kt,initRenderData:ct,visiableData:ot,data:l,unsubscribe:c,getData:r,selected:a}),e.$inject_state=s=>{"data"in s&&n(0,l=s.data),"selected"in s&&n(1,a=s.selected)},t&&"$$inject"in t&&e.$inject_state(t.$$inject),[l,a]}class qt extends K{constructor(t){super(t),G(this,t,Wt,q,J,{}),h("SvelteRegisterComponent",{component:this,tagName:"App",options:t,id:q.name})}}new qt({target:document.getElementById("app")});