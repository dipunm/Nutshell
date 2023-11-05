import { s as safe_not_equal, c as create_slot, u as update_slot_base, g as get_all_dirty_from_scope, a as get_slot_changes, e as compute_slots } from "./utils.08e12359.js";
import { b as element, s as space, f as claim_element, g as children, c as claim_space, d as detach, j as set_style, h as attr, u as toggle_class, i as insert_hydration, r as append_hydration } from "./scheduler.7be6e2f1.js";
import { S as SvelteComponent, i as init, a as transition_in, g as group_outros, t as transition_out, c as check_outros } from "./index.89845fad.js";
const Card_svelte_svelte_type_style_lang = "";
const get_icon_slot_changes = (dirty) => ({});
const get_icon_slot_context = (ctx) => ({});
function create_if_block(ctx) {
  let div;
  let current;
  const icon_slot_template = (
    /*#slots*/
    ctx[6].icon
  );
  const icon_slot = create_slot(
    icon_slot_template,
    ctx,
    /*$$scope*/
    ctx[5],
    get_icon_slot_context
  );
  return {
    c() {
      div = element("div");
      if (icon_slot)
        icon_slot.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      if (icon_slot)
        icon_slot.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "icon svelte-1ab9al0");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if (icon_slot) {
        icon_slot.m(div, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (icon_slot) {
        if (icon_slot.p && (!current || dirty & /*$$scope*/
        32)) {
          update_slot_base(
            icon_slot,
            icon_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[5],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[5]
            ) : get_slot_changes(
              icon_slot_template,
              /*$$scope*/
              ctx2[5],
              dirty,
              get_icon_slot_changes
            ),
            get_icon_slot_context
          );
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(icon_slot, local);
      current = true;
    },
    o(local) {
      transition_out(icon_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(div);
      }
      if (icon_slot)
        icon_slot.d(detaching);
    }
  };
}
function create_fragment(ctx) {
  let section;
  let t;
  let current;
  let if_block = (
    /*$$slots*/
    ctx[4].icon && create_if_block(ctx)
  );
  const default_slot_template = (
    /*#slots*/
    ctx[6].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[5],
    null
  );
  return {
    c() {
      section = element("section");
      if (if_block)
        if_block.c();
      t = space();
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      section = claim_element(nodes, "SECTION", { style: true, class: true });
      var section_nodes = children(section);
      if (if_block)
        if_block.l(section_nodes);
      t = claim_space(section_nodes);
      if (default_slot)
        default_slot.l(section_nodes);
      section_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_style(section, "background-color", "var(--md-sys-color-" + /*color*/
      ctx[0] + ")");
      set_style(section, "padding-top", 0.75 + /*iconSpace*/
      ctx[3] + "rem");
      set_style(
        section,
        "height",
        /*height*/
        ctx[1]
      );
      attr(section, "class", "svelte-1ab9al0");
      toggle_class(
        section,
        "shadow",
        /*shadow*/
        ctx[2]
      );
    },
    m(target, anchor) {
      insert_hydration(target, section, anchor);
      if (if_block)
        if_block.m(section, null);
      append_hydration(section, t);
      if (default_slot) {
        default_slot.m(section, null);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (
        /*$$slots*/
        ctx2[4].icon
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & /*$$slots*/
          16) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(section, t);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        32)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[5],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[5]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[5],
              dirty,
              null
            ),
            null
          );
        }
      }
      if (!current || dirty & /*color*/
      1) {
        set_style(section, "background-color", "var(--md-sys-color-" + /*color*/
        ctx2[0] + ")");
      }
      if (!current || dirty & /*height*/
      2) {
        set_style(
          section,
          "height",
          /*height*/
          ctx2[1]
        );
      }
      if (!current || dirty & /*shadow*/
      4) {
        toggle_class(
          section,
          "shadow",
          /*shadow*/
          ctx2[2]
        );
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(section);
      }
      if (if_block)
        if_block.d();
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  const $$slots = compute_slots(slots);
  let { color } = $$props;
  let { height = "auto" } = $$props;
  let { shadow = false } = $$props;
  const iconSpace = $$slots.icon ? 1.25 : 0;
  $$self.$$set = ($$props2) => {
    if ("color" in $$props2)
      $$invalidate(0, color = $$props2.color);
    if ("height" in $$props2)
      $$invalidate(1, height = $$props2.height);
    if ("shadow" in $$props2)
      $$invalidate(2, shadow = $$props2.shadow);
    if ("$$scope" in $$props2)
      $$invalidate(5, $$scope = $$props2.$$scope);
  };
  return [color, height, shadow, iconSpace, $$slots, $$scope, slots];
}
class Card extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { color: 0, height: 1, shadow: 2 });
  }
}
export {
  Card as C
};
