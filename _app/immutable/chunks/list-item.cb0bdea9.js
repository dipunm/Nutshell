import { a as setupHostAria, _ as __decorate, l, s, p as polyfillElementInternalsAria, x, i, e, r as requestUpdateOnAriaChange, n, b as i$1, j as i$2, A, h as n$1, c as o } from "./form-submitter.5b8d9ddf.js";
import { N as NavigableKeys, L as ListController, c as createRequestActivationEvent } from "./icon.1cedd58b.js";
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const NAVIGABLE_KEY_SET = new Set(Object.values(NavigableKeys));
class List extends s {
  /** @export */
  get items() {
    return this.listController.items;
  }
  constructor() {
    super();
    this.listController = new ListController({
      isItem: (item) => item.hasAttribute("md-list-item"),
      getPossibleItems: () => this.slotItems,
      isRtl: () => getComputedStyle(this).direction === "rtl",
      deactivateItem: (item) => {
        item.tabIndex = -1;
      },
      activateItem: (item) => {
        item.tabIndex = 0;
      },
      isNavigableKey: (key) => NAVIGABLE_KEY_SET.has(key),
      isActivatable: (item) => !item.disabled && item.type !== "text"
    });
    this.internals = polyfillElementInternalsAria(this, this.attachInternals());
    {
      this.internals.role = "list";
      this.addEventListener("keydown", this.listController.handleKeydown);
    }
  }
  render() {
    return x`
      <slot
          @deactivate-items=${this.listController.onDeactivateItems}
          @request-activation=${this.listController.onRequestActivation}
          @slotchange=${this.listController.onSlotchange}>
      </slot>
    `;
  }
  /**
   * Activates the next item in the list. If at the end of the list, the first
   * item will be activated.
   *
   * @return The activated list item or `null` if there are no items.
   */
  activateNextItem() {
    return this.listController.activateNextItem();
  }
  /**
   * Activates the previous item in the list. If at the start of the list, the
   * last item will be activated.
   *
   * @return The activated list item or `null` if there are no items.
   */
  activatePreviousItem() {
    return this.listController.activatePreviousItem();
  }
}
(() => {
  setupHostAria(List, { focusable: false });
})();
__decorate([
  l({ flatten: true })
], List.prototype, "slotItems", void 0);
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$2 = i`:host{background:var(--md-list-container-color, var(--md-sys-color-surface, #fef7ff));color:unset;display:flex;flex-direction:column;outline:none;padding:8px 0;position:relative}/*# sourceMappingURL=list-styles.css.map */
`;
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let MdList = class MdList2 extends List {
};
MdList.styles = [styles$2];
MdList = __decorate([
  e("md-list")
], MdList);
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$1 = i`@media(forced-colors: active){.disabled slot{color:GrayText}.list-item.disabled{color:GrayText;opacity:1}}/*# sourceMappingURL=forced-colors-styles.css.map */
`;
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class ListItemEl extends s {
  constructor() {
    super(...arguments);
    this.disabled = false;
    this.type = "text";
    this.isListItem = true;
    this.href = "";
    this.target = "";
  }
  get isDisabled() {
    return this.disabled && this.type !== "link";
  }
  willUpdate(changed) {
    if (this.href) {
      this.type = "link";
    }
    super.willUpdate(changed);
  }
  render() {
    return this.renderListItem(x`
      <md-item>
        <div slot="container">
          ${this.renderRipple()}
          ${this.renderFocusRing()}
        </div>
        <slot name="start" slot="start"></slot>
        <slot name="end" slot="end"></slot>
        ${this.renderBody()}
      </md-item>
    `);
  }
  /**
   * Renders the root list item.
   *
   * @param content the child content of the list item.
   */
  renderListItem(content) {
    const isAnchor = this.type === "link";
    let tag;
    switch (this.type) {
      case "link":
        tag = i$2`a`;
        break;
      case "button":
        tag = i$2`button`;
        break;
      default:
      case "text":
        tag = i$2`li`;
        break;
    }
    const isInteractive = this.type !== "text";
    const target = isAnchor && !!this.target ? this.target : A;
    return n$1`
      <${tag}
        id="item"
        tabindex="${this.isDisabled || !isInteractive ? -1 : 0}"
        ?disabled=${this.isDisabled}
        role="listitem"
        aria-selected=${this.ariaSelected || A}
        aria-checked=${this.ariaChecked || A}
        aria-expanded=${this.ariaExpanded || A}
        aria-haspopup=${this.ariaHasPopup || A}
        class="list-item ${o(this.getRenderClasses())}"
        href=${this.href || A}
        target=${target}
        @focus=${this.onFocus}
      >${content}</${tag}>
    `;
  }
  /**
   * Handles rendering of the ripple element.
   */
  renderRipple() {
    if (this.type === "text") {
      return A;
    }
    return x`
      <md-ripple
          part="ripple"
          for="item"
          ?disabled=${this.isDisabled}></md-ripple>`;
  }
  /**
   * Handles rendering of the focus ring.
   */
  renderFocusRing() {
    if (this.type === "text") {
      return A;
    }
    return x`
      <md-focus-ring
          @visibility-changed=${this.onFocusRingVisibilityChanged}
          part="focus-ring"
          for="item"
          inward></md-focus-ring>`;
  }
  onFocusRingVisibilityChanged(e2) {
  }
  /**
   * Classes applied to the list item root.
   */
  getRenderClasses() {
    return { "disabled": this.isDisabled };
  }
  /**
   * Handles rendering the headline and supporting text.
   */
  renderBody() {
    return x`
      <slot></slot>
      <slot name="overline" slot="overline"></slot>
      <slot name="headline" slot="headline"></slot>
      <slot name="supporting-text" slot="supporting-text"></slot>
      <slot name="trailing-supporting-text"
          slot="trailing-supporting-text"></slot>
    `;
  }
  onFocus() {
    if (this.tabIndex !== -1) {
      return;
    }
    this.dispatchEvent(createRequestActivationEvent());
  }
  focus() {
    var _a;
    (_a = this.listItemRoot) == null ? void 0 : _a.focus();
  }
}
(() => {
  requestUpdateOnAriaChange(ListItemEl);
})();
ListItemEl.shadowRootOptions = {
  ...s.shadowRootOptions,
  delegatesFocus: true
};
__decorate([
  n({ type: Boolean, reflect: true })
], ListItemEl.prototype, "disabled", void 0);
__decorate([
  n()
], ListItemEl.prototype, "type", void 0);
__decorate([
  n({ type: Boolean, attribute: "md-list-item", reflect: true })
], ListItemEl.prototype, "isListItem", void 0);
__decorate([
  n()
], ListItemEl.prototype, "href", void 0);
__decorate([
  n()
], ListItemEl.prototype, "target", void 0);
__decorate([
  i$1(".list-item")
], ListItemEl.prototype, "listItemRoot", void 0);
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles = i`:host{display:flex;--md-ripple-hover-color: var(--md-list-item-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-hover-opacity: var(--md-list-item-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-list-item-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-pressed-opacity: var(--md-list-item-pressed-state-layer-opacity, 0.12)}md-focus-ring{z-index:1;--md-focus-ring-shape: 8px}a,button,li{background:none;border:none;padding:0;margin:0;text-align:unset;text-decoration:none}.list-item{border-radius:inherit;display:flex;flex:1;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.list-item.interactive{cursor:pointer}.list-item.disabled{opacity:var(--md-list-item-disabled-opacity, 0.3);pointer-events:none}[slot=container]{pointer-events:none}md-ripple{border-radius:inherit}md-item{border-radius:inherit;flex:1;height:100%;color:var(--md-list-item-label-text-color, var(--md-sys-color-on-surface, #1d1b20));font-family:var(--md-list-item-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-list-item-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));line-height:var(--md-list-item-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));font-weight:var(--md-list-item-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));min-height:var(--md-list-item-one-line-container-height, 56px);padding-top:var(--md-list-item-top-space, 12px);padding-bottom:var(--md-list-item-bottom-space, 12px);padding-inline-start:var(--md-list-item-leading-space, 16px);padding-inline-end:var(--md-list-item-trailing-space, 16px)}md-item[multiline]{min-height:var(--md-list-item-two-line-container-height, 72px)}[slot=supporting-text]{color:var(--md-list-item-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-list-item-supporting-text-font, var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-list-item-supporting-text-size, var(--md-sys-typescale-body-medium-size, 0.875rem));line-height:var(--md-list-item-supporting-text-line-height, var(--md-sys-typescale-body-medium-line-height, 1.25rem));font-weight:var(--md-list-item-supporting-text-weight, var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400)))}[slot=trailing-supporting-text]{color:var(--md-list-item-trailing-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-list-item-trailing-supporting-text-font, var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-list-item-trailing-supporting-text-size, var(--md-sys-typescale-label-small-size, 0.6875rem));line-height:var(--md-list-item-trailing-supporting-text-line-height, var(--md-sys-typescale-label-small-line-height, 1rem));font-weight:var(--md-list-item-trailing-supporting-text-weight, var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500)))}:is([slot=start],[slot=end])::slotted(*){fill:currentColor}[slot=start]{color:var(--md-list-item-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}[slot=end]{color:var(--md-list-item-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}/*# sourceMappingURL=list-item-styles.css.map */
`;
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let MdListItem = class MdListItem2 extends ListItemEl {
};
MdListItem.styles = [styles, styles$1];
MdListItem = __decorate([
  e("md-list-item")
], MdListItem);
