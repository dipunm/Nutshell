import { s as safe_not_equal, c as create_slot, u as update_slot_base, g as get_all_dirty_from_scope, a as get_slot_changes } from "../chunks/utils.08e12359.js";
import { b as element, s as space, q as head_selector, f as claim_element, d as detach, c as claim_space, g as children, h as attr, r as append_hydration, i as insert_hydration } from "../chunks/scheduler.6906c812.js";
import { S as SvelteComponent, i as init, b as create_component, d as claim_component, m as mount_component, a as transition_in, t as transition_out, e as destroy_component } from "../chunks/index.f9624644.js";
import { a as activateNavigationStackBehaviour } from "../chunks/index.82aa11ca.js";
import { P as PortalTarget } from "../chunks/PortalTarget.b8bf6a9a.js";
const ssr = false;
function load() {
  return {
    savedState: history.state
  };
}
const _layout = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  load,
  ssr
}, Symbol.toStringTag, { value: "Module" }));
const modernNormalize = "";
const app = "";
const theme = "";
const _layout_svelte_svelte_type_style_lang = "";
function create_fragment(ctx) {
  let link0;
  let link1;
  let t0;
  let div;
  let t1;
  let portaltarget;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[2].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[1],
    null
  );
  portaltarget = new PortalTarget({ props: { name: "target:modal" } });
  return {
    c() {
      link0 = element("link");
      link1 = element("link");
      t0 = space();
      div = element("div");
      if (default_slot)
        default_slot.c();
      t1 = space();
      create_component(portaltarget.$$.fragment);
      this.h();
    },
    l(nodes) {
      const head_nodes = head_selector("svelte-19o8md4", document.head);
      link0 = claim_element(head_nodes, "LINK", { href: true, rel: true });
      link1 = claim_element(head_nodes, "LINK", { href: true, rel: true });
      head_nodes.forEach(detach);
      t0 = claim_space(nodes);
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      if (default_slot)
        default_slot.l(div_nodes);
      div_nodes.forEach(detach);
      t1 = claim_space(nodes);
      claim_component(portaltarget.$$.fragment, nodes);
      this.h();
    },
    h() {
      attr(link0, "href", "https://fonts.googleapis.com/icon?family=Material+Symbols+Outlined");
      attr(link0, "rel", "stylesheet");
      attr(link1, "href", "https://fonts.googleapis.com/icon?family=Material+Symbols+Sharp");
      attr(link1, "rel", "stylesheet");
      document.title = "Nutshell";
      attr(div, "class", "container svelte-1h2iowf");
    },
    m(target, anchor) {
      append_hydration(document.head, link0);
      append_hydration(document.head, link1);
      insert_hydration(target, t0, anchor);
      insert_hydration(target, div, anchor);
      if (default_slot) {
        default_slot.m(div, null);
      }
      insert_hydration(target, t1, anchor);
      mount_component(portaltarget, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
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
      transition_in(default_slot, local);
      transition_in(portaltarget.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      transition_out(portaltarget.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(t0);
        detach(div);
        detach(t1);
      }
      detach(link0);
      detach(link1);
      if (default_slot)
        default_slot.d(detaching);
      destroy_component(portaltarget, detaching);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { data } = $$props;
  if (data == null ? void 0 : data.savedState) {
    history.replaceState({ ...data.savedState }, "");
  }
  activateNavigationStackBehaviour();
  $$self.$$set = ($$props2) => {
    if ("data" in $$props2)
      $$invalidate(0, data = $$props2.data);
    if ("$$scope" in $$props2)
      $$invalidate(1, $$scope = $$props2.$$scope);
  };
  return [data, $$scope, slots];
}
class Layout extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { data: 0 });
  }
}
export {
  Layout as component,
  _layout as universal
};
