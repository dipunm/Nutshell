import { s as safe_not_equal, c as create_slot, u as update_slot_base, g as get_all_dirty_from_scope, a as get_slot_changes } from "./utils.08e12359.js";
import { b as element, f as claim_element, g as children, d as detach, h as attr, i as insert_hydration } from "./scheduler.7be6e2f1.js";
import { S as SvelteComponent, i as init, a as transition_in, t as transition_out } from "./index.89845fad.js";
const AppBar_svelte_svelte_type_style_lang = "";
function create_fragment(ctx) {
  let nav;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[1].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[0],
    null
  );
  return {
    c() {
      nav = element("nav");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      nav = claim_element(nodes, "NAV", { class: true });
      var nav_nodes = children(nav);
      if (default_slot)
        default_slot.l(nav_nodes);
      nav_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(nav, "class", "svelte-17v5qry");
    },
    m(target, anchor) {
      insert_hydration(target, nav, anchor);
      if (default_slot) {
        default_slot.m(nav, null);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        1)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[0],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[0]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[0],
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
      if (detaching) {
        detach(nav);
      }
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  $$self.$$set = ($$props2) => {
    if ("$$scope" in $$props2)
      $$invalidate(0, $$scope = $$props2.$$scope);
  };
  return [$$scope, slots];
}
class AppBar extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export {
  AppBar as A
};
