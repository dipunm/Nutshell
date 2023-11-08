import { s as safe_not_equal, c as create_slot, u as update_slot_base, g as get_all_dirty_from_scope, a as get_slot_changes, n as noop, b as component_subscribe } from "../chunks/utils.08e12359.js";
import { b as element, s as space, f as claim_element, g as children, c as claim_space, d as detach, h as attr, u as toggle_class, i as insert_hydration, r as append_hydration, v as listen, w as get_svelte_dataset, x as set_custom_element_data, k as text, l as claim_text, y as destroy_each, e as empty } from "../chunks/scheduler.6906c812.js";
import { S as SvelteComponent, i as init, b as create_component, d as claim_component, m as mount_component, a as transition_in, t as transition_out, e as destroy_component, g as group_outros, c as check_outros } from "../chunks/index.f9624644.js";
import { l, o as o$1, _ as __decorate, n, s, i, e, a as setupHostAria, b as i$1, t, p as polyfillElementInternalsAria, x, c as o$2, A, E as EASING } from "../chunks/icon.8232ecae.js";
import "../chunks/elevation.7713943e.js";
import "../chunks/list-item.46dd92f9.js";
import { p as page } from "../chunks/stores.aeaee850.js";
import { b as base } from "../chunks/paths.d48b2615.js";
import { A as AppBar } from "../chunks/AppBar.287d37ee.js";
import { P as PortalTarget } from "../chunks/PortalTarget.b8bf6a9a.js";
import { p as portalActive } from "../chunks/index.6e691c29.js";
import { C as Card } from "../chunks/Card.29d8f6d9.js";
function ensure_array_like(array_like_or_iterator) {
  return (array_like_or_iterator == null ? void 0 : array_like_or_iterator.length) !== void 0 ? array_like_or_iterator : Array.from(array_like_or_iterator);
}
async function load({ params }) {
  return params;
}
const _layout = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  load
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function o(o2, n2, r) {
  let l$1, s2 = o2;
  return "object" == typeof o2 ? (s2 = o2.slot, l$1 = o2) : l$1 = { flatten: n2 }, r ? l({ slot: s2, flatten: n2, selector: r }) : o$1({ descriptor: (e2) => ({ get() {
    var e3, t2;
    const o3 = "slot" + (s2 ? `[name=${s2}]` : ":not([name])"), n3 = null === (e3 = this.renderRoot) || void 0 === e3 ? void 0 : e3.querySelector(o3);
    return null !== (t2 = null == n3 ? void 0 : n3.assignedNodes(l$1)) && void 0 !== t2 ? t2 : [];
  }, enumerable: true, configurable: true }) });
}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Divider extends s {
  constructor() {
    super(...arguments);
    this.inset = false;
    this.insetStart = false;
    this.insetEnd = false;
  }
}
__decorate([
  n({ type: Boolean, reflect: true })
], Divider.prototype, "inset", void 0);
__decorate([
  n({ type: Boolean, reflect: true, attribute: "inset-start" })
], Divider.prototype, "insetStart", void 0);
__decorate([
  n({ type: Boolean, reflect: true, attribute: "inset-end" })
], Divider.prototype, "insetEnd", void 0);
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$4 = i`:host{--_color: var(--md-divider-color, var(--md-sys-color-outline-variant, #cac4d0));--_thickness: var(--md-divider-thickness, 1px);box-sizing:border-box;color:var(--_color);display:flex;height:var(--_thickness);width:100%}:host([inset]),:host([inset-start]){padding-inline-start:16px}:host([inset]),:host([inset-end]){padding-inline-end:16px}:host::before{background:currentColor;content:"";height:100%;width:100%}@media(forced-colors: active){:host::before{background:CanvasText}}/*# sourceMappingURL=divider-styles.css.map */
`;
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let MdDivider = class MdDivider2 extends Divider {
};
MdDivider.styles = [styles$4];
MdDivider = __decorate([
  e("md-divider")
], MdDivider);
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
var _a;
const INDICATOR = Symbol("indicator");
const ANIMATE_INDICATOR = Symbol("animateIndicator");
class Tab extends s {
  /**
   * TODO(b/293476210): remove after migrating
   * @deprecated use `active`
   */
  get selected() {
    return this.active;
  }
  set selected(active) {
    this.active = active;
  }
  constructor() {
    super();
    this.active = false;
    this.hasIcon = false;
    this.iconOnly = false;
    this.fullWidthIndicator = false;
    this.internals = polyfillElementInternalsAria(this, this.attachInternals());
    {
      this.internals.role = "tab";
      this.addEventListener("keydown", this.handleKeydown.bind(this));
    }
  }
  render() {
    const indicator = x`<div class="indicator"></div>`;
    return x`
      <div class="button" role="presentation" @click=${this.handleContentClick}>
        <md-focus-ring part="focus-ring" inward
            .control=${this}></md-focus-ring>
        <md-elevation></md-elevation>
        <md-ripple .control=${this}></md-ripple>
        <div class="content ${o$2(this.getContentClasses())}"
            role="presentation">
          <slot name="icon" @slotchange=${this.handleIconSlotChange}></slot>
          <slot @slotchange=${this.handleSlotChange}></slot>
          ${this.fullWidthIndicator ? A : indicator}
        </div>
        ${this.fullWidthIndicator ? indicator : A}
      </div>`;
  }
  getContentClasses() {
    return {
      "has-icon": this.hasIcon,
      "has-label": !this.iconOnly
    };
  }
  updated() {
    this.internals.ariaSelected = String(this.active);
  }
  async handleKeydown(event) {
    await 0;
    if (event.defaultPrevented) {
      return;
    }
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      this.click();
    }
  }
  handleContentClick(event) {
    event.stopPropagation();
    this.click();
  }
  [(_a = INDICATOR, ANIMATE_INDICATOR)](previousTab) {
    if (!this[INDICATOR]) {
      return;
    }
    this[INDICATOR].getAnimations().forEach((a) => {
      a.cancel();
    });
    const frames = this.getKeyframes(previousTab);
    if (frames !== null) {
      this[INDICATOR].animate(frames, { duration: 250, easing: EASING.EMPHASIZED });
    }
  }
  getKeyframes(previousTab) {
    var _a2;
    const reduceMotion = shouldReduceMotion();
    if (!this.active) {
      return reduceMotion ? [{ "opacity": 1 }, { "transform": "none" }] : null;
    }
    const from = {};
    const fromRect = ((_a2 = previousTab[INDICATOR]) == null ? void 0 : _a2.getBoundingClientRect()) ?? {};
    const fromPos = fromRect.left;
    const fromExtent = fromRect.width;
    const toRect = this[INDICATOR].getBoundingClientRect();
    const toPos = toRect.left;
    const toExtent = toRect.width;
    const scale = fromExtent / toExtent;
    if (!reduceMotion && fromPos !== void 0 && toPos !== void 0 && !isNaN(scale)) {
      from["transform"] = `translateX(${(fromPos - toPos).toFixed(4)}px) scaleX(${scale.toFixed(4)})`;
    } else {
      from["opacity"] = 0;
    }
    return [from, { "transform": "none" }];
  }
  handleSlotChange() {
    this.iconOnly = false;
    for (const node of this.assignedDefaultNodes) {
      const hasTextContent = node.nodeType === Node.TEXT_NODE && !!node.wholeText.match(/\S/);
      if (node.nodeType === Node.ELEMENT_NODE || hasTextContent) {
        return;
      }
    }
    this.iconOnly = true;
  }
  handleIconSlotChange() {
    this.hasIcon = this.assignedIcons.length > 0;
  }
}
(() => {
  setupHostAria(Tab);
})();
__decorate([
  n({ type: Boolean, reflect: true })
], Tab.prototype, "active", void 0);
__decorate([
  n({ type: Boolean })
], Tab.prototype, "selected", null);
__decorate([
  n({ type: Boolean, attribute: "has-icon" })
], Tab.prototype, "hasIcon", void 0);
__decorate([
  n({ type: Boolean, attribute: "icon-only" })
], Tab.prototype, "iconOnly", void 0);
__decorate([
  i$1(".indicator")
], Tab.prototype, _a, void 0);
__decorate([
  t()
], Tab.prototype, "fullWidthIndicator", void 0);
__decorate([
  o({ flatten: true })
], Tab.prototype, "assignedDefaultNodes", void 0);
__decorate([
  l({ slot: "icon", flatten: true })
], Tab.prototype, "assignedIcons", void 0);
function shouldReduceMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Tabs extends s {
  /**
   * The tabs of this tab bar.
   */
  get tabs() {
    return this.maybeTabs.filter(isTab);
  }
  /**
   * The currently selected tab, `null` only when there are no tab children.
   */
  get activeTab() {
    return this.tabs.find((tab) => tab.active) ?? null;
  }
  set activeTab(tab) {
    if (tab) {
      this.activateTab(tab);
    }
  }
  /**
   * The index of the currently selected tab.
   */
  get activeTabIndex() {
    return this.tabs.findIndex((tab) => tab.active);
  }
  set activeTabIndex(index) {
    const activateTabAtIndex = () => {
      const tab = this.tabs[index];
      if (tab) {
        this.activateTab(tab);
      }
    };
    if (!this.slotElement) {
      this.updateComplete.then(activateTabAtIndex);
      return;
    }
    activateTabAtIndex();
  }
  get focusedTab() {
    return this.tabs.find((tab) => tab.matches(":focus-within"));
  }
  constructor() {
    super();
    this.autoActivate = false;
    this.internals = polyfillElementInternalsAria(this, this.attachInternals());
    {
      this.internals.role = "tablist";
      this.addEventListener("keydown", this.handleKeydown.bind(this));
      this.addEventListener("keyup", this.handleKeyup.bind(this));
      this.addEventListener("focusout", this.handleFocusout.bind(this));
    }
  }
  /**
   * Scrolls the toolbar, if overflowing, to the active tab, or the provided
   * tab.
   *
   * @param tabToScrollTo The tab that should be scrolled to. Defaults to the
   *     active tab.
   * @return A Promise that resolves after the tab has been scrolled to.
   */
  async scrollToTab(tabToScrollTo) {
    await this.updateComplete;
    const { tabs } = this;
    tabToScrollTo ?? (tabToScrollTo = this.activeTab);
    if (!tabToScrollTo || !tabs.includes(tabToScrollTo)) {
      return;
    }
    for (const tab of this.tabs) {
      await tab.updateComplete;
    }
    const offset = tabToScrollTo.offsetLeft;
    const extent = tabToScrollTo.offsetWidth;
    const scroll = this.scrollLeft;
    const hostExtent = this.offsetWidth;
    const scrollMargin = 48;
    const min = offset - scrollMargin;
    const max = offset + extent - hostExtent + scrollMargin;
    const to = Math.min(min, Math.max(max, scroll));
    const behavior = !this.focusedTab ? "smooth" : "instant";
    this.scrollTo({ behavior, top: 0, left: to });
  }
  render() {
    return x`
      <div class="tabs">
        <slot @slotchange=${this.handleSlotChange}
            @click=${this.handleTabClick}></slot>
      </div>
      <md-divider part="divider"></md-divider>
    `;
  }
  async handleTabClick(event) {
    const tab = event.target;
    await 0;
    if (event.defaultPrevented || !isTab(tab) || tab.active) {
      return;
    }
    this.activateTab(tab);
  }
  activateTab(activeTab) {
    const { tabs } = this;
    const previousTab = this.activeTab;
    if (!tabs.includes(activeTab) || previousTab === activeTab) {
      return;
    }
    for (const tab of tabs) {
      tab.active = tab === activeTab;
    }
    if (previousTab) {
      const defaultPrevented = !this.dispatchEvent(new Event("change", { bubbles: true, cancelable: true }));
      if (defaultPrevented) {
        for (const tab of tabs) {
          tab.active = tab === previousTab;
        }
        return;
      }
      activeTab[ANIMATE_INDICATOR](previousTab);
    }
    this.updateFocusableTab(activeTab);
    this.scrollToTab(activeTab);
  }
  updateFocusableTab(focusableTab) {
    for (const tab of this.tabs) {
      tab.tabIndex = tab === focusableTab ? 0 : -1;
    }
  }
  // focus item on keydown and optionally select it
  async handleKeydown(event) {
    await 0;
    const isLeft = event.key === "ArrowLeft";
    const isRight = event.key === "ArrowRight";
    const isHome = event.key === "Home";
    const isEnd = event.key === "End";
    if (event.defaultPrevented || !isLeft && !isRight && !isHome && !isEnd) {
      return;
    }
    const { tabs } = this;
    if (tabs.length < 2) {
      return;
    }
    event.preventDefault();
    let indexToFocus;
    if (isHome || isEnd) {
      indexToFocus = isHome ? 0 : tabs.length - 1;
    } else {
      const isRtl = getComputedStyle(this).direction === "rtl";
      const forwards = isRtl ? isLeft : isRight;
      const { focusedTab } = this;
      if (!focusedTab) {
        indexToFocus = forwards ? 0 : tabs.length - 1;
      } else {
        const focusedIndex = this.tabs.indexOf(focusedTab);
        indexToFocus = forwards ? focusedIndex + 1 : focusedIndex - 1;
        if (indexToFocus >= tabs.length) {
          indexToFocus = 0;
        } else if (indexToFocus < 0) {
          indexToFocus = tabs.length - 1;
        }
      }
    }
    const tabToFocus = tabs[indexToFocus];
    tabToFocus.focus();
    if (this.autoActivate) {
      this.activateTab(tabToFocus);
    } else {
      this.updateFocusableTab(tabToFocus);
    }
  }
  // scroll to item on keyup.
  handleKeyup() {
    this.scrollToTab(this.focusedTab ?? this.activeTab);
  }
  handleFocusout() {
    if (this.matches(":focus-within")) {
      return;
    }
    const { activeTab } = this;
    if (activeTab) {
      this.updateFocusableTab(activeTab);
    }
  }
  handleSlotChange() {
    const firstTab = this.tabs[0];
    if (!this.activeTab && firstTab) {
      this.activateTab(firstTab);
    }
    this.scrollToTab(this.activeTab);
  }
}
(() => {
  setupHostAria(Tabs, { focusable: false });
})();
__decorate([
  n({ type: Boolean, attribute: "auto-activate" })
], Tabs.prototype, "autoActivate", void 0);
__decorate([
  i$1("slot")
], Tabs.prototype, "slotElement", void 0);
__decorate([
  l({ flatten: true })
], Tabs.prototype, "maybeTabs", void 0);
function isTab(element2) {
  return element2 instanceof Tab;
}
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$3 = i`:host{box-sizing:border-box;display:flex;flex-direction:column;overflow:auto;scroll-behavior:smooth;scrollbar-width:none;position:relative}:host([hidden]){display:none}:host::-webkit-scrollbar{display:none}.tabs{align-items:end;display:flex;height:100%;overflow:inherit;justify-content:space-between;width:100%}::slotted(*){flex:1}::slotted([active]){z-index:1}/*# sourceMappingURL=tabs-styles.css.map */
`;
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let MdTabs = class MdTabs2 extends Tabs {
};
MdTabs.styles = [styles$3];
MdTabs = __decorate([
  e("md-tabs")
], MdTabs);
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class PrimaryTab extends Tab {
  constructor() {
    super(...arguments);
    this.inlineIcon = false;
  }
  getContentClasses() {
    return {
      ...super.getContentClasses(),
      "stacked": !this.inlineIcon
    };
  }
}
__decorate([
  n({ type: Boolean, attribute: "inline-icon" })
], PrimaryTab.prototype, "inlineIcon", void 0);
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$2 = i`:host{--_active-indicator-color: var(--md-primary-tab-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_active-indicator-height: var(--md-primary-tab-active-indicator-height, 3px);--_active-indicator-shape: var(--md-primary-tab-active-indicator-shape, 3px 3px 0px 0px);--_active-hover-state-layer-color: var(--md-primary-tab-active-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_active-hover-state-layer-opacity: var(--md-primary-tab-active-hover-state-layer-opacity, 0.08);--_active-pressed-state-layer-color: var(--md-primary-tab-active-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_active-pressed-state-layer-opacity: var(--md-primary-tab-active-pressed-state-layer-opacity, 0.12);--_container-color: var(--md-primary-tab-container-color, var(--md-sys-color-surface, #fef7ff));--_container-elevation: var(--md-primary-tab-container-elevation, 0);--_container-height: var(--md-primary-tab-container-height, 48px);--_container-shape: var(--md-primary-tab-container-shape, 0px);--_with-icon-and-label-text-container-height: var(--md-primary-tab-with-icon-and-label-text-container-height, 64px);--_hover-state-layer-color: var(--md-primary-tab-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-primary-tab-hover-state-layer-opacity, 0.08);--_pressed-state-layer-color: var(--md-primary-tab-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-primary-tab-pressed-state-layer-opacity, 0.12);--_active-focus-icon-color: var(--md-primary-tab-active-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_active-hover-icon-color: var(--md-primary-tab-active-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_active-icon-color: var(--md-primary-tab-active-icon-color, var(--md-sys-color-primary, #6750a4));--_active-pressed-icon-color: var(--md-primary-tab-active-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-primary-tab-icon-size, 24px);--_focus-icon-color: var(--md-primary-tab-focus-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-icon-color: var(--md-primary-tab-hover-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_icon-color: var(--md-primary-tab-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-icon-color: var(--md-primary-tab-pressed-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_label-text-font: var(--md-primary-tab-label-text-font, var(--md-sys-typescale-title-small-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-primary-tab-label-text-line-height, var(--md-sys-typescale-title-small-line-height, 1.25rem));--_label-text-size: var(--md-primary-tab-label-text-size, var(--md-sys-typescale-title-small-size, 0.875rem));--_label-text-weight: var(--md-primary-tab-label-text-weight, var(--md-sys-typescale-title-small-weight, var(--md-ref-typeface-weight-medium, 500)));--_active-focus-label-text-color: var(--md-primary-tab-active-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_active-hover-label-text-color: var(--md-primary-tab-active-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_active-label-text-color: var(--md-primary-tab-active-label-text-color, var(--md-sys-color-primary, #6750a4));--_active-pressed-label-text-color: var(--md-primary-tab-active-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-label-text-color: var(--md-primary-tab-focus-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-primary-tab-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_label-text-color: var(--md-primary-tab-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-label-text-color: var(--md-primary-tab-pressed-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_container-shape-start-start: var( --md-primary-tab-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-primary-tab-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-primary-tab-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-primary-tab-container-shape-end-start, var(--_container-shape) )}.content.stacked{flex-direction:column;gap:2px}.content.stacked.has-icon.has-label{height:var(--_with-icon-and-label-text-container-height)}/*# sourceMappingURL=primary-tab-styles.css.map */
`;
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$1 = i`:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);vertical-align:middle;user-select:none;--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}md-focus-ring{--md-focus-ring-shape: 8px}:host([active]) md-focus-ring{margin-bottom:calc(var(--_active-indicator-height) + 1px)}.button{box-sizing:border-box;display:inline-flex;align-items:center;justify-content:center;vertical-align:middle;width:100%;position:relative;padding:0 16px;margin:0;z-index:0;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);color:var(--_label-text-color)}.button::before{background:var(--_container-color);content:"";inset:0;position:absolute;z-index:-1}.button::before,md-ripple{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start)}.content{position:relative;box-sizing:border-box;display:inline-flex;flex-direction:row;align-items:center;justify-content:center;height:var(--_container-height);gap:8px}.indicator{position:absolute;box-sizing:border-box;z-index:-1;transform-origin:bottom left;background:var(--_active-indicator-color);border-radius:var(--_active-indicator-shape);height:var(--_active-indicator-height);inset:auto 0 0 0;opacity:0}.button ::slotted([slot=icon]){display:inline-flex;position:relative;writing-mode:horizontal-tb;fill:currentColor;color:var(--_icon-color);font-size:var(--_icon-size);width:var(--_icon-size);height:var(--_icon-size)}.button:hover{color:var(--_hover-label-text-color);cursor:pointer}.button:hover ::slotted([slot=icon]){color:var(--_hover-icon-color)}.button:focus{color:var(--_focus-label-text-color)}.button:focus ::slotted([slot=icon]){color:var(--_focus-icon-color)}.button:active{color:var(--_pressed-label-text-color);outline:none}.button:active ::slotted([slot=icon]){color:var(--_pressed-icon-color)}:host([active]) .indicator{opacity:1}:host([active]) .button{color:var(--_active-label-text-color);--md-elevation-level: var(--_container-elevation);--md-ripple-hover-color: var(--_active-hover-state-layer-color);--md-ripple-hover-opacity: var(--_active-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_active-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_active-pressed-state-layer-opacity)}:host([active]) .button ::slotted([slot=icon]){color:var(--_active-icon-color)}:host([active]) .button:hover{color:var(--_active-hover-label-text-color)}:host([active]) .button:hover ::slotted([slot=icon]){color:var(--_active-hover-icon-color)}:host([active]) .button:focus{color:var(--_active-focus-label-text-color)}:host([active]) .button:focus ::slotted([slot=icon]){color:var(--_active-focus-icon-color)}:host([active]) .button:active{color:var(--_active-pressed-label-text-color)}:host([active]) .button:active ::slotted([slot=icon]){color:var(--_active-pressed-icon-color)}:host,::slotted(*){white-space:nowrap}@media(forced-colors: active){.indicator{background:CanvasText}}/*# sourceMappingURL=tab-styles.css.map */
`;
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let MdPrimaryTab = class MdPrimaryTab2 extends PrimaryTab {
};
MdPrimaryTab.styles = [styles$1, styles$2];
MdPrimaryTab = __decorate([
  e("md-primary-tab")
], MdPrimaryTab);
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class SecondaryTab extends Tab {
  constructor() {
    super(...arguments);
    this.fullWidthIndicator = true;
  }
}
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles = i`:host{--_active-indicator-color: var(--md-secondary-tab-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_active-indicator-height: var(--md-secondary-tab-active-indicator-height, 2px);--_active-label-text-color: var(--md-secondary-tab-active-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_container-color: var(--md-secondary-tab-container-color, var(--md-sys-color-surface, #fef7ff));--_container-elevation: var(--md-secondary-tab-container-elevation, 0);--_container-height: var(--md-secondary-tab-container-height, 48px);--_container-shape: var(--md-secondary-tab-container-shape, 0px);--_focus-label-text-color: var(--md-secondary-tab-focus-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-secondary-tab-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-color: var(--md-secondary-tab-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-secondary-tab-hover-state-layer-opacity, 0.08);--_label-text-font: var(--md-secondary-tab-label-text-font, var(--md-sys-typescale-title-small-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-secondary-tab-label-text-line-height, var(--md-sys-typescale-title-small-line-height, 1.25rem));--_label-text-size: var(--md-secondary-tab-label-text-size, var(--md-sys-typescale-title-small-size, 0.875rem));--_label-text-weight: var(--md-secondary-tab-label-text-weight, var(--md-sys-typescale-title-small-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-label-text-color: var(--md-secondary-tab-pressed-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-state-layer-color: var(--md-secondary-tab-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-state-layer-opacity: var(--md-secondary-tab-pressed-state-layer-opacity, 0.12);--_active-focus-icon-color: var(--md-secondary-tab-active-focus-icon-color, );--_active-focus-label-text-color: var(--md-secondary-tab-active-focus-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_active-hover-icon-color: var(--md-secondary-tab-active-hover-icon-color, );--_active-hover-label-text-color: var(--md-secondary-tab-active-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_active-hover-state-layer-color: var(--md-secondary-tab-active-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_active-hover-state-layer-opacity: var(--md-secondary-tab-active-hover-state-layer-opacity, 0.08);--_active-icon-color: var(--md-secondary-tab-active-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_active-indicator-shape: var(--md-secondary-tab-active-indicator-shape, 0);--_active-pressed-icon-color: var(--md-secondary-tab-active-pressed-icon-color, );--_active-pressed-label-text-color: var(--md-secondary-tab-active-pressed-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_active-pressed-state-layer-color: var(--md-secondary-tab-active-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_active-pressed-state-layer-opacity: var(--md-secondary-tab-active-pressed-state-layer-opacity, 0.12);--_label-text-color: var(--md-secondary-tab-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-icon-color: var(--md-secondary-tab-focus-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-icon-color: var(--md-secondary-tab-hover-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_icon-size: var(--md-secondary-tab-icon-size, 24px);--_icon-color: var(--md-secondary-tab-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-icon-color: var(--md-secondary-tab-pressed-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_container-shape-start-start: var( --md-secondary-tab-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-secondary-tab-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-secondary-tab-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-secondary-tab-container-shape-end-start, var(--_container-shape) )}/*# sourceMappingURL=secondary-tab-styles.css.map */
`;
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let MdSecondaryTab = class MdSecondaryTab2 extends SecondaryTab {
};
MdSecondaryTab.styles = [styles$1, styles];
MdSecondaryTab = __decorate([
  e("md-secondary-tab")
], MdSecondaryTab);
const ListDetailMenu_svelte_svelte_type_style_lang = "";
const get_content_appbar_slot_changes = (dirty) => ({});
const get_content_appbar_slot_context = (ctx) => ({});
const get_content_appbar_start_slot_changes = (dirty) => ({});
const get_content_appbar_start_slot_context = (ctx) => ({});
const get_list_slot_changes = (dirty) => ({});
const get_list_slot_context = (ctx) => ({});
const get_list_headline_slot_changes = (dirty) => ({});
const get_list_headline_slot_context = (ctx) => ({});
const get_menu_slot_changes = (dirty) => ({});
const get_menu_slot_context = (ctx) => ({});
function create_default_slot_2(ctx) {
  let md_icon_button;
  let textContent = `<md-icon>close</md-icon>`;
  let mounted;
  let dispose;
  return {
    c() {
      md_icon_button = element("md-icon-button");
      md_icon_button.innerHTML = textContent;
    },
    l(nodes) {
      md_icon_button = claim_element(nodes, "MD-ICON-BUTTON", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(md_icon_button) !== "svelte-25t5ea")
        md_icon_button.innerHTML = textContent;
    },
    m(target, anchor) {
      insert_hydration(target, md_icon_button, anchor);
      if (!mounted) {
        dispose = listen(
          md_icon_button,
          "click",
          /*toggleMenu*/
          ctx[2]
        );
        mounted = true;
      }
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(md_icon_button);
      }
      mounted = false;
      dispose();
    }
  };
}
function create_default_slot_1$1(ctx) {
  let md_icon_button;
  let textContent = `<md-icon>menu</md-icon>`;
  let t1;
  let h1;
  let current;
  let mounted;
  let dispose;
  const list_headline_slot_template = (
    /*#slots*/
    ctx[3]["list-headline"]
  );
  const list_headline_slot = create_slot(
    list_headline_slot_template,
    ctx,
    /*$$scope*/
    ctx[4],
    get_list_headline_slot_context
  );
  return {
    c() {
      md_icon_button = element("md-icon-button");
      md_icon_button.innerHTML = textContent;
      t1 = space();
      h1 = element("h1");
      if (list_headline_slot)
        list_headline_slot.c();
      this.h();
    },
    l(nodes) {
      md_icon_button = claim_element(nodes, "MD-ICON-BUTTON", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(md_icon_button) !== "svelte-1wo83bt")
        md_icon_button.innerHTML = textContent;
      t1 = claim_space(nodes);
      h1 = claim_element(nodes, "H1", { class: true });
      var h1_nodes = children(h1);
      if (list_headline_slot)
        list_headline_slot.l(h1_nodes);
      h1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(h1, "class", "headline-medium svelte-myucxk");
    },
    m(target, anchor) {
      insert_hydration(target, md_icon_button, anchor);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, h1, anchor);
      if (list_headline_slot) {
        list_headline_slot.m(h1, null);
      }
      current = true;
      if (!mounted) {
        dispose = listen(
          md_icon_button,
          "click",
          /*toggleMenu*/
          ctx[2]
        );
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (list_headline_slot) {
        if (list_headline_slot.p && (!current || dirty & /*$$scope*/
        16)) {
          update_slot_base(
            list_headline_slot,
            list_headline_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[4],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[4]
            ) : get_slot_changes(
              list_headline_slot_template,
              /*$$scope*/
              ctx2[4],
              dirty,
              get_list_headline_slot_changes
            ),
            get_list_headline_slot_context
          );
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(list_headline_slot, local);
      current = true;
    },
    o(local) {
      transition_out(list_headline_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(md_icon_button);
        detach(t1);
        detach(h1);
      }
      if (list_headline_slot)
        list_headline_slot.d(detaching);
      mounted = false;
      dispose();
    }
  };
}
function create_default_slot$1(ctx) {
  let t0;
  let md_icon_button;
  let textContent = `<md-icon>arrow_back</md-icon>`;
  let t2;
  let current;
  const content_appbar_start_slot_template = (
    /*#slots*/
    ctx[3]["content-appbar-start"]
  );
  const content_appbar_start_slot = create_slot(
    content_appbar_start_slot_template,
    ctx,
    /*$$scope*/
    ctx[4],
    get_content_appbar_start_slot_context
  );
  const content_appbar_slot_template = (
    /*#slots*/
    ctx[3]["content-appbar"]
  );
  const content_appbar_slot = create_slot(
    content_appbar_slot_template,
    ctx,
    /*$$scope*/
    ctx[4],
    get_content_appbar_slot_context
  );
  return {
    c() {
      if (content_appbar_start_slot)
        content_appbar_start_slot.c();
      t0 = space();
      md_icon_button = element("md-icon-button");
      md_icon_button.innerHTML = textContent;
      t2 = space();
      if (content_appbar_slot)
        content_appbar_slot.c();
      this.h();
    },
    l(nodes) {
      if (content_appbar_start_slot)
        content_appbar_start_slot.l(nodes);
      t0 = claim_space(nodes);
      md_icon_button = claim_element(nodes, "MD-ICON-BUTTON", {
        class: true,
        href: true,
        ["data-svelte-h"]: true
      });
      if (get_svelte_dataset(md_icon_button) !== "svelte-ukxzln")
        md_icon_button.innerHTML = textContent;
      t2 = claim_space(nodes);
      if (content_appbar_slot)
        content_appbar_slot.l(nodes);
      this.h();
    },
    h() {
      set_custom_element_data(md_icon_button, "class", "backbutton");
      set_custom_element_data(md_icon_button, "href", "router:pop-stack");
    },
    m(target, anchor) {
      if (content_appbar_start_slot) {
        content_appbar_start_slot.m(target, anchor);
      }
      insert_hydration(target, t0, anchor);
      insert_hydration(target, md_icon_button, anchor);
      insert_hydration(target, t2, anchor);
      if (content_appbar_slot) {
        content_appbar_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (content_appbar_start_slot) {
        if (content_appbar_start_slot.p && (!current || dirty & /*$$scope*/
        16)) {
          update_slot_base(
            content_appbar_start_slot,
            content_appbar_start_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[4],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[4]
            ) : get_slot_changes(
              content_appbar_start_slot_template,
              /*$$scope*/
              ctx2[4],
              dirty,
              get_content_appbar_start_slot_changes
            ),
            get_content_appbar_start_slot_context
          );
        }
      }
      if (content_appbar_slot) {
        if (content_appbar_slot.p && (!current || dirty & /*$$scope*/
        16)) {
          update_slot_base(
            content_appbar_slot,
            content_appbar_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[4],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[4]
            ) : get_slot_changes(
              content_appbar_slot_template,
              /*$$scope*/
              ctx2[4],
              dirty,
              get_content_appbar_slot_changes
            ),
            get_content_appbar_slot_context
          );
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(content_appbar_start_slot, local);
      transition_in(content_appbar_slot, local);
      current = true;
    },
    o(local) {
      transition_out(content_appbar_start_slot, local);
      transition_out(content_appbar_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(t0);
        detach(md_icon_button);
        detach(t2);
      }
      if (content_appbar_start_slot)
        content_appbar_start_slot.d(detaching);
      if (content_appbar_slot)
        content_appbar_slot.d(detaching);
    }
  };
}
function create_fragment$1(ctx) {
  let div3;
  let div0;
  let appbar0;
  let t0;
  let t1;
  let div1;
  let t2;
  let div2;
  let appbar1;
  let t3;
  let t4;
  let section1;
  let section0;
  let appbar2;
  let t5;
  let current;
  let mounted;
  let dispose;
  appbar0 = new AppBar({
    props: {
      $$slots: { default: [create_default_slot_2] },
      $$scope: { ctx }
    }
  });
  const menu_slot_template = (
    /*#slots*/
    ctx[3].menu
  );
  const menu_slot = create_slot(
    menu_slot_template,
    ctx,
    /*$$scope*/
    ctx[4],
    get_menu_slot_context
  );
  appbar1 = new AppBar({
    props: {
      $$slots: { default: [create_default_slot_1$1] },
      $$scope: { ctx }
    }
  });
  const list_slot_template = (
    /*#slots*/
    ctx[3].list
  );
  const list_slot = create_slot(
    list_slot_template,
    ctx,
    /*$$scope*/
    ctx[4],
    get_list_slot_context
  );
  appbar2 = new AppBar({
    props: {
      $$slots: { default: [create_default_slot$1] },
      $$scope: { ctx }
    }
  });
  const default_slot_template = (
    /*#slots*/
    ctx[3].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[4],
    null
  );
  return {
    c() {
      div3 = element("div");
      div0 = element("div");
      create_component(appbar0.$$.fragment);
      t0 = space();
      if (menu_slot)
        menu_slot.c();
      t1 = space();
      div1 = element("div");
      t2 = space();
      div2 = element("div");
      create_component(appbar1.$$.fragment);
      t3 = space();
      if (list_slot)
        list_slot.c();
      t4 = space();
      section1 = element("section");
      section0 = element("section");
      create_component(appbar2.$$.fragment);
      t5 = space();
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      div3 = claim_element(nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      div0 = claim_element(div3_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      claim_component(appbar0.$$.fragment, div0_nodes);
      t0 = claim_space(div0_nodes);
      if (menu_slot)
        menu_slot.l(div0_nodes);
      div0_nodes.forEach(detach);
      t1 = claim_space(div3_nodes);
      div1 = claim_element(div3_nodes, "DIV", { class: true, role: true });
      children(div1).forEach(detach);
      t2 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      claim_component(appbar1.$$.fragment, div2_nodes);
      t3 = claim_space(div2_nodes);
      if (list_slot)
        list_slot.l(div2_nodes);
      div2_nodes.forEach(detach);
      t4 = claim_space(div3_nodes);
      section1 = claim_element(div3_nodes, "SECTION", { class: true });
      var section1_nodes = children(section1);
      section0 = claim_element(section1_nodes, "SECTION", { class: true });
      var section0_nodes = children(section0);
      claim_component(appbar2.$$.fragment, section0_nodes);
      section0_nodes.forEach(detach);
      t5 = claim_space(section1_nodes);
      if (default_slot)
        default_slot.l(section1_nodes);
      section1_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "menu svelte-myucxk");
      toggle_class(
        div0,
        "active",
        /*menuOpen*/
        ctx[1]
      );
      attr(div1, "class", "menu-backdrop svelte-myucxk");
      attr(div1, "role", "presentation");
      attr(div2, "class", "list-container svelte-myucxk");
      attr(section0, "class", "nav svelte-myucxk");
      attr(section1, "class", "content-container svelte-myucxk");
      attr(div3, "class", "layout-container svelte-myucxk");
      toggle_class(
        div3,
        "active",
        /*contentActive*/
        ctx[0]
      );
    },
    m(target, anchor) {
      insert_hydration(target, div3, anchor);
      append_hydration(div3, div0);
      mount_component(appbar0, div0, null);
      append_hydration(div0, t0);
      if (menu_slot) {
        menu_slot.m(div0, null);
      }
      append_hydration(div3, t1);
      append_hydration(div3, div1);
      append_hydration(div3, t2);
      append_hydration(div3, div2);
      mount_component(appbar1, div2, null);
      append_hydration(div2, t3);
      if (list_slot) {
        list_slot.m(div2, null);
      }
      append_hydration(div3, t4);
      append_hydration(div3, section1);
      append_hydration(section1, section0);
      mount_component(appbar2, section0, null);
      append_hydration(section1, t5);
      if (default_slot) {
        default_slot.m(section1, null);
      }
      current = true;
      if (!mounted) {
        dispose = listen(
          div1,
          "click",
          /*toggleMenu*/
          ctx[2]
        );
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      const appbar0_changes = {};
      if (dirty & /*$$scope*/
      16) {
        appbar0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      appbar0.$set(appbar0_changes);
      if (menu_slot) {
        if (menu_slot.p && (!current || dirty & /*$$scope*/
        16)) {
          update_slot_base(
            menu_slot,
            menu_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[4],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[4]
            ) : get_slot_changes(
              menu_slot_template,
              /*$$scope*/
              ctx2[4],
              dirty,
              get_menu_slot_changes
            ),
            get_menu_slot_context
          );
        }
      }
      if (!current || dirty & /*menuOpen*/
      2) {
        toggle_class(
          div0,
          "active",
          /*menuOpen*/
          ctx2[1]
        );
      }
      const appbar1_changes = {};
      if (dirty & /*$$scope*/
      16) {
        appbar1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      appbar1.$set(appbar1_changes);
      if (list_slot) {
        if (list_slot.p && (!current || dirty & /*$$scope*/
        16)) {
          update_slot_base(
            list_slot,
            list_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[4],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[4]
            ) : get_slot_changes(
              list_slot_template,
              /*$$scope*/
              ctx2[4],
              dirty,
              get_list_slot_changes
            ),
            get_list_slot_context
          );
        }
      }
      const appbar2_changes = {};
      if (dirty & /*$$scope*/
      16) {
        appbar2_changes.$$scope = { dirty, ctx: ctx2 };
      }
      appbar2.$set(appbar2_changes);
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        16)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[4],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[4]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[4],
              dirty,
              null
            ),
            null
          );
        }
      }
      if (!current || dirty & /*contentActive*/
      1) {
        toggle_class(
          div3,
          "active",
          /*contentActive*/
          ctx2[0]
        );
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(appbar0.$$.fragment, local);
      transition_in(menu_slot, local);
      transition_in(appbar1.$$.fragment, local);
      transition_in(list_slot, local);
      transition_in(appbar2.$$.fragment, local);
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(appbar0.$$.fragment, local);
      transition_out(menu_slot, local);
      transition_out(appbar1.$$.fragment, local);
      transition_out(list_slot, local);
      transition_out(appbar2.$$.fragment, local);
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(div3);
      }
      destroy_component(appbar0);
      if (menu_slot)
        menu_slot.d(detaching);
      destroy_component(appbar1);
      if (list_slot)
        list_slot.d(detaching);
      destroy_component(appbar2);
      if (default_slot)
        default_slot.d(detaching);
      mounted = false;
      dispose();
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { contentActive = false } = $$props;
  let menuOpen = false;
  function toggleMenu() {
    $$invalidate(1, menuOpen = !menuOpen);
  }
  $$self.$$set = ($$props2) => {
    if ("contentActive" in $$props2)
      $$invalidate(0, contentActive = $$props2.contentActive);
    if ("$$scope" in $$props2)
      $$invalidate(4, $$scope = $$props2.$$scope);
  };
  return [contentActive, menuOpen, toggleMenu, slots, $$scope];
}
class ListDetailMenu extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, { contentActive: 0 });
  }
}
const _layout_svelte_svelte_type_style_lang = "";
function get_each_context(ctx, list, i2) {
  const child_ctx = ctx.slice();
  child_ctx[8] = list[i2];
  return child_ctx;
}
function create_default_slot_1(ctx) {
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[6].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[7],
    null
  );
  return {
    c() {
      if (default_slot)
        default_slot.c();
    },
    l(nodes) {
      if (default_slot)
        default_slot.l(nodes);
    },
    m(target, anchor) {
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        128)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[7],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[7]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[7],
              dirty,
              null
            ),
            null
          );
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function create_list_headline_slot(ctx) {
  let t2;
  return {
    c() {
      t2 = text("Wallets");
    },
    l(nodes) {
      t2 = claim_text(nodes, "Wallets");
    },
    m(target, anchor) {
      insert_hydration(target, t2, anchor);
    },
    d(detaching) {
      if (detaching) {
        detach(t2);
      }
    }
  };
}
function create_menu_slot(ctx) {
  let md_list;
  let textContent = `<md-list-item type="button"><md-icon slot="start">book</md-icon> 
                Discover
                <div slot="supporting-text">Learn how to protect your funds through the power of Bitcoin.</div></md-list-item> <md-list-item type="button"><md-icon slot="start">account_balance</md-icon> Wallets
                <div slot="supporting-text">Manage your counterparties, check your balance, spend and receive.</div></md-list-item> <md-list-item type="button" disabled=""><md-icon slot="start">settings</md-icon> Other
                <div slot="supporting-text">Undecided, configure something maybe?</div></md-list-item>`;
  return {
    c() {
      md_list = element("md-list");
      md_list.innerHTML = textContent;
    },
    l(nodes) {
      md_list = claim_element(nodes, "MD-LIST", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(md_list) !== "svelte-aw2lso")
        md_list.innerHTML = textContent;
    },
    m(target, anchor) {
      insert_hydration(target, md_list, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(md_list);
      }
    }
  };
}
function create_default_slot(ctx) {
  let div;
  let h2;
  let t0;
  let t1;
  let t2;
  let p;
  let textContent = "0.00001033 BTC";
  return {
    c() {
      div = element("div");
      h2 = element("h2");
      t0 = text("Unnamed Wallet 0");
      t1 = text(
        /*id*/
        ctx[8]
      );
      t2 = space();
      p = element("p");
      p.textContent = textContent;
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      h2 = claim_element(div_nodes, "H2", { class: true });
      var h2_nodes = children(h2);
      t0 = claim_text(h2_nodes, "Unnamed Wallet 0");
      t1 = claim_text(
        h2_nodes,
        /*id*/
        ctx[8]
      );
      h2_nodes.forEach(detach);
      t2 = claim_space(div_nodes);
      p = claim_element(div_nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p) !== "svelte-fqfbpe")
        p.textContent = textContent;
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(h2, "class", "title-large");
      attr(div, "class", "wallet-item-inner svelte-c1hm0t");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, h2);
      append_hydration(h2, t0);
      append_hydration(h2, t1);
      append_hydration(div, t2);
      append_hydration(div, p);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(div);
      }
    }
  };
}
function create_each_block(ctx) {
  let li;
  let card;
  let t2;
  let current;
  card = new Card({
    props: {
      href: `${base}/accounts/${/*id*/
      ctx[8]}`,
      color: (
        /*id*/
        ctx[8] === /*accountId*/
        ctx[0] ? "surface-container-highest" : "surface-container"
      ),
      borderRadius: ".75rem",
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      li = element("li");
      create_component(card.$$.fragment);
      t2 = space();
      this.h();
    },
    l(nodes) {
      li = claim_element(nodes, "LI", { class: true });
      var li_nodes = children(li);
      claim_component(card.$$.fragment, li_nodes);
      t2 = claim_space(li_nodes);
      li_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(li, "class", "wallet-item svelte-c1hm0t");
    },
    m(target, anchor) {
      insert_hydration(target, li, anchor);
      mount_component(card, li, null);
      append_hydration(li, t2);
      current = true;
    },
    p(ctx2, dirty) {
      const card_changes = {};
      if (dirty & /*accountId*/
      1)
        card_changes.color = /*id*/
        ctx2[8] === /*accountId*/
        ctx2[0] ? "surface-container-highest" : "surface-container";
      if (dirty & /*$$scope*/
      128) {
        card_changes.$$scope = { dirty, ctx: ctx2 };
      }
      card.$set(card_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(card.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(card.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(li);
      }
      destroy_component(card);
    }
  };
}
function create_list_slot(ctx) {
  let ul;
  let current;
  let each_value = ensure_array_like(["1", "2"]);
  let each_blocks = [];
  for (let i2 = 0; i2 < 2; i2 += 1) {
    each_blocks[i2] = create_each_block(get_each_context(ctx, each_value, i2));
  }
  const out = (i2) => transition_out(each_blocks[i2], 1, 1, () => {
    each_blocks[i2] = null;
  });
  return {
    c() {
      ul = element("ul");
      for (let i2 = 0; i2 < 2; i2 += 1) {
        each_blocks[i2].c();
      }
    },
    l(nodes) {
      ul = claim_element(nodes, "UL", {});
      var ul_nodes = children(ul);
      for (let i2 = 0; i2 < 2; i2 += 1) {
        each_blocks[i2].l(ul_nodes);
      }
      ul_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, ul, anchor);
      for (let i2 = 0; i2 < 2; i2 += 1) {
        if (each_blocks[i2]) {
          each_blocks[i2].m(ul, null);
        }
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & /*accountId*/
      1) {
        each_value = ensure_array_like(["1", "2"]);
        let i2;
        for (i2 = 0; i2 < 2; i2 += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i2);
          if (each_blocks[i2]) {
            each_blocks[i2].p(child_ctx, dirty);
            transition_in(each_blocks[i2], 1);
          } else {
            each_blocks[i2] = create_each_block(child_ctx);
            each_blocks[i2].c();
            transition_in(each_blocks[i2], 1);
            each_blocks[i2].m(ul, null);
          }
        }
        group_outros();
        for (i2 = 2; i2 < 2; i2 += 1) {
          out(i2);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i2 = 0; i2 < 2; i2 += 1) {
        transition_in(each_blocks[i2]);
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i2 = 0; i2 < 2; i2 += 1) {
        transition_out(each_blocks[i2]);
      }
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(ul);
      }
      destroy_each(each_blocks, detaching);
    }
  };
}
function create_if_block(ctx) {
  let portaltarget;
  let current;
  portaltarget = new PortalTarget({ props: { name: "content-appbar-start" } });
  return {
    c() {
      create_component(portaltarget.$$.fragment);
    },
    l(nodes) {
      claim_component(portaltarget.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(portaltarget, target, anchor);
      current = true;
    },
    i(local) {
      if (current)
        return;
      transition_in(portaltarget.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(portaltarget.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(portaltarget, detaching);
    }
  };
}
function create_content_appbar_start_slot(ctx) {
  let if_block_anchor;
  let current;
  let if_block = (
    /*$contentAppbarStartActive*/
    ctx[2] && create_if_block()
  );
  return {
    c() {
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if (if_block)
        if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (
        /*$contentAppbarStartActive*/
        ctx2[2]
      ) {
        if (if_block) {
          if (dirty & /*$contentAppbarStartActive*/
          4) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block();
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(if_block_anchor);
      }
      if (if_block)
        if_block.d(detaching);
    }
  };
}
function create_content_appbar_slot(ctx) {
  let portaltarget;
  let current;
  portaltarget = new PortalTarget({ props: { name: "content-appbar" } });
  return {
    c() {
      create_component(portaltarget.$$.fragment);
    },
    l(nodes) {
      claim_component(portaltarget.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(portaltarget, target, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(portaltarget.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(portaltarget.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(portaltarget, detaching);
    }
  };
}
function create_fragment(ctx) {
  let listdetailmenu;
  let current;
  listdetailmenu = new ListDetailMenu({
    props: {
      contentActive: (
        /*contentActive*/
        ctx[1]
      ),
      $$slots: {
        "content-appbar": [create_content_appbar_slot],
        "content-appbar-start": [create_content_appbar_start_slot],
        list: [create_list_slot],
        menu: [create_menu_slot],
        "list-headline": [create_list_headline_slot],
        default: [create_default_slot_1]
      },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(listdetailmenu.$$.fragment);
    },
    l(nodes) {
      claim_component(listdetailmenu.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(listdetailmenu, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const listdetailmenu_changes = {};
      if (dirty & /*contentActive*/
      2)
        listdetailmenu_changes.contentActive = /*contentActive*/
        ctx2[1];
      if (dirty & /*$$scope, $contentAppbarStartActive, accountId*/
      133) {
        listdetailmenu_changes.$$scope = { dirty, ctx: ctx2 };
      }
      listdetailmenu.$set(listdetailmenu_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(listdetailmenu.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(listdetailmenu.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(listdetailmenu, detaching);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let accountId;
  let contentActive;
  let $page;
  let $contentAppbarStartActive;
  component_subscribe($$self, page, ($$value) => $$invalidate(5, $page = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  let { data } = $$props;
  let contentAppbarStartActive = portalActive("content-appbar-start");
  component_subscribe($$self, contentAppbarStartActive, (value) => $$invalidate(2, $contentAppbarStartActive = value));
  $$self.$$set = ($$props2) => {
    if ("data" in $$props2)
      $$invalidate(4, data = $$props2.data);
    if ("$$scope" in $$props2)
      $$invalidate(7, $$scope = $$props2.$$scope);
  };
  $$self.$$.update = () => {
    var _a2;
    if ($$self.$$.dirty & /*data, $page*/
    48) {
      $$invalidate(0, accountId = (data == null ? void 0 : data.id) ?? ((_a2 = $page.params) == null ? void 0 : _a2.id));
    }
    if ($$self.$$.dirty & /*accountId*/
    1) {
      $$invalidate(1, contentActive = typeof accountId !== "undefined");
    }
  };
  return [
    accountId,
    contentActive,
    $contentAppbarStartActive,
    contentAppbarStartActive,
    data,
    $page,
    slots,
    $$scope
  ];
}
class Layout extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { data: 4 });
  }
}
export {
  Layout as component,
  _layout as universal
};
