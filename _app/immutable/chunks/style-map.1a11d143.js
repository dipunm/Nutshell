import{d as l,f as d,g as h,T as u}from"./form-submitter.2a1b4c21.js";/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o="important",c=" !"+o,p=l(class extends d{constructor(n){var t;if(super(n),n.type!==h.ATTRIBUTE||n.name!=="style"||((t=n.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(n){return Object.keys(n).reduce((t,s)=>{const e=n[s];return e==null?t:t+`${s=s.includes("-")?s:s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${e};`},"")}update(n,[t]){const{style:s}=n.element;if(this.ht===void 0){this.ht=new Set;for(const e in t)this.ht.add(e);return this.render(t)}this.ht.forEach(e=>{t[e]==null&&(this.ht.delete(e),e.includes("-")?s.removeProperty(e):s[e]="")});for(const e in t){const r=t[e];if(r!=null){this.ht.add(e);const i=typeof r=="string"&&r.endsWith(c);e.includes("-")||i?s.setProperty(e,i?r.slice(0,-11):r,i?o:""):s[e]=r}}return u}});export{p as o};