import{s as A,n as y,c as L,a as M,u as O,g as P,b as q}from"../chunks/utils.9d5f2fc9.js";import{b as _,f as h,g as N,d as f,j as w,i as p,n as z,s as v,q as C,c as b,h as d,r as S}from"../chunks/scheduler.5568e4b2.js";import{S as j,i as I,b as D,d as K,m as T,a as k,t as E,e as V}from"../chunks/index.978b55d7.js";import{a as B}from"../chunks/index.c72cc7d7.js";import{c as $}from"../chunks/index.6ae0ff18.js";const F=!1;function G(){return{savedState:history.state}}const tt=Object.freeze(Object.defineProperty({__proto__:null,load:G,ssr:F},Symbol.toStringTag,{value:"Module"}));function H(o){let a;return{c(){a=_("div"),this.h()},l(s){a=h(s,"DIV",{style:!0}),N(a).forEach(f),this.h()},h(){w(a,"display","none")},m(s,r){p(s,a,r),o[5](a)},p:y,i:y,o:y,d(s){s&&f(a),o[5](null)}}}function J(o,a,s){let r,{name:i}=a,n;const l=$(i);L(o,l,t=>s(4,r=t));let c=r;function u(t){z[t?"unshift":"push"](()=>{n=t,s(0,n)})}return o.$$set=t=>{"name"in t&&s(2,i=t.name)},o.$$.update=()=>{o.$$.dirty&25&&(Array.isArray(c)&&c.forEach(t=>t.remove()),Array.isArray(r)&&r.reverse().forEach(t=>n==null?void 0:n.insertAdjacentElement("afterend",t)),s(3,c=r))},[n,l,i,c,r,u]}class Q extends j{constructor(a){super(),I(this,a,J,H,A,{name:2})}}function R(o){let a,s,r,i,n,l,c;const u=o[2].default,t=M(u,o,o[1],null);return l=new Q({props:{name:"modal"}}),{c(){a=_("link"),s=_("link"),r=v(),i=_("div"),t&&t.c(),n=v(),D(l.$$.fragment),this.h()},l(e){const m=C("svelte-19o8md4",document.head);a=h(m,"LINK",{href:!0,rel:!0}),s=h(m,"LINK",{href:!0,rel:!0}),m.forEach(f),r=b(e),i=h(e,"DIV",{class:!0});var g=N(i);t&&t.l(g),g.forEach(f),n=b(e),K(l.$$.fragment,e),this.h()},h(){d(a,"href","https://fonts.googleapis.com/icon?family=Material+Symbols+Outlined"),d(a,"rel","stylesheet"),d(s,"href","https://fonts.googleapis.com/icon?family=Material+Symbols+Sharp"),d(s,"rel","stylesheet"),document.title="Nutshell",d(i,"class","container svelte-1h2iowf")},m(e,m){S(document.head,a),S(document.head,s),p(e,r,m),p(e,i,m),t&&t.m(i,null),p(e,n,m),T(l,e,m),c=!0},p(e,[m]){t&&t.p&&(!c||m&2)&&O(t,u,e,e[1],c?q(u,e[1],m,null):P(e[1]),null)},i(e){c||(k(t,e),k(l.$$.fragment,e),c=!0)},o(e){E(t,e),E(l.$$.fragment,e),c=!1},d(e){e&&(f(r),f(i),f(n)),f(a),f(s),t&&t.d(e),V(l,e)}}}function U(o,a,s){let{$$slots:r={},$$scope:i}=a,{data:n}=a;return n.savedState&&history.replaceState({...n.savedState},""),B(),o.$$set=l=>{"data"in l&&s(0,n=l.data),"$$scope"in l&&s(1,i=l.$$scope)},[n,i,r]}class et extends j{constructor(a){super(),I(this,a,U,R,A,{data:0})}}export{et as component,tt as universal};
