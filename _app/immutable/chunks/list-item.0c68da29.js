import{o as F,a as K,_ as r,l as q,s as g,p as O,x as f,i as y,e as $,n as v,r as _,b as B,j as x,A as u,h as H,c as G}from"./form-submitter.2a1b4c21.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function V(s){return F({descriptor:t=>({get(){var e,i;return(i=(e=this.renderRoot)===null||e===void 0?void 0:e.querySelectorAll(s))!==null&&i!==void 0?i:[]},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function z(s,t=h){const e=D(s,t);return e&&(e.tabIndex=0,e.focus()),e}function N(s,t=h){const e=j(s,t);return e&&(e.tabIndex=0,e.focus()),e}function I(s,t=h){for(let e=0;e<s.length;e++){const i=s[e];if(i.tabIndex===0&&t(i))return{item:i,index:e}}return null}function D(s,t=h){for(const e of s)if(t(e))return e;return null}function j(s,t=h){for(let e=s.length-1;e>=0;e--){const i=s[e];if(t(i))return i}return null}function W(s,t,e=h){for(let i=1;i<s.length;i++){const l=(i+t)%s.length,o=s[l];if(e(o))return o}return s[t]?s[t]:null}function X(s,t,e=h){for(let i=1;i<s.length;i++){const l=(t-i+s.length)%s.length,o=s[l];if(e(o))return o}return s[t]?s[t]:null}function k(s,t,e=h){if(t){const i=W(s,t.index,e);return i&&(i.tabIndex=0,i.focus()),i}else return z(s,e)}function E(s,t,e=h){if(t){const i=X(s,t.index,e);return i&&(i.tabIndex=0,i.focus()),i}else return N(s,e)}function Y(){return new Event("request-activation",{bubbles:!0,composed:!0})}function h(s){return!s.disabled}/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const c={ArrowDown:"ArrowDown",ArrowLeft:"ArrowLeft",ArrowUp:"ArrowUp",ArrowRight:"ArrowRight",Home:"Home",End:"End"};class J{constructor(t){this.handleKeydown=n=>{const a=n.key;if(n.defaultPrevented||!this.isNavigableKey(a))return;const d=this.items;if(!d.length)return;const m=I(d,this.isActivatable);m&&(m.item.tabIndex=-1),n.preventDefault();const b=this.isRtl(),M=b?c.ArrowRight:c.ArrowLeft,U=b?c.ArrowLeft:c.ArrowRight;switch(a){case c.ArrowDown:case U:k(d,m,this.isActivatable);break;case c.ArrowUp:case M:E(d,m,this.isActivatable);break;case c.Home:z(d,this.isActivatable);break;case c.End:N(d,this.isActivatable);break}},this.onDeactivateItems=()=>{const n=this.items;for(const a of n)this.deactivateItem(a)},this.onRequestActivation=n=>{this.onDeactivateItems();const a=n.target;this.activateItem(a),a.focus()},this.onSlotchange=()=>{const n=this.items;let a=!1;for(const m of n){if(!m.disabled&&m.tabIndex>-1&&!a){a=!0,m.tabIndex=0;continue}m.tabIndex=-1}if(a)return;const d=D(n,this.isActivatable);d&&(d.tabIndex=0)};const{isItem:e,getPossibleItems:i,isRtl:l,deactivateItem:o,activateItem:S,isNavigableKey:T,isActivatable:P}=t;this.isItem=e,this.getPossibleItems=i,this.isRtl=l,this.deactivateItem=o,this.activateItem=S,this.isNavigableKey=T,this.isActivatable=P}get items(){const t=this.getPossibleItems(),e=[];for(const i of t){if(this.isItem(i)){e.push(i);continue}const o=i.item;o&&this.isItem(o)&&e.push(o)}return e}activateNextItem(){const t=this.items,e=I(t,this.isActivatable);return e&&(e.item.tabIndex=-1),k(t,e,this.isActivatable)}activatePreviousItem(){const t=this.items,e=I(t,this.isActivatable);return e&&(e.item.tabIndex=-1),E(t,e,this.isActivatable)}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Q=new Set(Object.values(c));class C extends g{get items(){return this.listController.items}constructor(){super(),this.listController=new J({isItem:t=>t.hasAttribute("md-list-item"),getPossibleItems:()=>this.slotItems,isRtl:()=>getComputedStyle(this).direction==="rtl",deactivateItem:t=>{t.tabIndex=-1},activateItem:t=>{t.tabIndex=0},isNavigableKey:t=>Q.has(t),isActivatable:t=>!t.disabled&&t.type!=="text"}),this.internals=O(this,this.attachInternals()),this.internals.role="list",this.addEventListener("keydown",this.listController.handleKeydown)}render(){return f`
      <slot
          @deactivate-items=${this.listController.onDeactivateItems}
          @request-activation=${this.listController.onRequestActivation}
          @slotchange=${this.listController.onSlotchange}>
      </slot>
    `}activateNextItem(){return this.listController.activateNextItem()}activatePreviousItem(){return this.listController.activatePreviousItem()}}K(C,{focusable:!1});r([q({flatten:!0})],C.prototype,"slotItems",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const Z=y`:host{background:var(--md-list-container-color, var(--md-sys-color-surface, #fef7ff));color:unset;display:flex;flex-direction:column;outline:none;padding:8px 0;position:relative}/*# sourceMappingURL=list-styles.css.map */
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let w=class extends C{};w.styles=[Z];w=r([$("md-list")],w);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const tt=y`@media(forced-colors: active){.disabled slot{color:GrayText}.list-item.disabled{color:GrayText;opacity:1}}/*# sourceMappingURL=forced-colors-styles.css.map */
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class L extends g{constructor(){super(...arguments),this.multiline=!1}render(){return f`
      <slot name="container"></slot>
      <slot class="non-text" name="start"></slot>
      <div class="text">
        <slot name="overline"
            @slotchange=${this.handleTextSlotChange}></slot>
        <slot class="default-slot"
            @slotchange=${this.handleTextSlotChange}></slot>
        <slot name="headline"
            @slotchange=${this.handleTextSlotChange}></slot>
        <slot name="supporting-text"
            @slotchange=${this.handleTextSlotChange}></slot>
      </div>
      <slot class="non-text" name="trailing-supporting-text"></slot>
      <slot class="non-text" name="end"></slot>
    `}handleTextSlotChange(){let t=!1,e=0;for(const i of this.textSlots)if(et(i)&&(e+=1),e>1){t=!0;break}this.multiline=t}}r([v({type:Boolean,reflect:!0})],L.prototype,"multiline",void 0);r([V(".text slot")],L.prototype,"textSlots",void 0);function et(s){var t;for(const e of s.assignedNodes({flatten:!0})){const i=e.nodeType===Node.ELEMENT_NODE,l=e.nodeType===Node.TEXT_NODE&&((t=e.textContent)==null?void 0:t.match(/\S/));if(i||l)return!0}return!1}/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const it=y`:host{color:var(--md-sys-color-on-surface, #1d1b20);font-family:var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-body-large-size, 1rem);font-weight:var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400));line-height:var(--md-sys-typescale-body-large-line-height, 1.5rem);align-items:center;box-sizing:border-box;display:flex;gap:16px;min-height:56px;overflow:hidden;padding:12px 16px;position:relative;text-overflow:ellipsis}:host([multiline]){min-height:72px}[name=overline]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-label-small-size, 0.6875rem);font-weight:var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500));line-height:var(--md-sys-typescale-label-small-line-height, 1rem)}[name=supporting-text]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-body-medium-size, 0.875rem);font-weight:var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400));line-height:var(--md-sys-typescale-body-medium-line-height, 1.25rem)}[name=trailing-supporting-text]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-label-small-size, 0.6875rem);font-weight:var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500));line-height:var(--md-sys-typescale-label-small-line-height, 1rem)}[name=container]::slotted(*){inset:0;position:absolute}.default-slot{display:inline}.default-slot,::slotted(*){overflow:hidden;text-overflow:ellipsis}.text{display:flex;flex:1;flex-direction:column;overflow:hidden}/*# sourceMappingURL=item-styles.css.map */
`;/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let A=class extends L{};A.styles=[it];A=r([$("md-item")],A);/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class p extends g{constructor(){super(...arguments),this.disabled=!1,this.type="text",this.isListItem=!0,this.href="",this.target=""}get isDisabled(){return this.disabled&&this.type!=="link"}willUpdate(t){this.href&&(this.type="link"),super.willUpdate(t)}render(){return this.renderListItem(f`
      <md-item>
        <div slot="container">
          ${this.renderRipple()}
          ${this.renderFocusRing()}
        </div>
        <slot name="start" slot="start"></slot>
        <slot name="end" slot="end"></slot>
        ${this.renderBody()}
      </md-item>
    `)}renderListItem(t){const e=this.type==="link";let i;switch(this.type){case"link":i=x`a`;break;case"button":i=x`button`;break;default:case"text":i=x`li`;break}const l=this.type!=="text",o=e&&this.target?this.target:u;return H`
      <${i}
        id="item"
        tabindex="${this.isDisabled||!l?-1:0}"
        ?disabled=${this.isDisabled}
        role="listitem"
        aria-selected=${this.ariaSelected||u}
        aria-checked=${this.ariaChecked||u}
        aria-expanded=${this.ariaExpanded||u}
        aria-haspopup=${this.ariaHasPopup||u}
        class="list-item ${G(this.getRenderClasses())}"
        href=${this.href||u}
        target=${o}
        @focus=${this.onFocus}
      >${t}</${i}>
    `}renderRipple(){return this.type==="text"?u:f`
      <md-ripple
          part="ripple"
          for="item"
          ?disabled=${this.isDisabled}></md-ripple>`}renderFocusRing(){return this.type==="text"?u:f`
      <md-focus-ring
          @visibility-changed=${this.onFocusRingVisibilityChanged}
          part="focus-ring"
          for="item"
          inward></md-focus-ring>`}onFocusRingVisibilityChanged(t){}getRenderClasses(){return{disabled:this.isDisabled}}renderBody(){return f`
      <slot></slot>
      <slot name="overline" slot="overline"></slot>
      <slot name="headline" slot="headline"></slot>
      <slot name="supporting-text" slot="supporting-text"></slot>
      <slot name="trailing-supporting-text"
          slot="trailing-supporting-text"></slot>
    `}onFocus(){this.tabIndex===-1&&this.dispatchEvent(Y())}focus(){var t;(t=this.listItemRoot)==null||t.focus()}}_(p);p.shadowRootOptions={...g.shadowRootOptions,delegatesFocus:!0};r([v({type:Boolean,reflect:!0})],p.prototype,"disabled",void 0);r([v()],p.prototype,"type",void 0);r([v({type:Boolean,attribute:"md-list-item",reflect:!0})],p.prototype,"isListItem",void 0);r([v()],p.prototype,"href",void 0);r([v()],p.prototype,"target",void 0);r([B(".list-item")],p.prototype,"listItemRoot",void 0);/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */const st=y`:host{display:flex;--md-ripple-hover-color: var(--md-list-item-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-hover-opacity: var(--md-list-item-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-list-item-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-pressed-opacity: var(--md-list-item-pressed-state-layer-opacity, 0.12)}md-focus-ring{z-index:1;--md-focus-ring-shape: 8px}a,button,li{background:none;border:none;padding:0;margin:0;text-align:unset;text-decoration:none}.list-item{border-radius:inherit;display:flex;flex:1;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.list-item.interactive{cursor:pointer}.list-item.disabled{opacity:var(--md-list-item-disabled-opacity, 0.3);pointer-events:none}[slot=container]{pointer-events:none}md-ripple{border-radius:inherit}md-item{border-radius:inherit;flex:1;height:100%;color:var(--md-list-item-label-text-color, var(--md-sys-color-on-surface, #1d1b20));font-family:var(--md-list-item-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-list-item-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));line-height:var(--md-list-item-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));font-weight:var(--md-list-item-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));min-height:var(--md-list-item-one-line-container-height, 56px);padding-top:var(--md-list-item-top-space, 12px);padding-bottom:var(--md-list-item-bottom-space, 12px);padding-inline-start:var(--md-list-item-leading-space, 16px);padding-inline-end:var(--md-list-item-trailing-space, 16px)}md-item[multiline]{min-height:var(--md-list-item-two-line-container-height, 72px)}[slot=supporting-text]{color:var(--md-list-item-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-list-item-supporting-text-font, var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-list-item-supporting-text-size, var(--md-sys-typescale-body-medium-size, 0.875rem));line-height:var(--md-list-item-supporting-text-line-height, var(--md-sys-typescale-body-medium-line-height, 1.25rem));font-weight:var(--md-list-item-supporting-text-weight, var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400)))}[slot=trailing-supporting-text]{color:var(--md-list-item-trailing-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-list-item-trailing-supporting-text-font, var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-list-item-trailing-supporting-text-size, var(--md-sys-typescale-label-small-size, 0.6875rem));line-height:var(--md-list-item-trailing-supporting-text-line-height, var(--md-sys-typescale-label-small-line-height, 1rem));font-weight:var(--md-list-item-trailing-supporting-text-weight, var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500)))}:is([slot=start],[slot=end])::slotted(*){fill:currentColor}[slot=start]{color:var(--md-list-item-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}[slot=end]{color:var(--md-list-item-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}/*# sourceMappingURL=list-item-styles.css.map */
`;/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let R=class extends p{};R.styles=[st,tt];R=r([$("md-list-item")],R);
