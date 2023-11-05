import { s as safe_not_equal, b as component_subscribe, n as noop } from "../chunks/utils.08e12359.js";
import { s as space, b as element, c as claim_space, f as claim_element, g as children, d as detach, h as attr, i as insert_hydration, r as append_hydration, w as get_svelte_dataset, x as set_custom_element_data, k as text, l as claim_text } from "../chunks/scheduler.6906c812.js";
import { S as SvelteComponent, i as init, b as create_component, d as claim_component, m as mount_component, a as transition_in, t as transition_out, e as destroy_component } from "../chunks/index.f9624644.js";
import { C as Card } from "../chunks/Card.8779831c.js";
import "../chunks/icon.ebc2319f.js";
import { P as Portal } from "../chunks/Portal.e01d24b0.js";
import { s as stackPopUrl } from "../chunks/index.30db0640.js";
const _page_svelte_svelte_type_style_lang = "";
function create_default_slot_4(ctx) {
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
        ctx[0]
      );
    },
    m(target, anchor) {
      insert_hydration(target, md_icon_button, anchor);
      append_hydration(md_icon_button, md_icon);
    },
    p(ctx2, dirty) {
      if (dirty & /*$stackPopUrl*/
      1) {
        set_custom_element_data(
          md_icon_button,
          "href",
          /*$stackPopUrl*/
          ctx2[0]
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
      attr(div, "class", "container svelte-19620hz");
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
      if (dirty & /*$$scope, $stackPopUrl*/
      3) {
        portal0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      portal0.$set(portal0_changes);
      const portal1_changes = {};
      if (dirty & /*$$scope*/
      2) {
        portal1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      portal1.$set(portal1_changes);
      const card0_changes = {};
      if (dirty & /*$$scope*/
      2) {
        card0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      card0.$set(card0_changes);
      const card1_changes = {};
      if (dirty & /*$$scope*/
      2) {
        card1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      card1.$set(card1_changes);
      const card2_changes = {};
      if (dirty & /*$$scope*/
      2) {
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
function instance($$self, $$props, $$invalidate) {
  let $stackPopUrl;
  component_subscribe($$self, stackPopUrl, ($$value) => $$invalidate(0, $stackPopUrl = $$value));
  return [$stackPopUrl];
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export {
  Page as component
};
