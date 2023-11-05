import { s as safe_not_equal, n as noop } from "../chunks/utils.08e12359.js";
import { s as space, b as element, c as claim_space, f as claim_element, g as children, d as detach, h as attr, i as insert_hydration, r as append_hydration, w as get_svelte_dataset, k as text, l as claim_text } from "../chunks/scheduler.7be6e2f1.js";
import { S as SvelteComponent, i as init, b as create_component, d as claim_component, m as mount_component, a as transition_in, t as transition_out, e as destroy_component } from "../chunks/index.89845fad.js";
import { C as Card } from "../chunks/Card.1b857f0f.js";
import "../chunks/icon-button.2ef3c792.js";
import { P as Portal } from "../chunks/Portal.44e08144.js";
const _page_svelte_svelte_type_style_lang = "";
function create_default_slot_3(ctx) {
  let h1;
  let textContent = "Deposit";
  return {
    c() {
      h1 = element("h1");
      h1.textContent = textContent;
      this.h();
    },
    l(nodes) {
      h1 = claim_element(nodes, "H1", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(h1) !== "svelte-1mcvlqz")
        h1.textContent = textContent;
      this.h();
    },
    h() {
      attr(h1, "class", "headline-small svelte-19620hz");
    },
    m(target, anchor) {
      insert_hydration(target, h1, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(h1);
      }
    }
  };
}
function create_default_slot_2(ctx) {
  let t;
  return {
    c() {
      t = text("Create an invoice");
    },
    l(nodes) {
      t = claim_text(nodes, "Create an invoice");
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
function create_default_slot_1(ctx) {
  let t;
  return {
    c() {
      t = text("Import an offer");
    },
    l(nodes) {
      t = claim_text(nodes, "Import an offer");
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
function create_default_slot(ctx) {
  let t;
  return {
    c() {
      t = text("Reclaim an offer");
    },
    l(nodes) {
      t = claim_text(nodes, "Reclaim an offer");
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
function create_fragment(ctx) {
  let portal;
  let t0;
  let div;
  let card0;
  let t1;
  let card1;
  let t2;
  let card2;
  let current;
  portal = new Portal({
    props: {
      target: "content-appbar",
      $$slots: { default: [create_default_slot_3] },
      $$scope: { ctx }
    }
  });
  card0 = new Card({
    props: {
      color: "surface-container-highest",
      $$slots: { default: [create_default_slot_2] },
      $$scope: { ctx }
    }
  });
  card1 = new Card({
    props: {
      color: "surface-container-highest",
      $$slots: { default: [create_default_slot_1] },
      $$scope: { ctx }
    }
  });
  card2 = new Card({
    props: {
      color: "surface-container-highest",
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(portal.$$.fragment);
      t0 = space();
      div = element("div");
      create_component(card0.$$.fragment);
      t1 = space();
      create_component(card1.$$.fragment);
      t2 = space();
      create_component(card2.$$.fragment);
      this.h();
    },
    l(nodes) {
      claim_component(portal.$$.fragment, nodes);
      t0 = claim_space(nodes);
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(card0.$$.fragment, div_nodes);
      t1 = claim_space(div_nodes);
      claim_component(card1.$$.fragment, div_nodes);
      t2 = claim_space(div_nodes);
      claim_component(card2.$$.fragment, div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "container svelte-19620hz");
    },
    m(target, anchor) {
      mount_component(portal, target, anchor);
      insert_hydration(target, t0, anchor);
      insert_hydration(target, div, anchor);
      mount_component(card0, div, null);
      append_hydration(div, t1);
      mount_component(card1, div, null);
      append_hydration(div, t2);
      mount_component(card2, div, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      const portal_changes = {};
      if (dirty & /*$$scope*/
      1) {
        portal_changes.$$scope = { dirty, ctx: ctx2 };
      }
      portal.$set(portal_changes);
      const card0_changes = {};
      if (dirty & /*$$scope*/
      1) {
        card0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      card0.$set(card0_changes);
      const card1_changes = {};
      if (dirty & /*$$scope*/
      1) {
        card1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      card1.$set(card1_changes);
      const card2_changes = {};
      if (dirty & /*$$scope*/
      1) {
        card2_changes.$$scope = { dirty, ctx: ctx2 };
      }
      card2.$set(card2_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(portal.$$.fragment, local);
      transition_in(card0.$$.fragment, local);
      transition_in(card1.$$.fragment, local);
      transition_in(card2.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(portal.$$.fragment, local);
      transition_out(card0.$$.fragment, local);
      transition_out(card1.$$.fragment, local);
      transition_out(card2.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(t0);
        detach(div);
      }
      destroy_component(portal, detaching);
      destroy_component(card0);
      destroy_component(card1);
      destroy_component(card2);
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
