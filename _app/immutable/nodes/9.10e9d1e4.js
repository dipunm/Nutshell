import { s as safe_not_equal, n as noop } from "../chunks/utils.08e12359.js";
import { b as element, s as space, f as claim_element, w as get_svelte_dataset, c as claim_space, g as children, d as detach, h as attr, i as insert_hydration, x as set_custom_element_data, j as set_style } from "../chunks/scheduler.6906c812.js";
import { S as SvelteComponent, i as init, b as create_component, d as claim_component, m as mount_component, a as transition_in, t as transition_out, e as destroy_component } from "../chunks/index.f9624644.js";
import { b as base } from "../chunks/paths.69a294fa.js";
import "../chunks/filled-button.15dbafb4.js";
import "../chunks/icon.8232ecae.js";
import { C as Card } from "../chunks/Card.29d8f6d9.js";
import { S as SinglePane, A as Amount, M as Mint_info } from "../chunks/amount.1e48a6fc.js";
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
  let textContent_1 = `<md-filled-button href="${base}/accounts">Claim the offer</md-filled-button>`;
  let current;
  card = new Card({
    props: {
      color: "surface-container-highest",
      maxWidth: "450px",
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
      if (get_svelte_dataset(section2) !== "svelte-7xmims")
        section2.innerHTML = textContent_1;
      this.h();
    },
    h() {
      attr(section0, "class", "details svelte-11hllfo");
      attr(section1, "class", "svelte-11hllfo");
      attr(section2, "class", "calltoaction svelte-11hllfo");
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
