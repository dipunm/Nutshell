import{s as j,a as v,u as b,g as p,b as w,f as q}from"./utils.9d5f2fc9.js";import{b as k,s as D,f as C,g as S,c as N,d as h,j as r,h as y,v as d,i as E,r as O}from"./scheduler.5568e4b2.js";import{S as T,i as V,a as _,g as z,t as u,c as A}from"./index.978b55d7.js";const B=a=>({}),m=a=>({});function g(a){let e,n;const c=a[6].icon,s=v(c,a,a[5],m);return{c(){e=k("div"),s&&s.c(),this.h()},l(l){e=C(l,"DIV",{class:!0});var t=S(e);s&&s.l(t),t.forEach(h),this.h()},h(){y(e,"class","icon svelte-1ab9al0")},m(l,t){E(l,e,t),s&&s.m(e,null),n=!0},p(l,t){s&&s.p&&(!n||t&32)&&b(s,c,l,l[5],n?w(c,l[5],t,B):p(l[5]),m)},i(l){n||(_(s,l),n=!0)},o(l){u(s,l),n=!1},d(l){l&&h(e),s&&s.d(l)}}}function F(a){let e,n,c,s=a[4].icon&&g(a);const l=a[6].default,t=v(l,a,a[5],null);return{c(){e=k("section"),s&&s.c(),n=D(),t&&t.c(),this.h()},l(o){e=C(o,"SECTION",{style:!0,class:!0});var i=S(e);s&&s.l(i),n=N(i),t&&t.l(i),i.forEach(h),this.h()},h(){r(e,"background-color","var(--md-sys-color-"+a[0]+")"),r(e,"padding-top",.75+a[3]+"rem"),r(e,"height",a[1]),y(e,"class","svelte-1ab9al0"),d(e,"shadow",a[2])},m(o,i){E(o,e,i),s&&s.m(e,null),O(e,n),t&&t.m(e,null),c=!0},p(o,[i]){o[4].icon?s?(s.p(o,i),i&16&&_(s,1)):(s=g(o),s.c(),_(s,1),s.m(e,n)):s&&(z(),u(s,1,1,()=>{s=null}),A()),t&&t.p&&(!c||i&32)&&b(t,l,o,o[5],c?w(l,o[5],i,null):p(o[5]),null),(!c||i&1)&&r(e,"background-color","var(--md-sys-color-"+o[0]+")"),(!c||i&2)&&r(e,"height",o[1]),(!c||i&4)&&d(e,"shadow",o[2])},i(o){c||(_(s),_(t,o),c=!0)},o(o){u(s),u(t,o),c=!1},d(o){o&&h(e),s&&s.d(),t&&t.d(o)}}}function G(a,e,n){let{$$slots:c={},$$scope:s}=e;const l=q(c);let{color:t}=e,{height:o="auto"}=e,{shadow:i=!1}=e;const I=l.icon?1.25:0;return a.$$set=f=>{"color"in f&&n(0,t=f.color),"height"in f&&n(1,o=f.height),"shadow"in f&&n(2,i=f.shadow),"$$scope"in f&&n(5,s=f.$$scope)},[t,o,i,I,l,s,c]}class L extends T{constructor(e){super(),V(this,e,G,F,j,{color:0,height:1,shadow:2})}}export{L as C};
