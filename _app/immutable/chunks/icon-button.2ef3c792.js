import { r as requestUpdateOnAriaChange, m as setupFormSubmitter, _ as __decorate, n, t, s, q as internals, j as i, A, h as n$1, c as o, x, i as i$1, e } from "./form-submitter.5b8d9ddf.js";
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function isRtl(el, shouldCheck = true) {
  return shouldCheck && getComputedStyle(el).getPropertyValue("direction").trim() === "rtl";
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
var _a;
class IconButton extends s {
  constructor() {
    super(...arguments);
    this.disabled = false;
    this.flipIconInRtl = false;
    this.href = "";
    this.target = "";
    this.ariaLabelSelected = "";
    this.toggle = false;
    this.selected = false;
    this.type = "submit";
    this.value = "";
    this.flipIcon = isRtl(this, this.flipIconInRtl);
    this[_a] = this.attachInternals();
  }
  get name() {
    return this.getAttribute("name") ?? "";
  }
  set name(name) {
    this.setAttribute("name", name);
  }
  /**
   * The associated form element with which this element's value will submit.
   */
  get form() {
    return this[internals].form;
  }
  /**
   * The labels this element is associated with.
   */
  get labels() {
    return this[internals].labels;
  }
  /**
   * Link buttons cannot be disabled.
   */
  willUpdate() {
    if (this.href) {
      this.disabled = false;
    }
  }
  render() {
    const tag = this.href ? i`div` : i`button`;
    const { ariaLabel, ariaHasPopup, ariaExpanded } = this;
    const hasToggledAriaLabel = ariaLabel && this.ariaLabelSelected;
    const ariaPressedValue = !this.toggle ? A : this.selected;
    let ariaLabelValue = A;
    if (!this.href) {
      ariaLabelValue = hasToggledAriaLabel && this.selected ? this.ariaLabelSelected : ariaLabel;
    }
    return n$1`<${tag}
        class="icon-button ${o(this.getRenderClasses())}"
        id="button"
        aria-label="${ariaLabelValue || A}"
        aria-haspopup="${!this.href && ariaHasPopup || A}"
        aria-expanded="${!this.href && ariaExpanded || A}"
        aria-pressed="${ariaPressedValue}"
        ?disabled="${!this.href && this.disabled}"
        @click="${this.handleClick}">
        ${this.renderFocusRing()}
        ${this.renderRipple()}
        ${!this.selected ? this.renderIcon() : A}
        ${this.selected ? this.renderSelectedIcon() : A}
        ${this.renderTouchTarget()}
        ${this.href && this.renderLink()}
  </${tag}>`;
  }
  renderLink() {
    const { ariaLabel } = this;
    return x`
      <a class="link"
        id="link"
        href="${this.href}"
        target="${this.target || A}"
        aria-label="${ariaLabel || A}"
      ></a>
    `;
  }
  getRenderClasses() {
    return {
      "flip-icon": this.flipIcon,
      "selected": this.toggle && this.selected
    };
  }
  renderIcon() {
    return x`<span class="icon"><slot></slot></span>`;
  }
  renderSelectedIcon() {
    return x`<span class="icon icon--selected"><slot name="selected"><slot></slot></slot></span>`;
  }
  renderTouchTarget() {
    return x`<span class="touch"></span>`;
  }
  renderFocusRing() {
    return x`<md-focus-ring part="focus-ring" for=${this.href ? "link" : "button"}></md-focus-ring>`;
  }
  renderRipple() {
    return x`<md-ripple
      for=${this.href ? "link" : A}
      ?disabled="${!this.href && this.disabled}"
    ></md-ripple>`;
  }
  connectedCallback() {
    this.flipIcon = isRtl(this, this.flipIconInRtl);
    super.connectedCallback();
  }
  async handleClick(event) {
    await 0;
    if (!this.toggle || this.disabled || event.defaultPrevented) {
      return;
    }
    this.selected = !this.selected;
    this.dispatchEvent(new InputEvent("input", { bubbles: true, composed: true }));
    this.dispatchEvent(new Event("change", { bubbles: true }));
  }
}
_a = internals;
(() => {
  requestUpdateOnAriaChange(IconButton);
  setupFormSubmitter(IconButton);
})();
IconButton.formAssociated = true;
IconButton.shadowRootOptions = { mode: "open", delegatesFocus: true };
__decorate([
  n({ type: Boolean, reflect: true })
], IconButton.prototype, "disabled", void 0);
__decorate([
  n({ type: Boolean, attribute: "flip-icon-in-rtl" })
], IconButton.prototype, "flipIconInRtl", void 0);
__decorate([
  n()
], IconButton.prototype, "href", void 0);
__decorate([
  n()
], IconButton.prototype, "target", void 0);
__decorate([
  n({ attribute: "aria-label-selected" })
], IconButton.prototype, "ariaLabelSelected", void 0);
__decorate([
  n({ type: Boolean })
], IconButton.prototype, "toggle", void 0);
__decorate([
  n({ type: Boolean, reflect: true })
], IconButton.prototype, "selected", void 0);
__decorate([
  n()
], IconButton.prototype, "type", void 0);
__decorate([
  n()
], IconButton.prototype, "value", void 0);
__decorate([
  t()
], IconButton.prototype, "flipIcon", void 0);
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$1 = i$1`:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);height:var(--_container-height);width:var(--_container-width);justify-content:center}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) max(0px,(48px - var(--_container-width))/2)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host([disabled]){pointer-events:none}.icon-button{place-items:center;background:none;border:none;box-sizing:border-box;cursor:pointer;display:flex;place-content:center;outline:none;padding:0;position:relative;text-decoration:none;user-select:none;z-index:0;flex:1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.icon ::slotted(*){font-size:var(--_icon-size);height:var(--_icon-size);width:var(--_icon-size);font-weight:inherit}md-ripple{z-index:-1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.flip-icon .icon{transform:scaleX(-1)}.icon{display:inline-flex}.link{height:100%;outline:none;position:absolute;width:100%}.touch{position:absolute;height:max(48px,100%);width:max(48px,100%)}:host([touch-target=none]) .touch{display:none}@media(forced-colors: active){:host([disabled]){--_disabled-icon-opacity: 1}}/*# sourceMappingURL=shared-styles.css.map */
`;
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles = i$1`:host{--_disabled-icon-color: var(--md-icon-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-icon-button-disabled-icon-opacity, 0.38);--_icon-size: var(--md-icon-button-icon-size, 24px);--_selected-focus-icon-color: var(--md-icon-button-selected-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-icon-color: var(--md-icon-button-selected-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-color: var(--md-icon-button-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-opacity: var(--md-icon-button-selected-hover-state-layer-opacity, 0.08);--_selected-icon-color: var(--md-icon-button-selected-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-icon-color: var(--md-icon-button-selected-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-color: var(--md-icon-button-selected-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-opacity: var(--md-icon-button-selected-pressed-state-layer-opacity, 0.12);--_state-layer-height: var(--md-icon-button-state-layer-height, 40px);--_state-layer-shape: var(--md-icon-button-state-layer-shape, 9999px);--_state-layer-width: var(--md-icon-button-state-layer-width, 40px);--_focus-icon-color: var(--md-icon-button-focus-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-icon-color: var(--md-icon-button-hover-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-icon-button-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-opacity: var(--md-icon-button-hover-state-layer-opacity, 0.08);--_icon-color: var(--md-icon-button-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-icon-color: var(--md-icon-button-pressed-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-color: var(--md-icon-button-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-opacity: var(--md-icon-button-pressed-state-layer-opacity, 0.12);--_container-shape-start-start: 0;--_container-shape-start-end: 0;--_container-shape-end-end: 0;--_container-shape-end-start: 0;--_container-height: 0;--_container-width: 0;height:var(--_state-layer-height);width:var(--_state-layer-width)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_state-layer-height))/2) max(0px,(48px - var(--_state-layer-width))/2)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_state-layer-shape);--md-focus-ring-shape-start-end: var(--_state-layer-shape);--md-focus-ring-shape-end-end: var(--_state-layer-shape);--md-focus-ring-shape-end-start: var(--_state-layer-shape)}.standard{background-color:rgba(0,0,0,0);color:var(--_icon-color);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.standard:hover{color:var(--_hover-icon-color)}.standard:focus{color:var(--_focus-icon-color)}.standard:active{color:var(--_pressed-icon-color)}.standard:disabled{color:var(--_disabled-icon-color)}md-ripple{border-radius:var(--_state-layer-shape)}.standard:disabled .icon{opacity:var(--_disabled-icon-opacity)}.selected{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}.selected:not(:disabled){color:var(--_selected-icon-color)}.selected:not(:disabled):hover{color:var(--_selected-hover-icon-color)}.selected:not(:disabled):focus{color:var(--_selected-focus-icon-color)}.selected:not(:disabled):active{color:var(--_selected-pressed-icon-color)}/*# sourceMappingURL=standard-styles.css.map */
`;
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let MdIconButton = class MdIconButton2 extends IconButton {
  getRenderClasses() {
    return {
      ...super.getRenderClasses(),
      "standard": true
    };
  }
};
MdIconButton.styles = [styles$1, styles];
MdIconButton = __decorate([
  e("md-icon-button")
], MdIconButton);
export {
  IconButton as I,
  styles$1 as s
};
