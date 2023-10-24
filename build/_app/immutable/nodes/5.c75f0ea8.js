import{s as X,c as pe,e as le,u as me,g as fe,a as ge,n as I,i as _e,b as be,f as ye}from"../chunks/utils.922d6fcb.js";import{S as Y,i as Q,g,s as w,h as _,j as E,c as C,f as c,k as b,l as j,a as h,y as L,d as H,t as D,z as M,D as xe,B as ae,r as S,u as q,v as P,w as N}from"../chunks/index.36f81f22.js";import{o as $e,b as we}from"../chunks/scheduler.f16290e1.js";import{j as Ce}from"../chunks/singletons.c46a0573.js";import{p as re}from"../chunks/stores.b2d1ae75.js";import{g as ce}from"../chunks/navigation.b0fb6cd4.js";import"../chunks/filled-button.179b7cf0.js";import{i as ie,r as ke,s as he,_ as B,n as G,x as O,c as Me,A as te,e as Te,N as de}from"../chunks/NavBar.3b603164.js";import"../chunks/list-item.00b8f239.js";function ue(l){let e,i="<md-icon>account_balance</md-icon>";return{c(){e=g("div"),e.innerHTML=i,this.h()},l(s){e=_(s,"DIV",{class:!0,"data-svelte-h":!0}),M(e)!=="svelte-1kyv2bk"&&(e.innerHTML=i),this.h()},h(){b(e,"class","icon svelte-7il5sw")},m(s,t){h(s,e,t)},d(s){s&&c(e)}}}function ze(l){let e,i,s,t,d=l[3]==="mint"&&ue();const r=l[7].default,a=pe(r,l,l[6],null);return{c(){e=g("section"),d&&d.c(),i=w(),a&&a.c(),this.h()},l(n){e=_(n,"SECTION",{class:!0,style:!0});var o=E(e);d&&d.l(o),i=C(o),a&&a.l(o),o.forEach(c),this.h()},h(){b(e,"class",s=le(l[2])+" svelte-7il5sw"),j(e,"--bg-color","var(--md-sys-color-"+l[0]+")"),j(e,"--padding-top",.75+l[4]+"rem"),j(e,"--margin-top",l[5]+"rem"),j(e,"--height",l[1])},m(n,o){h(n,e,o),d&&d.m(e,null),L(e,i),a&&a.m(e,null),t=!0},p(n,[o]){n[3]==="mint"?d||(d=ue(),d.c(),d.m(e,i)):d&&(d.d(1),d=null),a&&a.p&&(!t||o&64)&&me(a,r,n,n[6],t?ge(r,n[6],o,null):fe(n[6]),null),(!t||o&4&&s!==(s=le(n[2])+" svelte-7il5sw"))&&b(e,"class",s),(!t||o&1)&&j(e,"--bg-color","var(--md-sys-color-"+n[0]+")"),(!t||o&2)&&j(e,"--height",n[1])},i(n){t||(H(a,n),t=!0)},o(n){D(a,n),t=!1},d(n){n&&c(e),d&&d.d(),a&&a.d(n)}}}function Le(l,e,i){let{$$slots:s={},$$scope:t}=e,{color:d}=e,{height:r="auto"}=e,{class:a=""}=e,{icon:n=void 0}=e;const o=n==="mint"?1.25:0,f=n==="mint"?1.25:1.1875;return l.$$set=p=>{"color"in p&&i(0,d=p.color),"height"in p&&i(1,r=p.height),"class"in p&&i(2,a=p.class),"icon"in p&&i(3,n=p.icon),"$$scope"in p&&i(6,t=p.$$scope)},[d,r,a,n,o,f,t,s]}class ve extends Y{constructor(e){super(),Q(this,e,Le,ze,X,{color:0,height:1,class:2,icon:3})}}function Ie(l){let e,i="You have received an offer for:",s,t,d='<span class="zeros svelte-1lszb0t">0</span><span class="amount headline-medium svelte-1lszb0t">.</span><span class="zeros svelte-1lszb0t">00 0</span><span class="amount headline-medium svelte-1lszb0t">50 204</span> <span class="label-large">BTC</span>';return{c(){e=g("h1"),e.textContent=i,s=w(),t=g("h2"),t.innerHTML=d,this.h()},l(r){e=_(r,"H1",{class:!0,"data-svelte-h":!0}),M(e)!=="svelte-abd273"&&(e.textContent=i),s=C(r),t=_(r,"H2",{class:!0,"data-svelte-h":!0}),M(t)!=="svelte-nw3p3e"&&(t.innerHTML=d),this.h()},h(){b(e,"class","headline-large svelte-1lszb0t"),b(t,"class","headline-small zeros svelte-1lszb0t")},m(r,a){h(r,e,a),h(r,s,a),h(r,t,a)},p:I,i:I,o:I,d(r){r&&(c(e),c(s),c(t))}}}class Ee extends Y{constructor(e){super(),Q(this,e,null,Ie,X,{})}}/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const He=ie`.elevated{--md-elevation-level: var(--_elevated-container-elevation);--md-elevation-shadow-color: var(--_elevated-container-shadow-color)}.elevated::before{background:var(--_elevated-container-color)}.elevated:hover{--md-elevation-level: var(--_elevated-hover-container-elevation)}.elevated:focus-within{--md-elevation-level: var(--_elevated-focus-container-elevation)}.elevated:active{--md-elevation-level: var(--_elevated-pressed-container-elevation)}.elevated.disabled{--md-elevation-level: var(--_elevated-disabled-container-elevation)}.elevated.disabled::before{background:var(--_elevated-disabled-container-color);opacity:var(--_elevated-disabled-container-opacity)}@media(forced-colors: active){.elevated md-elevation{border:1px solid CanvasText}.elevated.disabled md-elevation{border-color:GrayText}}/*# sourceMappingURL=elevated-styles.css.map */
`;/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const De=ie`:host{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end);display:inline-flex;height:var(--_container-height);cursor:pointer;--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) 0}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}.container{border-radius:inherit;box-sizing:border-box;display:flex;height:100%;position:relative;width:100%}.container::before{border-radius:inherit;content:"";inset:0;pointer-events:none;position:absolute}.container:not(.disabled){cursor:pointer}.container.disabled{pointer-events:none}.cell{display:flex}.action{align-items:baseline;appearance:none;background:none;border:none;border-radius:inherit;display:flex;gap:8px;outline:none;padding:0;position:relative;text-decoration:none}.primary.action{padding-inline-start:8px;padding-inline-end:16px}.touch{height:48px;inset:50% 0 0;position:absolute;transform:translateY(-50%);width:100%}:host([touch-target=none]) .touch{display:none}.outline{border:var(--_outline-width) solid var(--_outline-color);border-radius:inherit;inset:0;pointer-events:none;position:absolute}:where(:focus) .outline{border-color:var(--_focus-outline-color)}:where(.disabled) .outline{border-color:var(--_disabled-outline-color);opacity:var(--_disabled-outline-opacity)}md-ripple{border-radius:inherit}.label,.icon,.touch{z-index:1}.label{align-items:center;color:var(--_label-text-color);display:flex;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);height:100%;text-overflow:ellipsis;user-select:none;white-space:nowrap}:where(:hover) .label{color:var(--_hover-label-text-color)}:where(:focus) .label{color:var(--_focus-label-text-color)}:where(:active) .label{color:var(--_pressed-label-text-color)}:where(.disabled) .label{color:var(--_disabled-label-text-color);opacity:var(--_disabled-label-text-opacity)}.icon{align-self:center;display:flex;fill:currentColor;position:relative}.icon ::slotted(:first-child){font-size:var(--_icon-size);height:var(--_icon-size);width:var(--_icon-size)}.leading.icon{color:var(--_leading-icon-color)}:where(:hover) .leading.icon{color:var(--_hover-leading-icon-color)}:where(:focus) .leading.icon{color:var(--_focus-leading-icon-color)}:where(:active) .leading.icon{color:var(--_pressed-leading-icon-color)}:where(.disabled) .leading.icon{color:var(--_disabled-leading-icon-color);opacity:var(--_disabled-leading-icon-opacity)}@media(forced-colors: active){:where(.disabled) :is(.label,.outline,.leading.icon){color:GrayText;opacity:1}}a,button:not(:disabled){cursor:inherit}/*# sourceMappingURL=shared-styles.css.map */
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class F extends he{constructor(){super(...arguments),this.disabled=!1,this.alwaysFocusable=!1,this.label=""}get rippleDisabled(){return this.disabled}focus(e){this.disabled&&!this.alwaysFocusable||super.focus(e)}render(){return O`
      <div class="container ${Me(this.getContainerClasses())}">
        ${this.renderContainerContent()}
      </div>
    `}updated(e){e.has("disabled")&&e.get("disabled")!==void 0&&this.dispatchEvent(new Event("update-focus",{bubbles:!0}))}getContainerClasses(){return{disabled:this.disabled}}renderContainerContent(){return O`
      ${this.renderOutline()}
      <md-focus-ring part="focus-ring"
          for=${this.primaryId}></md-focus-ring>
      <md-ripple for=${this.primaryId}
          ?disabled=${this.rippleDisabled}></md-ripple>
      ${this.renderPrimaryAction(this.renderPrimaryContent())}
    `}renderOutline(){return O`<span class="outline"></span>`}renderLeadingIcon(){return O`<slot name="icon"></slot>`}renderPrimaryContent(){return O`
      <span class="leading icon" aria-hidden="true">
        ${this.renderLeadingIcon()}
      </span>
      <span class="label">${this.label}</span>
      <span class="touch"></span>
    `}}ke(F);F.shadowRootOptions={...he.shadowRootOptions,delegatesFocus:!0};B([G({type:Boolean})],F.prototype,"disabled",void 0);B([G({type:Boolean,attribute:"always-focusable"})],F.prototype,"alwaysFocusable",void 0);B([G()],F.prototype,"label",void 0);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Z extends F{constructor(){super(...arguments),this.elevated=!1,this.href="",this.target=""}get primaryId(){return this.href?"link":"button"}get rippleDisabled(){return!this.href&&this.disabled}getContainerClasses(){return{...super.getContainerClasses(),disabled:!this.href&&this.disabled,elevated:this.elevated,link:!!this.href}}renderPrimaryAction(e){const{ariaLabel:i}=this;return this.href?O`
        <a class="primary action"
          id="link"
          aria-label=${i||te}
          href=${this.href}
          target=${this.target||te}
        >${e}</a>
      `:O`
      <button class="primary action"
        id="button"
        aria-label=${i||te}
        ?disabled=${this.disabled&&!this.alwaysFocusable}
        type="button"
      >${e}</button>
    `}renderOutline(){return this.elevated?O`<md-elevation></md-elevation>`:super.renderOutline()}}B([G({type:Boolean})],Z.prototype,"elevated",void 0);B([G()],Z.prototype,"href",void 0);B([G()],Z.prototype,"target",void 0);/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Oe extends Z{}/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const Ae=ie`:host{--_container-height: var(--md-suggestion-chip-container-height, 32px);--_container-shape: var(--md-suggestion-chip-container-shape, 8px);--_disabled-label-text-color: var(--md-suggestion-chip-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-suggestion-chip-disabled-label-text-opacity, 0.38);--_elevated-container-color: var(--md-suggestion-chip-elevated-container-color, var(--md-sys-color-surface-container-low, #f7f2fa));--_elevated-container-elevation: var(--md-suggestion-chip-elevated-container-elevation, 1);--_elevated-container-shadow-color: var(--md-suggestion-chip-elevated-container-shadow-color, var(--md-sys-color-shadow, #000));--_elevated-disabled-container-color: var(--md-suggestion-chip-elevated-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_elevated-disabled-container-elevation: var(--md-suggestion-chip-elevated-disabled-container-elevation, 0);--_elevated-disabled-container-opacity: var(--md-suggestion-chip-elevated-disabled-container-opacity, 0.12);--_elevated-focus-container-elevation: var(--md-suggestion-chip-elevated-focus-container-elevation, 1);--_elevated-hover-container-elevation: var(--md-suggestion-chip-elevated-hover-container-elevation, 2);--_elevated-pressed-container-elevation: var(--md-suggestion-chip-elevated-pressed-container-elevation, 1);--_focus-label-text-color: var(--md-suggestion-chip-focus-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-label-text-color: var(--md-suggestion-chip-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-suggestion-chip-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-opacity: var(--md-suggestion-chip-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-suggestion-chip-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-suggestion-chip-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-suggestion-chip-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-suggestion-chip-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-suggestion-chip-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-label-text-color: var(--md-suggestion-chip-pressed-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-color: var(--md-suggestion-chip-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-opacity: var(--md-suggestion-chip-pressed-state-layer-opacity, 0.12);--_disabled-outline-color: var(--md-suggestion-chip-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-suggestion-chip-disabled-outline-opacity, 0.12);--_focus-outline-color: var(--md-suggestion-chip-focus-outline-color, var(--md-sys-color-on-surface-variant, #49454f));--_outline-color: var(--md-suggestion-chip-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-suggestion-chip-outline-width, 1px);--_disabled-leading-icon-color: var(--md-suggestion-chip-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-suggestion-chip-disabled-leading-icon-opacity, 0.38);--_focus-leading-icon-color: var(--md-suggestion-chip-focus-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-leading-icon-color: var(--md-suggestion-chip-hover-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_leading-icon-color: var(--md-suggestion-chip-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_pressed-leading-icon-color: var(--md-suggestion-chip-pressed-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-suggestion-chip-icon-size, 18px);--_container-shape-start-start: var( --md-suggestion-chip-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-suggestion-chip-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-suggestion-chip-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-suggestion-chip-container-shape-end-start, var(--_container-shape) )}@media(forced-colors: active){.link .outline{border-color:ActiveText}}/*# sourceMappingURL=suggestion-styles.css.map */
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let se=class extends Oe{};se.styles=[De,He,Ae];se=B([Te("md-suggestion-chip")],se);function Se(l){let e,i="Deposited with the following mint:",s,t,d="https://legend.lnbits.com/cashu/api/v1/4gr9Xcmz3XEkUNwiBiQGoC",r,a,n=`<dt class="title-medium">Transferring to:
    </dt><dd class="body-small">Mint A</dd>`,o,f,p="Transferring to:",v,$,A="Mint A",T,k,z,U;return{c(){e=g("h1"),e.textContent=i,s=w(),t=g("p"),t.textContent=d,r=w(),a=g("dl"),a.innerHTML=n,o=w(),f=g("h1"),f.textContent=p,v=w(),$=g("p"),$.textContent=A,T=w(),k=g("md-suggestion-chip"),this.h()},l(u){e=_(u,"H1",{class:!0,"data-svelte-h":!0}),M(e)!=="svelte-603zqe"&&(e.textContent=i),s=C(u),t=_(u,"P",{class:!0,"data-svelte-h":!0}),M(t)!=="svelte-1mfh4ni"&&(t.textContent=d),r=C(u),a=_(u,"DL",{"data-svelte-h":!0}),M(a)!=="svelte-iey1v"&&(a.innerHTML=n),o=C(u),f=_(u,"H1",{class:!0,"data-svelte-h":!0}),M(f)!=="svelte-1xb7jz"&&(f.textContent=p),v=C(u),$=_(u,"P",{class:!0,"data-svelte-h":!0}),M($)!=="svelte-xwm2kg"&&($.textContent=A),T=C(u),k=_(u,"MD-SUGGESTION-CHIP",{label:!0}),E(k).forEach(c),this.h()},h(){b(e,"class","title-medium svelte-1lj9hkq"),b(t,"class","body-small svelte-1lj9hkq"),b(f,"class","title-medium svelte-1lj9hkq"),b($,"class","body-small svelte-1lj9hkq"),xe(k,"label","Transfer to another mint")},m(u,x){h(u,e,x),h(u,s,x),h(u,t,x),h(u,r,x),h(u,a,x),h(u,o,x),h(u,f,x),h(u,v,x),h(u,$,x),h(u,T,x),h(u,k,x),z||(U=ae(k,"click",function(){_e(l[0])&&l[0].apply(this,arguments)}),z=!0)},p(u,[x]){l=u},i:I,o:I,d(u){u&&(c(e),c(s),c(t),c(r),c(a),c(o),c(f),c(v),c($),c(T),c(k)),z=!1,U()}}}function qe(l,e,i){let{action:s}=e;return l.$$set=t=>{"action"in t&&i(0,s=t.action)},[s]}class Pe extends Y{constructor(e){super(),Q(this,e,qe,Se,X,{action:0})}}function Ne(l){let e,i=`A mint is similar to a banking institution; it provides convenience and
    defends your online privacy as you spend and receive bitcoin.`,s,t,d=`<md-list-item><md-icon slot="start">account_balance</md-icon> <div slot="headline">A mint is a custodian</div> <div slot="supporting-text">Like all custodial services, a mint is 
            susceptible to loss of customer funds.</div></md-list-item> <md-list-item><md-icon slot="start">error</md-icon> <div slot="headline">Custodians require trust</div> <div slot="supporting-text">Mints rely on reputation to establish trust. 
            Customers must trust custodians to secure 
            and facilitate payments, and to minimise 
            counterparty risk on their behalf.</div></md-list-item> <md-list-item><md-icon slot="start">visibility_off</md-icon> <div slot="headline">A mint is a custodian</div> <div slot="supporting-text">Mints operate without collecting your 
            personal information or asking for 
            registration; why should it? Mints don&#39;t 
            keep track of your balance, your device 
            does.</div></md-list-item> <md-list-item><md-icon slot="start">gavel</md-icon> <div slot="headline">Mints defend your privacy</div> <div slot="supporting-text">Unlike other custodians, a mint cannot 
            target you, or freeze or restrict access to 
            your funds. Mints don&#39;t know who you are, 
            nor how wealthy you might be.</div></md-list-item>`,r,a,n=`This app provides learning resources to help you learn more about bitcoin and 
    how to eliminate counterparty risk by practicing self custody.`,o,f,p=`This app allows you to manage funds across one or many mints using the cashu protocol. Learn 
    more at <a target="_blank" href="https://cashu.space">https://cashu.space</a>.`;return{c(){e=g("p"),e.textContent=i,s=w(),t=g("md-list"),t.innerHTML=d,r=w(),a=g("p"),a.textContent=n,o=w(),f=g("p"),f.innerHTML=p,this.h()},l(v){e=_(v,"P",{class:!0,"data-svelte-h":!0}),M(e)!=="svelte-1w5hltu"&&(e.textContent=i),s=C(v),t=_(v,"MD-LIST",{"data-svelte-h":!0}),M(t)!=="svelte-1dfq5lb"&&(t.innerHTML=d),r=C(v),a=_(v,"P",{class:!0,"data-svelte-h":!0}),M(a)!=="svelte-1p7ql5c"&&(a.textContent=n),o=C(v),f=_(v,"P",{class:!0,"data-svelte-h":!0}),M(f)!=="svelte-fbjcux"&&(f.innerHTML=p),this.h()},h(){b(e,"class","svelte-1yxu9ap"),b(a,"class","svelte-1yxu9ap"),b(f,"class","svelte-1yxu9ap")},m(v,$){h(v,e,$),h(v,s,$),h(v,t,$),h(v,r,$),h(v,a,$),h(v,o,$),h(v,f,$)},p:I,i:I,o:I,d(v){v&&(c(e),c(s),c(t),c(r),c(a),c(o),c(f))}}}class Be extends Y{constructor(e){super(),Q(this,e,null,Ne,X,{})}}function Ue(l){let e,i;return{c(){e=g("img"),this.h()},l(s){e=_(s,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){b(e,"class","hero svelte-1f7s4yk"),ye(e.src,i=Ce+"/offer-hero.png")||b(e,"src",i),b(e,"alt","")},m(s,t){h(s,e,t)},p:I,d(s){s&&c(e)}}}function je(l){let e,i;return e=new Pe({props:{action:l[1]}}),{c(){S(e.$$.fragment)},l(s){q(e.$$.fragment,s)},m(s,t){P(e,s,t),i=!0},p:I,i(s){i||(H(e.$$.fragment,s),i=!0)},o(s){D(e.$$.fragment,s),i=!1},d(s){N(e,s)}}}function Ge(l){let e,i="<md-icon>arrow_back</md-icon>",s,t,d="What is a mint?",r,a;return{c(){e=g("md-icon-button"),e.innerHTML=i,s=w(),t=g("h1"),t.textContent=d,this.h()},l(n){e=_(n,"MD-ICON-BUTTON",{"data-svelte-h":!0}),M(e)!=="svelte-ormz4p"&&(e.innerHTML=i),s=C(n),t=_(n,"H1",{class:!0,"data-svelte-h":!0}),M(t)!=="svelte-1rqkv69"&&(t.textContent=d),this.h()},h(){b(t,"class","headline-medium svelte-1f7s4yk")},m(n,o){h(n,e,o),h(n,s,o),h(n,t,o),r||(a=ae(e,"click",l[2]),r=!0)},p:I,d(n){n&&(c(e),c(s),c(t)),r=!1,a()}}}function Fe(l){let e,i,s,t,d,r,a,n,o,f,p,v,$="Accept the offer",A,T,k,z,U,u,x,J,ee,oe;return i=new de({}),t=new ve({props:{color:"tertiary",height:"12rem",$$slots:{default:[Ue]},$$scope:{ctx:l}}}),a=new Ee({}),o=new ve({props:{color:"surface-container-highest",icon:"mint",class:"mint-info",$$slots:{default:[je]},$$scope:{ctx:l}}}),z=new de({props:{$$slots:{default:[Ge]},$$scope:{ctx:l}}}),x=new Be({}),{c(){e=g("div"),S(i.$$.fragment),s=w(),S(t.$$.fragment),d=w(),r=g("section"),S(a.$$.fragment),n=w(),S(o.$$.fragment),f=w(),p=g("section"),v=g("md-filled-button"),v.textContent=$,A=w(),T=g("dialog"),k=g("div"),S(z.$$.fragment),U=w(),u=g("section"),S(x.$$.fragment),this.h()},l(m){e=_(m,"DIV",{class:!0});var y=E(e);q(i.$$.fragment,y),s=C(y),q(t.$$.fragment,y),d=C(y),r=_(y,"SECTION",{class:!0});var R=E(r);q(a.$$.fragment,R),R.forEach(c),n=C(y),q(o.$$.fragment,y),f=C(y),p=_(y,"SECTION",{class:!0});var V=E(p);v=_(V,"MD-FILLED-BUTTON",{"data-svelte-h":!0}),M(v)!=="svelte-8m14pq"&&(v.textContent=$),V.forEach(c),y.forEach(c),A=C(m),T=_(m,"DIALOG",{class:!0});var W=E(T);k=_(W,"DIV",{class:!0});var K=E(k);q(z.$$.fragment,K),U=C(K),u=_(K,"SECTION",{class:!0});var ne=E(u);q(x.$$.fragment,ne),ne.forEach(c),K.forEach(c),W.forEach(c),this.h()},h(){b(r,"class","details svelte-1f7s4yk"),b(p,"class","calltoaction svelte-1f7s4yk"),b(e,"class","container svelte-1f7s4yk"),b(u,"class","contents svelte-1f7s4yk"),b(k,"class","modal-container svelte-1f7s4yk"),b(T,"class","svelte-1f7s4yk")},m(m,y){h(m,e,y),P(i,e,null),L(e,s),P(t,e,null),L(e,d),L(e,r),P(a,r,null),L(e,n),P(o,e,null),L(e,f),L(e,p),L(p,v),h(m,A,y),h(m,T,y),L(T,k),P(z,k,null),L(k,U),L(k,u),P(x,u,null),l[4](T),J=!0,ee||(oe=ae(v,"click",l[3]),ee=!0)},p(m,[y]){const R={};y&64&&(R.$$scope={dirty:y,ctx:m}),t.$set(R);const V={};y&64&&(V.$$scope={dirty:y,ctx:m}),o.$set(V);const W={};y&64&&(W.$$scope={dirty:y,ctx:m}),z.$set(W)},i(m){J||(H(i.$$.fragment,m),H(t.$$.fragment,m),H(a.$$.fragment,m),H(o.$$.fragment,m),H(z.$$.fragment,m),H(x.$$.fragment,m),J=!0)},o(m){D(i.$$.fragment,m),D(t.$$.fragment,m),D(a.$$.fragment,m),D(o.$$.fragment,m),D(z.$$.fragment,m),D(x.$$.fragment,m),J=!1},d(m){m&&(c(e),c(A),c(T)),N(i),N(t),N(a),N(o),N(z),N(x),l[4](null),ee=!1,oe()}}}function Re(l,e,i){let s;be(l,re,o=>i(5,s=o));let t;function d(){ce("?modal=true",{noScroll:!0}),t.showModal()}function r(o){o.preventDefault(),t.close()}$e(()=>{const o=p=>{s.url.searchParams.has("modal")&&history.go(-1)};t.addEventListener("close",o),t.addEventListener("click",p=>{p.target===t&&t.close()});const f=re.subscribe(p=>{p.url.searchParams.has("modal")?t.open||t.showModal():t.open&&t.close()});return()=>{f(),t.removeEventListener("close",o)}});const a=()=>ce("/accounts");function n(o){we[o?"unshift":"push"](()=>{t=o,i(0,t)})}return[t,d,r,a,n]}class st extends Y{constructor(e){super(),Q(this,e,Re,Fe,X,{})}}export{st as component};
