function l(){}function a(t,n){for(const e in n)t[e]=n[e];return t}function _(t){return t()}function b(){return Object.create(null)}function y(t){t.forEach(_)}function g(t){return typeof t=="function"}function d(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function h(t){return Object.keys(t).length===0}function i(t,...n){if(t==null){for(const r of n)r(void 0);return l}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function x(t){let n;return i(t,e=>n=e)(),n}function p(t,n,e){t.$$.on_destroy.push(i(n,e))}function j(t,n,e,r){if(t){const u=f(t,n,e,r);return t[0](u)}}function f(t,n,e,r){return t[1]&&r?a(e.ctx.slice(),t[1](r(n))):e.ctx}function m(t,n,e,r){if(t[2]&&r){const u=t[2](r(e));if(n.dirty===void 0)return u;if(typeof u=="object"){const c=[],s=Math.max(n.dirty.length,u.length);for(let o=0;o<s;o+=1)c[o]=n.dirty[o]|u[o];return c}return n.dirty|u}return n.dirty}function k(t,n,e,r,u,c){if(u){const s=f(n,e,r,c);t.p(s,u)}}function v(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let r=0;r<e;r++)n[r]=-1;return n}return-1}function O(t){const n={};for(const e in t)n[e]=!0;return n}export{m as a,p as b,j as c,O as d,x as e,b as f,v as g,h,g as i,_ as j,l as n,y as r,d as s,k as u};