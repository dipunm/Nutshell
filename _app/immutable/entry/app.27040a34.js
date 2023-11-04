import{s as q}from"../chunks/utils.fd03e408.js";import{s as j,e as m,c as W,i as g,d as h,a as z,o as F,b as G,f as H,g as J,h as T,j as R,k as K,l as M,m as Q,t as X,n as I,p as b}from"../chunks/scheduler.e2abc942.js";import{S as Y,i as Z,t as p,c as L,a as d,g as P,b as k,d as O,m as E,e as v}from"../chunks/index.e4d6d36d.js";const x="modulepreload",ee=function(f,e){return new URL(f,e).href},y={},w=function(e,n,s){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(a=>{if(a=ee(a,s),a in y)return;y[a]=!0;const t=a.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(!!s)for(let l=i.length-1;l>=0;l--){const u=i[l];if(u.href===a&&(!t||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${o}`))return;const c=document.createElement("link");if(c.rel=t?"stylesheet":x,t||(c.as="script",c.crossOrigin=""),c.href=a,document.head.appendChild(c),t)return new Promise((l,u)=>{c.addEventListener("load",l),c.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>e()).catch(a=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=a,window.dispatchEvent(t),!t.defaultPrevented)throw a})},ue={};function te(f){let e,n,s;var i=f[1][0];function a(t,o){return{props:{data:t[3],form:t[2]}}}return i&&(e=b(i,a(f)),f[15](e)),{c(){e&&k(e.$$.fragment),n=m()},l(t){e&&O(e.$$.fragment,t),n=m()},m(t,o){e&&E(e,t,o),g(t,n,o),s=!0},p(t,o){if(o&2&&i!==(i=t[1][0])){if(e){P();const r=e;p(r.$$.fragment,1,0,()=>{v(r,1)}),L()}i?(e=b(i,a(t)),t[15](e),k(e.$$.fragment),d(e.$$.fragment,1),E(e,n.parentNode,n)):e=null}else if(i){const r={};o&8&&(r.data=t[3]),o&4&&(r.form=t[2]),e.$set(r)}},i(t){s||(e&&d(e.$$.fragment,t),s=!0)},o(t){e&&p(e.$$.fragment,t),s=!1},d(t){t&&h(n),f[15](null),e&&v(e,t)}}}function ne(f){let e,n,s;var i=f[1][0];function a(t,o){return{props:{data:t[3],$$slots:{default:[oe]},$$scope:{ctx:t}}}}return i&&(e=b(i,a(f)),f[14](e)),{c(){e&&k(e.$$.fragment),n=m()},l(t){e&&O(e.$$.fragment,t),n=m()},m(t,o){e&&E(e,t,o),g(t,n,o),s=!0},p(t,o){if(o&2&&i!==(i=t[1][0])){if(e){P();const r=e;p(r.$$.fragment,1,0,()=>{v(r,1)}),L()}i?(e=b(i,a(t)),t[14](e),k(e.$$.fragment),d(e.$$.fragment,1),E(e,n.parentNode,n)):e=null}else if(i){const r={};o&8&&(r.data=t[3]),o&65591&&(r.$$scope={dirty:o,ctx:t}),e.$set(r)}},i(t){s||(e&&d(e.$$.fragment,t),s=!0)},o(t){e&&p(e.$$.fragment,t),s=!1},d(t){t&&h(n),f[14](null),e&&v(e,t)}}}function ie(f){let e,n,s;var i=f[1][1];function a(t,o){return{props:{data:t[4],form:t[2]}}}return i&&(e=b(i,a(f)),f[13](e)),{c(){e&&k(e.$$.fragment),n=m()},l(t){e&&O(e.$$.fragment,t),n=m()},m(t,o){e&&E(e,t,o),g(t,n,o),s=!0},p(t,o){if(o&2&&i!==(i=t[1][1])){if(e){P();const r=e;p(r.$$.fragment,1,0,()=>{v(r,1)}),L()}i?(e=b(i,a(t)),t[13](e),k(e.$$.fragment),d(e.$$.fragment,1),E(e,n.parentNode,n)):e=null}else if(i){const r={};o&16&&(r.data=t[4]),o&4&&(r.form=t[2]),e.$set(r)}},i(t){s||(e&&d(e.$$.fragment,t),s=!0)},o(t){e&&p(e.$$.fragment,t),s=!1},d(t){t&&h(n),f[13](null),e&&v(e,t)}}}function re(f){let e,n,s;var i=f[1][1];function a(t,o){return{props:{data:t[4],$$slots:{default:[se]},$$scope:{ctx:t}}}}return i&&(e=b(i,a(f)),f[12](e)),{c(){e&&k(e.$$.fragment),n=m()},l(t){e&&O(e.$$.fragment,t),n=m()},m(t,o){e&&E(e,t,o),g(t,n,o),s=!0},p(t,o){if(o&2&&i!==(i=t[1][1])){if(e){P();const r=e;p(r.$$.fragment,1,0,()=>{v(r,1)}),L()}i?(e=b(i,a(t)),t[12](e),k(e.$$.fragment),d(e.$$.fragment,1),E(e,n.parentNode,n)):e=null}else if(i){const r={};o&16&&(r.data=t[4]),o&65575&&(r.$$scope={dirty:o,ctx:t}),e.$set(r)}},i(t){s||(e&&d(e.$$.fragment,t),s=!0)},o(t){e&&p(e.$$.fragment,t),s=!1},d(t){t&&h(n),f[12](null),e&&v(e,t)}}}function se(f){let e,n,s;var i=f[1][2];function a(t,o){return{props:{data:t[5],form:t[2]}}}return i&&(e=b(i,a(f)),f[11](e)),{c(){e&&k(e.$$.fragment),n=m()},l(t){e&&O(e.$$.fragment,t),n=m()},m(t,o){e&&E(e,t,o),g(t,n,o),s=!0},p(t,o){if(o&2&&i!==(i=t[1][2])){if(e){P();const r=e;p(r.$$.fragment,1,0,()=>{v(r,1)}),L()}i?(e=b(i,a(t)),t[11](e),k(e.$$.fragment),d(e.$$.fragment,1),E(e,n.parentNode,n)):e=null}else if(i){const r={};o&32&&(r.data=t[5]),o&4&&(r.form=t[2]),e.$set(r)}},i(t){s||(e&&d(e.$$.fragment,t),s=!0)},o(t){e&&p(e.$$.fragment,t),s=!1},d(t){t&&h(n),f[11](null),e&&v(e,t)}}}function oe(f){let e,n,s,i;const a=[re,ie],t=[];function o(r,c){return r[1][2]?0:1}return e=o(f),n=t[e]=a[e](f),{c(){n.c(),s=m()},l(r){n.l(r),s=m()},m(r,c){t[e].m(r,c),g(r,s,c),i=!0},p(r,c){let l=e;e=o(r),e===l?t[e].p(r,c):(P(),p(t[l],1,1,()=>{t[l]=null}),L(),n=t[e],n?n.p(r,c):(n=t[e]=a[e](r),n.c()),d(n,1),n.m(s.parentNode,s))},i(r){i||(d(n),i=!0)},o(r){p(n),i=!1},d(r){r&&h(s),t[e].d(r)}}}function A(f){let e,n=f[7]&&N(f);return{c(){e=G("div"),n&&n.c(),this.h()},l(s){e=H(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var i=J(e);n&&n.l(i),i.forEach(h),this.h()},h(){T(e,"id","svelte-announcer"),T(e,"aria-live","assertive"),T(e,"aria-atomic","true"),R(e,"position","absolute"),R(e,"left","0"),R(e,"top","0"),R(e,"clip","rect(0 0 0 0)"),R(e,"clip-path","inset(50%)"),R(e,"overflow","hidden"),R(e,"white-space","nowrap"),R(e,"width","1px"),R(e,"height","1px")},m(s,i){g(s,e,i),n&&n.m(e,null)},p(s,i){s[7]?n?n.p(s,i):(n=N(s),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(s){s&&h(e),n&&n.d()}}}function N(f){let e;return{c(){e=K(f[8])},l(n){e=M(n,f[8])},m(n,s){g(n,e,s)},p(n,s){s&256&&Q(e,n[8])},d(n){n&&h(e)}}}function fe(f){let e,n,s,i,a;const t=[ne,te],o=[];function r(l,u){return l[1][1]?0:1}e=r(f),n=o[e]=t[e](f);let c=f[6]&&A(f);return{c(){n.c(),s=j(),c&&c.c(),i=m()},l(l){n.l(l),s=W(l),c&&c.l(l),i=m()},m(l,u){o[e].m(l,u),g(l,s,u),c&&c.m(l,u),g(l,i,u),a=!0},p(l,[u]){let D=e;e=r(l),e===D?o[e].p(l,u):(P(),p(o[D],1,1,()=>{o[D]=null}),L(),n=o[e],n?n.p(l,u):(n=o[e]=t[e](l),n.c()),d(n,1),n.m(s.parentNode,s)),l[6]?c?c.p(l,u):(c=A(l),c.c(),c.m(i.parentNode,i)):c&&(c.d(1),c=null)},i(l){a||(d(n),a=!0)},o(l){p(n),a=!1},d(l){l&&(h(s),h(i)),o[e].d(l),c&&c.d(l)}}}function ae(f,e,n){let{stores:s}=e,{page:i}=e,{constructors:a}=e,{components:t=[]}=e,{form:o}=e,{data_0:r=null}=e,{data_1:c=null}=e,{data_2:l=null}=e;z(s.page.notify);let u=!1,D=!1,V=null;F(()=>{const _=s.page.subscribe(()=>{u&&(n(7,D=!0),X().then(()=>{n(8,V=document.title||"untitled page")}))});return n(6,u=!0),_});function $(_){I[_?"unshift":"push"](()=>{t[2]=_,n(0,t)})}function S(_){I[_?"unshift":"push"](()=>{t[1]=_,n(0,t)})}function C(_){I[_?"unshift":"push"](()=>{t[1]=_,n(0,t)})}function B(_){I[_?"unshift":"push"](()=>{t[0]=_,n(0,t)})}function U(_){I[_?"unshift":"push"](()=>{t[0]=_,n(0,t)})}return f.$$set=_=>{"stores"in _&&n(9,s=_.stores),"page"in _&&n(10,i=_.page),"constructors"in _&&n(1,a=_.constructors),"components"in _&&n(0,t=_.components),"form"in _&&n(2,o=_.form),"data_0"in _&&n(3,r=_.data_0),"data_1"in _&&n(4,c=_.data_1),"data_2"in _&&n(5,l=_.data_2)},f.$$.update=()=>{f.$$.dirty&1536&&s.page.set(i)},[t,a,o,r,c,l,u,D,V,s,i,$,S,C,B,U]}class me extends Y{constructor(e){super(),Z(this,e,ae,fe,q,{stores:9,page:10,constructors:1,components:0,form:2,data_0:3,data_1:4,data_2:5})}}const pe=[()=>w(()=>import("../nodes/0.f224be36.js"),["../nodes/0.f224be36.js","../chunks/utils.fd03e408.js","../chunks/scheduler.e2abc942.js","../chunks/index.e4d6d36d.js","../chunks/index.85eee347.js","../chunks/navigation.3b33ef17.js","../chunks/singletons.a20db115.js","../chunks/stores.8a9786bb.js","../chunks/PortalTarget.d8c1488b.js","../assets/0.4887ccba.css"],import.meta.url),()=>w(()=>import("../nodes/1.2b066c2b.js"),["../nodes/1.2b066c2b.js","../chunks/utils.fd03e408.js","../chunks/scheduler.e2abc942.js","../chunks/index.e4d6d36d.js","../chunks/stores.8a9786bb.js","../chunks/singletons.a20db115.js"],import.meta.url),()=>w(()=>import("../nodes/2.46623256.js"),["../nodes/2.46623256.js","../chunks/utils.fd03e408.js","../chunks/scheduler.e2abc942.js","../chunks/index.e4d6d36d.js","../chunks/form-submitter.2a1b4c21.js","../chunks/elevation.bc110a1e.js","../chunks/list-item.0c68da29.js","../chunks/icon-button.ca93b077.js","../chunks/icon.0c55ee4a.js","../chunks/stores.8a9786bb.js","../chunks/singletons.a20db115.js","../chunks/index.85eee347.js","../chunks/navigation.3b33ef17.js","../chunks/NavBar.e116546d.js","../assets/NavBar.6a8863e2.css","../chunks/PortalTarget.d8c1488b.js","../assets/2.e274144b.css"],import.meta.url),()=>w(()=>import("../nodes/3.f62bb983.js"),["../nodes/3.f62bb983.js","../chunks/navigation.3b33ef17.js","../chunks/singletons.a20db115.js","../chunks/utils.fd03e408.js","../chunks/stores.8a9786bb.js","../chunks/_commonjsHelpers.23102255.js"],import.meta.url),()=>w(()=>import("../nodes/4.30e24ed8.js"),["../nodes/4.30e24ed8.js","../chunks/utils.fd03e408.js","../chunks/scheduler.e2abc942.js","../chunks/index.e4d6d36d.js","../assets/4.5369b34a.css"],import.meta.url),()=>w(()=>import("../nodes/5.41574e68.js"),["../nodes/5.41574e68.js","../chunks/utils.fd03e408.js","../chunks/scheduler.e2abc942.js","../chunks/index.e4d6d36d.js","../chunks/icon-button.ca93b077.js","../chunks/form-submitter.2a1b4c21.js","../chunks/icon.0c55ee4a.js","../chunks/filled-button.ddb6b04b.js","../chunks/elevation.bc110a1e.js","../chunks/style-map.1a11d143.js","../chunks/navigation.3b33ef17.js","../chunks/singletons.a20db115.js","../chunks/index.85eee347.js","../chunks/stores.8a9786bb.js","../chunks/Portal.c779cf40.js","../assets/5.a857de63.css"],import.meta.url),()=>w(()=>import("../nodes/6.05115e94.js"),["../nodes/6.05115e94.js","../chunks/utils.fd03e408.js","../chunks/scheduler.e2abc942.js","../chunks/index.e4d6d36d.js","../chunks/Card.99b3bca9.js","../assets/Card.5386f240.css","../chunks/icon-button.ca93b077.js","../chunks/form-submitter.2a1b4c21.js","../chunks/index.85eee347.js","../chunks/navigation.3b33ef17.js","../chunks/singletons.a20db115.js","../chunks/stores.8a9786bb.js","../chunks/Portal.c779cf40.js","../assets/6.d3f898b5.css","../assets/NavBar.6a8863e2.css"],import.meta.url),()=>w(()=>import("../nodes/7.918895ca.js"),["../nodes/7.918895ca.js","../chunks/utils.fd03e408.js","../chunks/scheduler.e2abc942.js","../chunks/index.e4d6d36d.js","../chunks/Card.99b3bca9.js","../assets/Card.5386f240.css","../assets/7.ac42792c.css"],import.meta.url),()=>w(()=>import("../nodes/8.55c32e0a.js"),["../nodes/8.55c32e0a.js","../chunks/utils.fd03e408.js","../chunks/scheduler.e2abc942.js","../chunks/index.e4d6d36d.js","../chunks/singletons.a20db115.js","../chunks/filled-button.ddb6b04b.js","../chunks/form-submitter.2a1b4c21.js","../chunks/elevation.bc110a1e.js","../chunks/icon.0c55ee4a.js","../chunks/Card.99b3bca9.js","../assets/Card.5386f240.css","../chunks/NavBar.e116546d.js","../assets/NavBar.6a8863e2.css","../chunks/Portal.c779cf40.js","../chunks/index.85eee347.js","../chunks/navigation.3b33ef17.js","../chunks/stores.8a9786bb.js","../chunks/icon-button.ca93b077.js","../chunks/list-item.0c68da29.js","../assets/8.f0122801.css"],import.meta.url),()=>w(()=>import("../nodes/9.9f64ad2a.js"),["../nodes/9.9f64ad2a.js","../chunks/utils.fd03e408.js","../chunks/scheduler.e2abc942.js","../chunks/index.e4d6d36d.js","../chunks/NavBar.e116546d.js","../assets/NavBar.6a8863e2.css","../chunks/_commonjsHelpers.23102255.js","../chunks/filled-button.ddb6b04b.js","../chunks/form-submitter.2a1b4c21.js","../chunks/elevation.bc110a1e.js","../chunks/style-map.1a11d143.js","../assets/9.1cf8156b.css"],import.meta.url)],de=[],he={"/":[3],"/accounts":[4,[2]],"/accounts/[id]":[5,[2]],"/accounts/[id]/deposit":[6,[2]],"/accounts/[id]/spend":[7,[2]],"/offer/offline":[9],"/offer/[id]":[8]},we={handleError:({error:f})=>{console.error(f)}};export{he as dictionary,we as hooks,ue as matchers,pe as nodes,me as root,de as server_loads};