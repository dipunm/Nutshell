import { s as safe_not_equal, n as noop } from "../chunks/utils.08e12359.js";
import { s as space, b as element, c as claim_space, f as claim_element, g as children, d as detach, h as attr, i as insert_hydration, r as append_hydration, w as get_svelte_dataset, x as set_custom_element_data } from "../chunks/scheduler.6906c812.js";
import { S as SvelteComponent, i as init, b as create_component, d as claim_component, m as mount_component, a as transition_in, t as transition_out, e as destroy_component } from "../chunks/index.f9624644.js";
import { C as Card } from "../chunks/Card.29d8f6d9.js";
import "../chunks/icon.8232ecae.js";
import { P as Portal } from "../chunks/Portal.e01d24b0.js";
import { b as base } from "../chunks/paths.49cb14d9.js";
const _page_svelte_svelte_type_style_lang = "";
function create_default_slot_4(ctx) {
  let md_icon_button;
  let textContent = `<md-icon>arrow_back</md-icon>`;
  return {
    c() {
      md_icon_button = element("md-icon-button");
      md_icon_button.innerHTML = textContent;
      this.h();
    },
    l(nodes) {
      md_icon_button = claim_element(nodes, "MD-ICON-BUTTON", { href: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(md_icon_button) !== "svelte-r7bc1z")
        md_icon_button.innerHTML = textContent;
      this.h();
    },
    h() {
      set_custom_element_data(md_icon_button, "href", "router:pop-stack");
    },
    m(target, anchor) {
      insert_hydration(target, md_icon_button, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(md_icon_button);
      }
    }
  };
}
function create_default_slot_3(ctx) {
  let h1;
  let textContent = "Spend";
  return {
    c() {
      h1 = element("h1");
      h1.textContent = textContent;
      this.h();
    },
    l(nodes) {
      h1 = claim_element(nodes, "H1", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(h1) !== "svelte-43nih")
        h1.textContent = textContent;
      this.h();
    },
    h() {
      attr(h1, "class", "headline-small svelte-1l072c1");
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
  let div;
  let textContent = `<h1 class="headline-small svelte-1l072c1">Pay an invoice</h1> <p class="svelte-1l072c1">Request a payment on the Bitcoin Lightning Network</p> <md-icon class="icon svelte-1l072c1">qr_code_scanner</md-icon>`;
  return {
    c() {
      div = element("div");
      div.innerHTML = textContent;
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(div) !== "svelte-hm0h5o")
        div.innerHTML = textContent;
      this.h();
    },
    h() {
      attr(div, "class", "card-inner svelte-1l072c1");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(div);
      }
    }
  };
}
function create_default_slot_1(ctx) {
  let div;
  let textContent = `<h1 class="headline-small svelte-1l072c1">Create an offer</h1> <p class="svelte-1l072c1">Scan or import a mint offer</p> <md-icon class="icon svelte-1l072c1">file_upload</md-icon>`;
  return {
    c() {
      div = element("div");
      div.innerHTML = textContent;
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(div) !== "svelte-1kpf9jp")
        div.innerHTML = textContent;
      this.h();
    },
    h() {
      attr(div, "class", "card-inner svelte-1l072c1");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(div);
      }
    }
  };
}
function create_default_slot(ctx) {
  let div;
  let textContent = `<h1 class="headline-small svelte-1l072c1">Sweep wallet</h1> <p class="svelte-1l072c1">Take back an unclaimed offer</p> <md-icon class="icon svelte-1l072c1">clear_all</md-icon>`;
  return {
    c() {
      div = element("div");
      div.innerHTML = textContent;
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(div) !== "svelte-wuoma9")
        div.innerHTML = textContent;
      this.h();
    },
    h() {
      attr(div, "class", "card-inner svelte-1l072c1");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching) {
        detach(div);
      }
    }
  };
}
function create_fragment(ctx) {
  let portal0;
  let t0;
  let portal1;
  let t1;
  let div;
  let card0;
  let t2;
  let card1;
  let t3;
  let card2;
  let current;
  portal0 = new Portal({
    props: {
      target: "content-appbar-start",
      $$slots: { default: [create_default_slot_4] },
      $$scope: { ctx }
    }
  });
  portal1 = new Portal({
    props: {
      target: "content-appbar",
      $$slots: { default: [create_default_slot_3] },
      $$scope: { ctx }
    }
  });
  card0 = new Card({
    props: {
      color: "primary",
      href: base + "/camera",
      preserveStack: true,
      $$slots: { default: [create_default_slot_2] },
      $$scope: { ctx }
    }
  });
  card1 = new Card({
    props: {
      color: "primary",
      href: "#",
      $$slots: { default: [create_default_slot_1] },
      $$scope: { ctx }
    }
  });
  card2 = new Card({
    props: {
      color: "primary",
      href: "#",
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(portal0.$$.fragment);
      t0 = space();
      create_component(portal1.$$.fragment);
      t1 = space();
      div = element("div");
      create_component(card0.$$.fragment);
      t2 = space();
      create_component(card1.$$.fragment);
      t3 = space();
      create_component(card2.$$.fragment);
      this.h();
    },
    l(nodes) {
      claim_component(portal0.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(portal1.$$.fragment, nodes);
      t1 = claim_space(nodes);
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(card0.$$.fragment, div_nodes);
      t2 = claim_space(div_nodes);
      claim_component(card1.$$.fragment, div_nodes);
      t3 = claim_space(div_nodes);
      claim_component(card2.$$.fragment, div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "container-grid svelte-1l072c1");
    },
    m(target, anchor) {
      mount_component(portal0, target, anchor);
      insert_hydration(target, t0, anchor);
      mount_component(portal1, target, anchor);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, div, anchor);
      mount_component(card0, div, null);
      append_hydration(div, t2);
      mount_component(card1, div, null);
      append_hydration(div, t3);
      mount_component(card2, div, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      const portal0_changes = {};
      if (dirty & /*$$scope*/
      1) {
        portal0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      portal0.$set(portal0_changes);
      const portal1_changes = {};
      if (dirty & /*$$scope*/
      1) {
        portal1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      portal1.$set(portal1_changes);
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
      transition_in(portal0.$$.fragment, local);
      transition_in(portal1.$$.fragment, local);
      transition_in(card0.$$.fragment, local);
      transition_in(card1.$$.fragment, local);
      transition_in(card2.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(portal0.$$.fragment, local);
      transition_out(portal1.$$.fragment, local);
      transition_out(card0.$$.fragment, local);
      transition_out(card1.$$.fragment, local);
      transition_out(card2.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(t0);
        detach(t1);
        detach(div);
      }
      destroy_component(portal0, detaching);
      destroy_component(portal1, detaching);
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
