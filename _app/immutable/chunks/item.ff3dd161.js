import { o, _ as __decorate, n, s, x, i, e as e$1 } from "./icon.8232ecae.js";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function e(e2) {
  return o({ descriptor: (r) => ({ get() {
    var r2, o2;
    return null !== (o2 = null === (r2 = this.renderRoot) || void 0 === r2 ? void 0 : r2.querySelectorAll(e2)) && void 0 !== o2 ? o2 : [];
  }, enumerable: true, configurable: true }) });
}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function activateFirstItem(items, isActivatable = isItemNotDisabled) {
  const firstItem = getFirstActivatableItem(items, isActivatable);
  if (firstItem) {
    firstItem.tabIndex = 0;
    firstItem.focus();
  }
  return firstItem;
}
function activateLastItem(items, isActivatable = isItemNotDisabled) {
  const lastItem = getLastActivatableItem(items, isActivatable);
  if (lastItem) {
    lastItem.tabIndex = 0;
    lastItem.focus();
  }
  return lastItem;
}
function getActiveItem(items, isActivatable = isItemNotDisabled) {
  for (let i2 = 0; i2 < items.length; i2++) {
    const item = items[i2];
    if (item.tabIndex === 0 && isActivatable(item)) {
      return {
        item,
        index: i2
      };
    }
  }
  return null;
}
function getFirstActivatableItem(items, isActivatable = isItemNotDisabled) {
  for (const item of items) {
    if (isActivatable(item)) {
      return item;
    }
  }
  return null;
}
function getLastActivatableItem(items, isActivatable = isItemNotDisabled) {
  for (let i2 = items.length - 1; i2 >= 0; i2--) {
    const item = items[i2];
    if (isActivatable(item)) {
      return item;
    }
  }
  return null;
}
function getNextItem(items, index, isActivatable = isItemNotDisabled) {
  for (let i2 = 1; i2 < items.length; i2++) {
    const nextIndex = (i2 + index) % items.length;
    const item = items[nextIndex];
    if (isActivatable(item)) {
      return item;
    }
  }
  return items[index] ? items[index] : null;
}
function getPrevItem(items, index, isActivatable = isItemNotDisabled) {
  for (let i2 = 1; i2 < items.length; i2++) {
    const prevIndex = (index - i2 + items.length) % items.length;
    const item = items[prevIndex];
    if (isActivatable(item)) {
      return item;
    }
  }
  return items[index] ? items[index] : null;
}
function activateNextItem(items, activeItemRecord, isActivatable = isItemNotDisabled) {
  if (activeItemRecord) {
    const next = getNextItem(items, activeItemRecord.index, isActivatable);
    if (next) {
      next.tabIndex = 0;
      next.focus();
    }
    return next;
  } else {
    return activateFirstItem(items, isActivatable);
  }
}
function activatePreviousItem(items, activeItemRecord, isActivatable = isItemNotDisabled) {
  if (activeItemRecord) {
    const prev = getPrevItem(items, activeItemRecord.index, isActivatable);
    if (prev) {
      prev.tabIndex = 0;
      prev.focus();
    }
    return prev;
  } else {
    return activateLastItem(items, isActivatable);
  }
}
function createRequestActivationEvent() {
  return new Event("request-activation", { bubbles: true, composed: true });
}
function isItemNotDisabled(item) {
  return !item.disabled;
}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const NavigableKeys = {
  ArrowDown: "ArrowDown",
  ArrowLeft: "ArrowLeft",
  ArrowUp: "ArrowUp",
  ArrowRight: "ArrowRight",
  Home: "Home",
  End: "End"
};
class ListController {
  constructor(config) {
    this.handleKeydown = (event) => {
      const key = event.key;
      if (event.defaultPrevented || !this.isNavigableKey(key)) {
        return;
      }
      const items = this.items;
      if (!items.length) {
        return;
      }
      const activeItemRecord = getActiveItem(items, this.isActivatable);
      if (activeItemRecord) {
        activeItemRecord.item.tabIndex = -1;
      }
      event.preventDefault();
      const isRtl2 = this.isRtl();
      const inlinePrevious = isRtl2 ? NavigableKeys.ArrowRight : NavigableKeys.ArrowLeft;
      const inlineNext = isRtl2 ? NavigableKeys.ArrowLeft : NavigableKeys.ArrowRight;
      switch (key) {
        case NavigableKeys.ArrowDown:
        case inlineNext:
          activateNextItem(items, activeItemRecord, this.isActivatable);
          break;
        case NavigableKeys.ArrowUp:
        case inlinePrevious:
          activatePreviousItem(items, activeItemRecord, this.isActivatable);
          break;
        case NavigableKeys.Home:
          activateFirstItem(items, this.isActivatable);
          break;
        case NavigableKeys.End:
          activateLastItem(items, this.isActivatable);
          break;
      }
    };
    this.onDeactivateItems = () => {
      const items = this.items;
      for (const item of items) {
        this.deactivateItem(item);
      }
    };
    this.onRequestActivation = (event) => {
      this.onDeactivateItems();
      const target = event.target;
      this.activateItem(target);
      target.focus();
    };
    this.onSlotchange = () => {
      const items = this.items;
      let encounteredActivated = false;
      for (const item of items) {
        const isActivated = !item.disabled && item.tabIndex > -1;
        if (isActivated && !encounteredActivated) {
          encounteredActivated = true;
          item.tabIndex = 0;
          continue;
        }
        item.tabIndex = -1;
      }
      if (encounteredActivated) {
        return;
      }
      const firstActivatableItem = getFirstActivatableItem(items, this.isActivatable);
      if (!firstActivatableItem) {
        return;
      }
      firstActivatableItem.tabIndex = 0;
    };
    const { isItem, getPossibleItems, isRtl, deactivateItem, activateItem, isNavigableKey, isActivatable } = config;
    this.isItem = isItem;
    this.getPossibleItems = getPossibleItems;
    this.isRtl = isRtl;
    this.deactivateItem = deactivateItem;
    this.activateItem = activateItem;
    this.isNavigableKey = isNavigableKey;
    this.isActivatable = isActivatable;
  }
  /**
   * The items being managed by the list. Additionally, attempts to see if the
   * object has a sub-item in the `.item` property.
   */
  get items() {
    const maybeItems = this.getPossibleItems();
    const items = [];
    for (const itemOrParent of maybeItems) {
      const isItem = this.isItem(itemOrParent);
      if (isItem) {
        items.push(itemOrParent);
        continue;
      }
      const subItem = itemOrParent.item;
      if (subItem && this.isItem(subItem)) {
        items.push(subItem);
      }
    }
    return items;
  }
  /**
   * Activates the next item in the list. If at the end of the list, the first
   * item will be activated.
   *
   * @return The activated list item or `null` if there are no items.
   */
  activateNextItem() {
    const items = this.items;
    const activeItemRecord = getActiveItem(items, this.isActivatable);
    if (activeItemRecord) {
      activeItemRecord.item.tabIndex = -1;
    }
    return activateNextItem(items, activeItemRecord, this.isActivatable);
  }
  /**
   * Activates the previous item in the list. If at the start of the list, the
   * last item will be activated.
   *
   * @return The activated list item or `null` if there are no items.
   */
  activatePreviousItem() {
    const items = this.items;
    const activeItemRecord = getActiveItem(items, this.isActivatable);
    if (activeItemRecord) {
      activeItemRecord.item.tabIndex = -1;
    }
    return activatePreviousItem(items, activeItemRecord, this.isActivatable);
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Item extends s {
  constructor() {
    super(...arguments);
    this.multiline = false;
  }
  render() {
    return x`
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
    `;
  }
  handleTextSlotChange() {
    let isMultiline = false;
    let slotsWithContent = 0;
    for (const slot of this.textSlots) {
      if (slotHasContent(slot)) {
        slotsWithContent += 1;
      }
      if (slotsWithContent > 1) {
        isMultiline = true;
        break;
      }
    }
    this.multiline = isMultiline;
  }
}
__decorate([
  n({ type: Boolean, reflect: true })
], Item.prototype, "multiline", void 0);
__decorate([
  e(".text slot")
], Item.prototype, "textSlots", void 0);
function slotHasContent(slot) {
  var _a;
  for (const node of slot.assignedNodes({ flatten: true })) {
    const isElement = node.nodeType === Node.ELEMENT_NODE;
    const isTextWithContent = node.nodeType === Node.TEXT_NODE && ((_a = node.textContent) == null ? void 0 : _a.match(/\S/));
    if (isElement || isTextWithContent) {
      return true;
    }
  }
  return false;
}
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles = i`:host{color:var(--md-sys-color-on-surface, #1d1b20);font-family:var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-body-large-size, 1rem);font-weight:var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400));line-height:var(--md-sys-typescale-body-large-line-height, 1.5rem);align-items:center;box-sizing:border-box;display:flex;gap:16px;min-height:56px;overflow:hidden;padding:12px 16px;position:relative;text-overflow:ellipsis}:host([multiline]){min-height:72px}[name=overline]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-label-small-size, 0.6875rem);font-weight:var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500));line-height:var(--md-sys-typescale-label-small-line-height, 1rem)}[name=supporting-text]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-body-medium-size, 0.875rem);font-weight:var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400));line-height:var(--md-sys-typescale-body-medium-line-height, 1.25rem)}[name=trailing-supporting-text]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-label-small-size, 0.6875rem);font-weight:var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500));line-height:var(--md-sys-typescale-label-small-line-height, 1rem)}[name=container]::slotted(*){inset:0;position:absolute}.default-slot{display:inline}.default-slot,::slotted(*){overflow:hidden;text-overflow:ellipsis}.text{display:flex;flex:1;flex-direction:column;overflow:hidden}/*# sourceMappingURL=item-styles.css.map */
`;
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let MdItem = class MdItem2 extends Item {
};
MdItem.styles = [styles];
MdItem = __decorate([
  e$1("md-item")
], MdItem);
export {
  ListController as L,
  NavigableKeys as N,
  getLastActivatableItem as a,
  getFirstActivatableItem as b,
  createRequestActivationEvent as c,
  getActiveItem as g
};
