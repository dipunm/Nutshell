import { s as safe_not_equal } from "../chunks/utils.fa1c87cb.js";
import { b as element, s as space, f as claim_element, g as children, c as claim_space, d as detach, h as attr, i as insert_hydration, r as append_hydration, k as text, l as claim_text } from "../chunks/scheduler.1f8d92cd.js";
import { S as SvelteComponent, i as init, b as create_component, d as claim_component, m as mount_component, a as transition_in, t as transition_out, e as destroy_component } from "../chunks/index.12b74358.js";
import { C as Card } from "../chunks/Card.441d55c7.js";
const _page_svelte_svelte_type_style_lang = "";
function create_default_slot_2(ctx) {
  let t;
  return {
    c() {
      t = text("Create an offer");
    },
    l(nodes) {
      t = claim_text(nodes, "Create an offer");
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
      t = text("Pay an invoice");
    },
    l(nodes) {
      t = claim_text(nodes, "Pay an invoice");
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
      t = text("Sweep funds");
    },
    l(nodes) {
      t = claim_text(nodes, "Sweep funds");
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
  let div;
  let card0;
  let t0;
  let card1;
  let t1;
  let card2;
  let current;
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
      div = element("div");
      create_component(card0.$$.fragment);
      t0 = space();
      create_component(card1.$$.fragment);
      t1 = space();
      create_component(card2.$$.fragment);
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(card0.$$.fragment, div_nodes);
      t0 = claim_space(div_nodes);
      claim_component(card1.$$.fragment, div_nodes);
      t1 = claim_space(div_nodes);
      claim_component(card2.$$.fragment, div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "container svelte-1ottptj");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      mount_component(card0, div, null);
      append_hydration(div, t0);
      mount_component(card1, div, null);
      append_hydration(div, t1);
      mount_component(card2, div, null);
      current = true;
    },
    p(ctx2, [dirty]) {
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
      transition_in(card0.$$.fragment, local);
      transition_in(card1.$$.fragment, local);
      transition_in(card2.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(card0.$$.fragment, local);
      transition_out(card1.$$.fragment, local);
      transition_out(card2.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(div);
      }
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
