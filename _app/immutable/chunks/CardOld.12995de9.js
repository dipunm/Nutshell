import{s as C,c as k,e as h,u as S,g as p,a as O}from"./utils.bd18bf2c.js";import{S as T,i as E,g,s as H,h as v,j as I,c as L,f as m,k as u,l as _,a as y,y as M,d as N,t as j,z as q}from"./index.033e8630.js";import"./paths.73d19992.js";import"./icon.7b039a41.js";function d(a){let e,o="<md-icon>currency_bitcoin</md-icon>";return{c(){e=g("div"),e.innerHTML=o,this.h()},l(c){e=v(c,"DIV",{class:!0,"data-svelte-h":!0}),q(e)!=="svelte-yskn4m"&&(e.innerHTML=o),this.h()},h(){u(e,"class","icon svelte-7pig74")},m(c,i){y(c,e,i)},d(c){c&&m(e)}}}function z(a){let e,o,c,i,s=a[3]==="mint"&&d();const f=a[7].default,l=k(f,a,a[6],null);return{c(){e=g("section"),s&&s.c(),o=H(),l&&l.c(),this.h()},l(t){e=v(t,"SECTION",{class:!0,style:!0});var n=I(e);s&&s.l(n),o=L(n),l&&l.l(n),n.forEach(m),this.h()},h(){u(e,"class",c=h(a[2])+" svelte-7pig74"),_(e,"--bg-color","var(--md-sys-color-"+a[0]+")"),_(e,"--padding-top",.75+a[4]+"rem"),_(e,"--margin-top",a[5]+"rem"),_(e,"--height",a[1])},m(t,n){y(t,e,n),s&&s.m(e,null),M(e,o),l&&l.m(e,null),i=!0},p(t,[n]){t[3]==="mint"?s||(s=d(),s.c(),s.m(e,o)):s&&(s.d(1),s=null),l&&l.p&&(!i||n&64)&&S(l,f,t,t[6],i?O(f,t[6],n,null):p(t[6]),null),(!i||n&4&&c!==(c=h(t[2])+" svelte-7pig74"))&&u(e,"class",c),(!i||n&1)&&_(e,"--bg-color","var(--md-sys-color-"+t[0]+")"),(!i||n&2)&&_(e,"--height",t[1])},i(t){i||(N(l,t),i=!0)},o(t){j(l,t),i=!1},d(t){t&&m(e),s&&s.d(),l&&l.d(t)}}}function D(a,e,o){let{$$slots:c={},$$scope:i}=e,{color:s}=e,{height:f="auto"}=e,{class:l=""}=e,{icon:t=void 0}=e;const n=t==="mint"?1.25:0,b=t==="mint"?0:1.1875;return a.$$set=r=>{"color"in r&&o(0,s=r.color),"height"in r&&o(1,f=r.height),"class"in r&&o(2,l=r.class),"icon"in r&&o(3,t=r.icon),"$$scope"in r&&o(6,i=r.$$scope)},[s,f,l,t,n,b,i,c]}class F extends T{constructor(e){super(),E(this,e,D,z,C,{color:0,height:1,class:2,icon:3})}}export{F as C};
