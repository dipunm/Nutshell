import { s as safe_not_equal, c as create_slot, u as update_slot_base, g as get_all_dirty_from_scope, a as get_slot_changes, n as noop, e as compute_slots, b as component_subscribe } from "../chunks/utils.08e12359.js";
import { b as element, s as space, f as claim_element, g as children, c as claim_space, d as detach, h as attr, i as insert_hydration, r as append_hydration, w as get_svelte_dataset, v as listen, A as createEventDispatcher, e as empty, n as binding_callbacks, x as set_custom_element_data, k as text, l as claim_text, j as set_style } from "../chunks/scheduler.6906c812.js";
import { S as SvelteComponent, i as init, b as create_component, d as claim_component, m as mount_component, a as transition_in, t as transition_out, e as destroy_component, g as group_outros, c as check_outros } from "../chunks/index.f9624644.js";
import { e as base } from "../chunks/singletons.1665cd5b.js";
import { B as Button, s as styles$1, a as styles$2 } from "../chunks/filled-button.7c9e55d4.js";
import "../chunks/icon.ebc2319f.js";
import { C as Card } from "../chunks/Card.8779831c.js";
import { A as AppBar } from "../chunks/AppBar.287d37ee.js";
import { P as Portal } from "../chunks/Portal.e01d24b0.js";
import { x, i, _ as __decorate, e } from "../chunks/form-submitter.5b8d9ddf.js";
import "../chunks/elevation.b359ddc5.js";
import "../chunks/list-item.cb4e9d2c.js";
import { s as stackPopUrl, c as stackBack } from "../chunks/index.767268c6.js";
import { a as afterNavigate } from "../chunks/navigation.b174fbe4.js";
import { p as page } from "../chunks/stores.554c67fa.js";
const SinglePane_svelte_svelte_type_style_lang = "";
const get_appbar_slot_changes = (dirty) => ({});
const get_appbar_slot_context = (ctx) => ({});
function create_default_slot$3(ctx) {
  let current;
  const appbar_slot_template = (
    /*#slots*/
    ctx[0].appbar
  );
  const appbar_slot = create_slot(
    appbar_slot_template,
    ctx,
    /*$$scope*/
    ctx[1],
    get_appbar_slot_context
  );
  return {
    c() {
      if (appbar_slot)
        appbar_slot.c();
    },
    l(nodes) {
      if (appbar_slot)
        appbar_slot.l(nodes);
    },
    m(target, anchor) {
      if (appbar_slot) {
        appbar_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (appbar_slot) {
        if (appbar_slot.p && (!current || dirty & /*$$scope*/
        2)) {
          update_slot_base(
            appbar_slot,
            appbar_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[1],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[1]
            ) : get_slot_changes(
              appbar_slot_template,
              /*$$scope*/
              ctx2[1],
              dirty,
              get_appbar_slot_changes
            ),
            get_appbar_slot_context
          );
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(appbar_slot, local);
      current = true;
    },
    o(local) {
      transition_out(appbar_slot, local);
      current = false;
    },
    d(detaching) {
      if (appbar_slot)
        appbar_slot.d(detaching);
    }
  };
}
function create_fragment$5(ctx) {
  let div;
  let appbar;
  let t;
  let current;
  appbar = new AppBar({
    props: {
      $$slots: { default: [create_default_slot$3] },
      $$scope: { ctx }
    }
  });
  const default_slot_template = (
    /*#slots*/
    ctx[0].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[1],
    null
  );
  return {
    c() {
      div = element("div");
      create_component(appbar.$$.fragment);
      t = space();
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(appbar.$$.fragment, div_nodes);
      t = claim_space(div_nodes);
      if (default_slot)
        default_slot.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "container svelte-118b27y");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      mount_component(appbar, div, null);
      append_hydration(div, t);
      if (default_slot) {
        default_slot.m(div, null);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      const appbar_changes = {};
      if (dirty & /*$$scope*/
      2) {
        appbar_changes.$$scope = { dirty, ctx: ctx2 };
      }
      appbar.$set(appbar_changes);
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        2)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[1],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[1]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[1],
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
      transition_in(appbar.$$.fragment, local);
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(appbar.$$.fragment, local);
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(div);
      }
      destroy_component(appbar);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function instance$2($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  $$self.$$set = ($$props2) => {
    if ("$$scope" in $$props2)
      $$invalidate(1, $$scope = $$props2.$$scope);
  };
  return [slots, $$scope];
}
class SinglePane extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$5, safe_not_equal, {});
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class FilledTonalButton extends Button {
  renderElevation() {
    return x`<md-elevation></md-elevation>`;
  }
}
/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles = i`:host{--_container-color: var(--md-filled-tonal-button-container-color, var(--md-sys-color-secondary-container, #e8def8));--_container-elevation: var(--md-filled-tonal-button-container-elevation, 0);--_container-height: var(--md-filled-tonal-button-container-height, 40px);--_container-shadow-color: var(--md-filled-tonal-button-container-shadow-color, var(--md-sys-color-shadow, #000));--_container-shape: var(--md-filled-tonal-button-container-shape, 9999px);--_disabled-container-color: var(--md-filled-tonal-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-elevation: var(--md-filled-tonal-button-disabled-container-elevation, 0);--_disabled-container-opacity: var(--md-filled-tonal-button-disabled-container-opacity, 0.12);--_disabled-label-text-color: var(--md-filled-tonal-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-tonal-button-disabled-label-text-opacity, 0.38);--_focus-container-elevation: var(--md-filled-tonal-button-focus-container-elevation, 0);--_focus-label-text-color: var(--md-filled-tonal-button-focus-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-container-elevation: var(--md-filled-tonal-button-hover-container-elevation, 1);--_hover-label-text-color: var(--md-filled-tonal-button-hover-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-state-layer-color: var(--md-filled-tonal-button-hover-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-state-layer-opacity: var(--md-filled-tonal-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-filled-tonal-button-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_label-text-font: var(--md-filled-tonal-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-tonal-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-filled-tonal-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-filled-tonal-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-container-elevation: var(--md-filled-tonal-button-pressed-container-elevation, 0);--_pressed-label-text-color: var(--md-filled-tonal-button-pressed-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-color: var(--md-filled-tonal-button-pressed-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-opacity: var(--md-filled-tonal-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-filled-tonal-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-tonal-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-tonal-button-focus-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-icon-color: var(--md-filled-tonal-button-hover-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_icon-color: var(--md-filled-tonal-button-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_icon-size: var(--md-filled-tonal-button-icon-size, 18px);--_pressed-icon-color: var(--md-filled-tonal-button-pressed-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_leading-space: var(--md-filled-tonal-button-leading-space, 24px);--_trailing-space: var(--md-filled-tonal-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-filled-tonal-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-filled-tonal-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-filled-tonal-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-filled-tonal-button-with-trailing-icon-trailing-space, 16px);--_container-shape-start-start: var( --md-filled-tonal-button-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-filled-tonal-button-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-filled-tonal-button-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-filled-tonal-button-container-shape-end-start, var(--_container-shape) )}/*# sourceMappingURL=filled-tonal-styles.css.map */
`;
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let MdFilledTonalButton = class MdFilledTonalButton2 extends FilledTonalButton {
};
MdFilledTonalButton.styles = [styles$1, styles$2, styles];
MdFilledTonalButton = __decorate([
  e("md-filled-tonal-button")
], MdFilledTonalButton);
const whatIsAMint_svelte_svelte_type_style_lang = "";
function create_fragment$4(ctx) {
  let p0;
  let textContent = "A mint is similar to a banking institution; it facilitates payments, \n    provides convenience and defends your online privacy as you spend and receive bitcoin.";
  let t1;
  let p1;
  let textContent_1 = "This app uses mints to provide a foundational wallet while providing resources\n    to help you learn more about Bitcoin and ultimately eliminate counterparty risk \n    through self custody.";
  let t3;
  let md_list;
  let textContent_2 = `<md-list-item><md-icon slot="start">account_balance</md-icon> <div slot="headline">A mint is a custodian</div> <div slot="supporting-text">Just like banks, exchanges and all custodial 
            services, a mint is susceptible to loss of 
            customer funds.</div></md-list-item> <md-list-item><md-icon slot="start">error</md-icon> <div slot="headline">Custodians require trust</div> <div slot="supporting-text">All custodians rely on reputation to establish trust. 
            Customers must trust them to secure and 
            facilitate payments, and to minimise counterparty 
            risk on their behalf.</div></md-list-item> <md-list-item><md-icon slot="start">visibility_off</md-icon> <div slot="headline">Mints defend your privacy</div> <div slot="supporting-text">Mints operate without collecting your 
            personal information or asking for 
            registration; why should it? Mints don&#39;t 
            need to know you to serve you.</div></md-list-item> <md-list-item><md-icon slot="start">gavel</md-icon> <div slot="headline">Mints are impartial</div> <div slot="supporting-text">Unlike other custodians, a mint cannot 
            target you, or freeze or restrict access to 
            your funds. Mints don&#39;t know who you are, 
            who you shop with, nor what your current balance 
            is.</div></md-list-item>`;
  let t27;
  let p2;
  let textContent_3 = `This app operates using the cashu protocol. Learn 
    more about it at <a target="_blank" href="https://cashu.space" class="svelte-pk60kd">https://cashu.space</a>.`;
  return {
    c() {
      p0 = element("p");
      p0.textContent = textContent;
      t1 = space();
      p1 = element("p");
      p1.textContent = textContent_1;
      t3 = space();
      md_list = element("md-list");
      md_list.innerHTML = textContent_2;
      t27 = space();
      p2 = element("p");
      p2.innerHTML = textContent_3;
      this.h();
    },
    l(nodes) {
      p0 = claim_element(nodes, "P", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(p0) !== "svelte-e6s8wk")
        p0.textContent = textContent;
      t1 = claim_space(nodes);
      p1 = claim_element(nodes, "P", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(p1) !== "svelte-3tdh1r")
        p1.textContent = textContent_1;
      t3 = claim_space(nodes);
      md_list = claim_element(nodes, "MD-LIST", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(md_list) !== "svelte-1px5pvd")
        md_list.innerHTML = textContent_2;
      t27 = claim_space(nodes);
      p2 = claim_element(nodes, "P", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(p2) !== "svelte-8j4amv")
        p2.innerHTML = textContent_3;
      this.h();
    },
    h() {
      attr(p0, "class", "svelte-pk60kd");
      attr(p1, "class", "svelte-pk60kd");
      attr(p2, "class", "svelte-pk60kd");
    },
    m(target, anchor) {
      insert_hydration(target, p0, anchor);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, p1, anchor);
      insert_hydration(target, t3, anchor);
      insert_hydration(target, md_list, anchor);
      insert_hydration(target, t27, anchor);
      insert_hydration(target, p2, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(p0);
        detach(t1);
        detach(p1);
        detach(t3);
        detach(md_list);
        detach(t27);
        detach(p2);
      }
    }
  };
}
class What_is_a_mint extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment$4, safe_not_equal, {});
  }
}
const Modal_svelte_svelte_type_style_lang = "";
const get_appbar_title_slot_changes = (dirty) => ({});
const get_appbar_title_slot_context = (ctx) => ({});
const get_appbar_start_slot_changes = (dirty) => ({});
const get_appbar_start_slot_context = (ctx) => ({});
function create_if_block(ctx) {
  let h1;
  let current;
  const appbar_title_slot_template = (
    /*#slots*/
    ctx[4]["appbar-title"]
  );
  const appbar_title_slot = create_slot(
    appbar_title_slot_template,
    ctx,
    /*$$scope*/
    ctx[6],
    get_appbar_title_slot_context
  );
  return {
    c() {
      h1 = element("h1");
      if (appbar_title_slot)
        appbar_title_slot.c();
      this.h();
    },
    l(nodes) {
      h1 = claim_element(nodes, "H1", { class: true });
      var h1_nodes = children(h1);
      if (appbar_title_slot)
        appbar_title_slot.l(h1_nodes);
      h1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(h1, "class", "headline-small svelte-1joo0jc");
    },
    m(target, anchor) {
      insert_hydration(target, h1, anchor);
      if (appbar_title_slot) {
        appbar_title_slot.m(h1, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (appbar_title_slot) {
        if (appbar_title_slot.p && (!current || dirty & /*$$scope*/
        64)) {
          update_slot_base(
            appbar_title_slot,
            appbar_title_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[6],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[6]
            ) : get_slot_changes(
              appbar_title_slot_template,
              /*$$scope*/
              ctx2[6],
              dirty,
              get_appbar_title_slot_changes
            ),
            get_appbar_title_slot_context
          );
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(appbar_title_slot, local);
      current = true;
    },
    o(local) {
      transition_out(appbar_title_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(h1);
      }
      if (appbar_title_slot)
        appbar_title_slot.d(detaching);
    }
  };
}
function create_default_slot$2(ctx) {
  let t;
  let if_block_anchor;
  let current;
  const appbar_start_slot_template = (
    /*#slots*/
    ctx[4]["appbar-start"]
  );
  const appbar_start_slot = create_slot(
    appbar_start_slot_template,
    ctx,
    /*$$scope*/
    ctx[6],
    get_appbar_start_slot_context
  );
  let if_block = (
    /*$$slots*/
    ctx[2]["appbar-title"] && create_if_block(ctx)
  );
  return {
    c() {
      if (appbar_start_slot)
        appbar_start_slot.c();
      t = space();
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if (appbar_start_slot)
        appbar_start_slot.l(nodes);
      t = claim_space(nodes);
      if (if_block)
        if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if (appbar_start_slot) {
        appbar_start_slot.m(target, anchor);
      }
      insert_hydration(target, t, anchor);
      if (if_block)
        if_block.m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (appbar_start_slot) {
        if (appbar_start_slot.p && (!current || dirty & /*$$scope*/
        64)) {
          update_slot_base(
            appbar_start_slot,
            appbar_start_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[6],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[6]
            ) : get_slot_changes(
              appbar_start_slot_template,
              /*$$scope*/
              ctx2[6],
              dirty,
              get_appbar_start_slot_changes
            ),
            get_appbar_start_slot_context
          );
        }
      }
      if (
        /*$$slots*/
        ctx2[2]["appbar-title"]
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & /*$$slots*/
          4) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block(ctx2);
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
      transition_in(appbar_start_slot, local);
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(appbar_start_slot, local);
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(t);
        detach(if_block_anchor);
      }
      if (appbar_start_slot)
        appbar_start_slot.d(detaching);
      if (if_block)
        if_block.d(detaching);
    }
  };
}
function create_fragment$3(ctx) {
  let dialog;
  let div1;
  let appbar;
  let t;
  let div0;
  let current;
  let mounted;
  let dispose;
  appbar = new AppBar({
    props: {
      $$slots: { default: [create_default_slot$2] },
      $$scope: { ctx }
    }
  });
  const default_slot_template = (
    /*#slots*/
    ctx[4].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[6],
    null
  );
  return {
    c() {
      dialog = element("dialog");
      div1 = element("div");
      create_component(appbar.$$.fragment);
      t = space();
      div0 = element("div");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      dialog = claim_element(nodes, "DIALOG", { class: true });
      var dialog_nodes = children(dialog);
      div1 = claim_element(dialog_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      claim_component(appbar.$$.fragment, div1_nodes);
      t = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      if (default_slot)
        default_slot.l(div0_nodes);
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      dialog_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "contents svelte-1joo0jc");
      attr(div1, "class", "modal-container svelte-1joo0jc");
      attr(dialog, "class", "svelte-1joo0jc");
    },
    m(target, anchor) {
      insert_hydration(target, dialog, anchor);
      append_hydration(dialog, div1);
      mount_component(appbar, div1, null);
      append_hydration(div1, t);
      append_hydration(div1, div0);
      if (default_slot) {
        default_slot.m(div0, null);
      }
      ctx[5](dialog);
      current = true;
      if (!mounted) {
        dispose = listen(
          dialog,
          "close",
          /*closeHandler*/
          ctx[1]
        );
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      const appbar_changes = {};
      if (dirty & /*$$scope, $$slots*/
      68) {
        appbar_changes.$$scope = { dirty, ctx: ctx2 };
      }
      appbar.$set(appbar_changes);
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        64)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[6],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[6]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[6],
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
      transition_in(appbar.$$.fragment, local);
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(appbar.$$.fragment, local);
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(dialog);
      }
      destroy_component(appbar);
      if (default_slot)
        default_slot.d(detaching);
      ctx[5](null);
      mounted = false;
      dispose();
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  const $$slots = compute_slots(slots);
  let { condition } = $$props;
  let modal;
  afterNavigate(() => {
    if (condition()) {
      if (!modal.open) {
        modal.showModal();
      }
    } else {
      if (modal.open) {
        modal.close();
      }
    }
  });
  const dispatch = createEventDispatcher();
  const closeHandler = (e2) => {
    if (condition()) {
      dispatch("close", e2);
    }
  };
  function dialog_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      modal = $$value;
      $$invalidate(0, modal);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("condition" in $$props2)
      $$invalidate(3, condition = $$props2.condition);
    if ("$$scope" in $$props2)
      $$invalidate(6, $$scope = $$props2.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*modal*/
    1) {
      modal == null ? void 0 : modal.addEventListener("click", (e2) => {
        if (e2.target === modal) {
          modal.close();
        }
      });
    }
  };
  return [modal, closeHandler, $$slots, condition, slots, dialog_binding, $$scope];
}
class Modal extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$3, safe_not_equal, { condition: 3 });
  }
}
const mintInfo_svelte_svelte_type_style_lang = "";
function create_default_slot_1$1(ctx) {
  let whatisamint;
  let current;
  whatisamint = new What_is_a_mint({});
  return {
    c() {
      create_component(whatisamint.$$.fragment);
    },
    l(nodes) {
      claim_component(whatisamint.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(whatisamint, target, anchor);
      current = true;
    },
    i(local) {
      if (current)
        return;
      transition_in(whatisamint.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(whatisamint.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(whatisamint, detaching);
    }
  };
}
function create_appbar_start_slot(ctx) {
  let md_icon_button;
  let md_icon;
  let textContent = "arrow_back";
  return {
    c() {
      md_icon_button = element("md-icon-button");
      md_icon = element("md-icon");
      md_icon.textContent = textContent;
      this.h();
    },
    l(nodes) {
      md_icon_button = claim_element(nodes, "MD-ICON-BUTTON", { href: true });
      var md_icon_button_nodes = children(md_icon_button);
      md_icon = claim_element(md_icon_button_nodes, "MD-ICON", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(md_icon) !== "svelte-1vfm1s3")
        md_icon.textContent = textContent;
      md_icon_button_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_custom_element_data(
        md_icon_button,
        "href",
        /*$stackPopUrl*/
        ctx[1]
      );
    },
    m(target, anchor) {
      insert_hydration(target, md_icon_button, anchor);
      append_hydration(md_icon_button, md_icon);
    },
    p(ctx2, dirty) {
      if (dirty & /*$stackPopUrl*/
      2) {
        set_custom_element_data(
          md_icon_button,
          "href",
          /*$stackPopUrl*/
          ctx2[1]
        );
      }
    },
    d(detaching) {
      if (detaching) {
        detach(md_icon_button);
      }
    }
  };
}
function create_appbar_title_slot(ctx) {
  let t;
  return {
    c() {
      t = text("What is a mint?");
    },
    l(nodes) {
      t = claim_text(nodes, "What is a mint?");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    d(detaching) {
      if (detaching) {
        detach(t);
      }
    }
  };
}
function create_default_slot$1(ctx) {
  let modal;
  let current;
  modal = new Modal({
    props: {
      condition: (
        /*func*/
        ctx[2]
      ),
      $$slots: {
        "appbar-title": [create_appbar_title_slot],
        "appbar-start": [create_appbar_start_slot],
        default: [create_default_slot_1$1]
      },
      $$scope: { ctx }
    }
  });
  modal.$on(
    "close",
    /*close_handler*/
    ctx[3]
  );
  return {
    c() {
      create_component(modal.$$.fragment);
    },
    l(nodes) {
      claim_component(modal.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(modal, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const modal_changes = {};
      if (dirty & /*$page*/
      1)
        modal_changes.condition = /*func*/
        ctx2[2];
      if (dirty & /*$$scope, $stackPopUrl*/
      18) {
        modal_changes.$$scope = { dirty, ctx: ctx2 };
      }
      modal.$set(modal_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(modal.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(modal.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(modal, detaching);
    }
  };
}
function create_fragment$2(ctx) {
  let h1;
  let textContent = "Deposited at mint:";
  let t1;
  let p;
  let textContent_1 = "https://legend.lnbits.com/cashu/api/v1/4gr9Xcmz3XEkUNwiBiQGoC";
  let t3;
  let md_filled_tonal_button;
  let textContent_2 = `What&#39;s a mint<md-icon slot="icon">help_outline</md-icon>`;
  let t6;
  let portal;
  let current;
  portal = new Portal({
    props: {
      target: "target:modal",
      $$slots: { default: [create_default_slot$1] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      h1 = element("h1");
      h1.textContent = textContent;
      t1 = space();
      p = element("p");
      p.textContent = textContent_1;
      t3 = space();
      md_filled_tonal_button = element("md-filled-tonal-button");
      md_filled_tonal_button.innerHTML = textContent_2;
      t6 = space();
      create_component(portal.$$.fragment);
      this.h();
    },
    l(nodes) {
      h1 = claim_element(nodes, "H1", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(h1) !== "svelte-ldxn8h")
        h1.textContent = textContent;
      t1 = claim_space(nodes);
      p = claim_element(nodes, "P", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(p) !== "svelte-1329m9i")
        p.textContent = textContent_1;
      t3 = claim_space(nodes);
      md_filled_tonal_button = claim_element(nodes, "MD-FILLED-TONAL-BUTTON", {
        href: true,
        class: true,
        ["data-svelte-h"]: true
      });
      if (get_svelte_dataset(md_filled_tonal_button) !== "svelte-l9gbwl")
        md_filled_tonal_button.innerHTML = textContent_2;
      t6 = claim_space(nodes);
      claim_component(portal.$$.fragment, nodes);
      this.h();
    },
    h() {
      attr(h1, "class", "title-medium svelte-1xgvd33");
      attr(p, "class", "body-medium svelte-1xgvd33");
      set_custom_element_data(md_filled_tonal_button, "href", "?modal=true");
      set_custom_element_data(md_filled_tonal_button, "class", "svelte-1xgvd33");
    },
    m(target, anchor) {
      insert_hydration(target, h1, anchor);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, p, anchor);
      insert_hydration(target, t3, anchor);
      insert_hydration(target, md_filled_tonal_button, anchor);
      insert_hydration(target, t6, anchor);
      mount_component(portal, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const portal_changes = {};
      if (dirty & /*$$scope, $page, $stackPopUrl*/
      19) {
        portal_changes.$$scope = { dirty, ctx: ctx2 };
      }
      portal.$set(portal_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(portal.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(portal.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(h1);
        detach(t1);
        detach(p);
        detach(t3);
        detach(md_filled_tonal_button);
        detach(t6);
      }
      destroy_component(portal, detaching);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let $page;
  let $stackPopUrl;
  component_subscribe($$self, page, ($$value) => $$invalidate(0, $page = $$value));
  component_subscribe($$self, stackPopUrl, ($$value) => $$invalidate(1, $stackPopUrl = $$value));
  const func = () => $page.url.searchParams.has("modal");
  const close_handler = () => stackBack();
  return [$page, $stackPopUrl, func, close_handler];
}
class Mint_info extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment$2, safe_not_equal, {});
  }
}
const amount_svelte_svelte_type_style_lang = "";
function create_fragment$1(ctx) {
  let h2;
  let textContent = `<span class="zeros svelte-u90l8j">0</span><span class="amount headline-medium svelte-u90l8j">.</span><span class="zeros svelte-u90l8j">00 0</span><span class="amount headline-medium svelte-u90l8j">50 204</span> <span class="label-large">BTC</span>`;
  return {
    c() {
      h2 = element("h2");
      h2.innerHTML = textContent;
      this.h();
    },
    l(nodes) {
      h2 = claim_element(nodes, "H2", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(h2) !== "svelte-nw3p3e")
        h2.innerHTML = textContent;
      this.h();
    },
    h() {
      attr(h2, "class", "headline-small zeros svelte-u90l8j");
    },
    m(target, anchor) {
      insert_hydration(target, h2, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(h2);
      }
    }
  };
}
class Amount extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment$1, safe_not_equal, {});
  }
}
const _page_svelte_svelte_type_style_lang = "";
function create_default_slot_1(ctx) {
  let amount;
  let t;
  let mintinfo;
  let current;
  amount = new Amount({});
  mintinfo = new Mint_info({});
  return {
    c() {
      create_component(amount.$$.fragment);
      t = space();
      create_component(mintinfo.$$.fragment);
    },
    l(nodes) {
      claim_component(amount.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(mintinfo.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(amount, target, anchor);
      insert_hydration(target, t, anchor);
      mount_component(mintinfo, target, anchor);
      current = true;
    },
    i(local) {
      if (current)
        return;
      transition_in(amount.$$.fragment, local);
      transition_in(mintinfo.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(amount.$$.fragment, local);
      transition_out(mintinfo.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(t);
      }
      destroy_component(amount, detaching);
      destroy_component(mintinfo, detaching);
    }
  };
}
function create_icon_slot(ctx) {
  let md_icon;
  let textContent = "currency_bitcoin";
  return {
    c() {
      md_icon = element("md-icon");
      md_icon.textContent = textContent;
      this.h();
    },
    l(nodes) {
      md_icon = claim_element(nodes, "MD-ICON", {
        slot: true,
        style: true,
        ["data-svelte-h"]: true
      });
      if (get_svelte_dataset(md_icon) !== "svelte-1vdwq86")
        md_icon.textContent = textContent;
      this.h();
    },
    h() {
      set_custom_element_data(md_icon, "slot", "icon");
      set_style(md_icon, "color", "#F7931A");
    },
    m(target, anchor) {
      insert_hydration(target, md_icon, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(md_icon);
      }
    }
  };
}
function create_default_slot(ctx) {
  let section0;
  let textContent = `<h1 class="headline-small">You received an offer for:</h1>`;
  let t1;
  let section1;
  let card;
  let t2;
  let section2;
  let textContent_1 = `<md-filled-button href="${`${base}/accounts`}">Claim the offer</md-filled-button>`;
  let current;
  card = new Card({
    props: {
      color: "surface-container-highest",
      $$slots: {
        icon: [create_icon_slot],
        default: [create_default_slot_1]
      },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      section0 = element("section");
      section0.innerHTML = textContent;
      t1 = space();
      section1 = element("section");
      create_component(card.$$.fragment);
      t2 = space();
      section2 = element("section");
      section2.innerHTML = textContent_1;
      this.h();
    },
    l(nodes) {
      section0 = claim_element(nodes, "SECTION", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(section0) !== "svelte-y81vjf")
        section0.innerHTML = textContent;
      t1 = claim_space(nodes);
      section1 = claim_element(nodes, "SECTION", { class: true });
      var section1_nodes = children(section1);
      claim_component(card.$$.fragment, section1_nodes);
      section1_nodes.forEach(detach);
      t2 = claim_space(nodes);
      section2 = claim_element(nodes, "SECTION", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(section2) !== "svelte-6efo10")
        section2.innerHTML = textContent_1;
      this.h();
    },
    h() {
      attr(section0, "class", "details svelte-qtnb9g");
      attr(section1, "class", "svelte-qtnb9g");
      attr(section2, "class", "calltoaction svelte-qtnb9g");
    },
    m(target, anchor) {
      insert_hydration(target, section0, anchor);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, section1, anchor);
      mount_component(card, section1, null);
      insert_hydration(target, t2, anchor);
      insert_hydration(target, section2, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const card_changes = {};
      if (dirty & /*$$scope*/
      1) {
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
        detach(section0);
        detach(t1);
        detach(section1);
        detach(t2);
        detach(section2);
      }
      destroy_component(card);
    }
  };
}
function create_fragment(ctx) {
  let singlepane;
  let current;
  singlepane = new SinglePane({
    props: {
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(singlepane.$$.fragment);
    },
    l(nodes) {
      claim_component(singlepane.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(singlepane, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const singlepane_changes = {};
      if (dirty & /*$$scope*/
      1) {
        singlepane_changes.$$scope = { dirty, ctx: ctx2 };
      }
      singlepane.$set(singlepane_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(singlepane.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(singlepane.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(singlepane, detaching);
    }
  };
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment, safe_not_equal, {});
  }
}
export {
  Page as component
};
