import { s as safe_not_equal, e as compute_slots, c as create_slot, u as update_slot_base, g as get_all_dirty_from_scope, a as get_slot_changes } from "./utils.08e12359.js";
import { e as empty, i as insert_hydration, d as detach, b as element, s as space, f as claim_element, g as children, c as claim_space, h as attr, j as set_style, u as toggle_class, r as append_hydration } from "./scheduler.6906c812.js";
import { S as SvelteComponent, i as init, g as group_outros, t as transition_out, c as check_outros, a as transition_in } from "./index.f9624644.js";
const Card_svelte_svelte_type_style_lang = "";
const get_icon_slot_changes = (dirty) => ({});
const get_icon_slot_context = (ctx) => ({});
function create_if_block_2(ctx) {
  let a;
  let md_focus_ring;
  let t0;
  let md_ripple;
  let t1;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[10].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[9],
    null
  );
  return {
    c() {
      a = element("a");
      md_focus_ring = element("md-focus-ring");
      t0 = space();
      md_ripple = element("md-ripple");
      t1 = space();
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      a = claim_element(nodes, "A", {
        href: true,
        "data-preserve-stack": true,
        style: true,
        class: true
      });
      var a_nodes = children(a);
      md_focus_ring = claim_element(a_nodes, "MD-FOCUS-RING", {});
      children(md_focus_ring).forEach(detach);
      t0 = claim_space(a_nodes);
      md_ripple = claim_element(a_nodes, "MD-RIPPLE", {});
      children(md_ripple).forEach(detach);
      t1 = claim_space(a_nodes);
      if (default_slot)
        default_slot.l(a_nodes);
      a_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(
        a,
        "href",
        /*href*/
        ctx[4]
      );
      attr(
        a,
        "data-preserve-stack",
        /*preserveStack*/
        ctx[5]
      );
      set_style(a, "background-color", "var(--md-sys-color-" + /*color*/
      ctx[0] + ")");
      set_style(
        a,
        "height",
        /*height*/
        ctx[1]
      );
      set_style(
        a,
        "border-radius",
        /*borderRadius*/
        ctx[3]
      );
      set_style(
        a,
        "--md-focus-ring-shape",
        /*borderRadius*/
        ctx[3]
      );
      attr(a, "class", "svelte-mak2o4");
      toggle_class(
        a,
        "shadow",
        /*shadow*/
        ctx[2]
      );
      set_style(a, "position", `relative`);
    },
    m(target, anchor) {
      insert_hydration(target, a, anchor);
      append_hydration(a, md_focus_ring);
      append_hydration(a, t0);
      append_hydration(a, md_ripple);
      append_hydration(a, t1);
      if (default_slot) {
        default_slot.m(a, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        512)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[9],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[9]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[9],
              dirty,
              null
            ),
            null
          );
        }
      }
      if (!current || dirty & /*href*/
      16) {
        attr(
          a,
          "href",
          /*href*/
          ctx2[4]
        );
      }
      if (!current || dirty & /*preserveStack*/
      32) {
        attr(
          a,
          "data-preserve-stack",
          /*preserveStack*/
          ctx2[5]
        );
      }
      if (!current || dirty & /*color*/
      1) {
        set_style(a, "background-color", "var(--md-sys-color-" + /*color*/
        ctx2[0] + ")");
      }
      if (!current || dirty & /*height*/
      2) {
        set_style(
          a,
          "height",
          /*height*/
          ctx2[1]
        );
      }
      if (!current || dirty & /*borderRadius*/
      8) {
        set_style(
          a,
          "border-radius",
          /*borderRadius*/
          ctx2[3]
        );
      }
      if (!current || dirty & /*borderRadius*/
      8) {
        set_style(
          a,
          "--md-focus-ring-shape",
          /*borderRadius*/
          ctx2[3]
        );
      }
      if (!current || dirty & /*shadow*/
      4) {
        toggle_class(
          a,
          "shadow",
          /*shadow*/
          ctx2[2]
        );
      }
      const style_changed = dirty & /*color, height, borderRadius*/
      11;
      if (dirty & /*color, height, borderRadius*/
      11 || style_changed) {
        set_style(a, "position", `relative`);
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
        detach(a);
      }
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function create_if_block(ctx) {
  let section;
  let t;
  let current;
  let if_block = (
    /*$$slots*/
    ctx[8].icon && create_if_block_1(ctx)
  );
  const default_slot_template = (
    /*#slots*/
    ctx[10].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[9],
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
      ctx[7] + "rem");
      set_style(
        section,
        "height",
        /*height*/
        ctx[1]
      );
      set_style(
        section,
        "border-radius",
        /*borderRadius*/
        ctx[3]
      );
      attr(section, "class", "svelte-mak2o4");
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
    p(ctx2, dirty) {
      if (
        /*$$slots*/
        ctx2[8].icon
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & /*$$slots*/
          256) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_1(ctx2);
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
        512)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[9],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[9]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[9],
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
      if (!current || dirty & /*borderRadius*/
      8) {
        set_style(
          section,
          "border-radius",
          /*borderRadius*/
          ctx2[3]
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
function create_if_block_1(ctx) {
  let div;
  let current;
  const icon_slot_template = (
    /*#slots*/
    ctx[10].icon
  );
  const icon_slot = create_slot(
    icon_slot_template,
    ctx,
    /*$$scope*/
    ctx[9],
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
      attr(div, "class", "icon svelte-mak2o4");
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
        512)) {
          update_slot_base(
            icon_slot,
            icon_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[9],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[9]
            ) : get_slot_changes(
              icon_slot_template,
              /*$$scope*/
              ctx2[9],
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
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block, create_if_block_2];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (
      /*type*/
      ctx2[6] === "card"
    )
      return 0;
    if (
      /*type*/
      ctx2[6] === "anchor"
    )
      return 1;
    return -1;
  }
  if (~(current_block_type_index = select_block_type(ctx))) {
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  }
  return {
    c() {
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if (if_block)
        if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if (~current_block_type_index) {
        if_blocks[current_block_type_index].m(target, anchor);
      }
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if (~current_block_type_index) {
          if_blocks[current_block_type_index].p(ctx2, dirty);
        }
      } else {
        if (if_block) {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
        }
        if (~current_block_type_index) {
          if_block = if_blocks[current_block_type_index];
          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block.c();
          } else {
            if_block.p(ctx2, dirty);
          }
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        } else {
          if_block = null;
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(if_block_anchor);
      }
      if (~current_block_type_index) {
        if_blocks[current_block_type_index].d(detaching);
      }
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let type;
  let { $$slots: slots = {}, $$scope } = $$props;
  const $$slots = compute_slots(slots);
  let { color } = $$props;
  let { height = "auto" } = $$props;
  let { shadow = false } = $$props;
  let { borderRadius = "1.5rem" } = $$props;
  const iconSpace = $$slots.icon ? 1.25 : 0;
  let { href = null } = $$props;
  let { preserveStack = false } = $$props;
  $$self.$$set = ($$props2) => {
    if ("color" in $$props2)
      $$invalidate(0, color = $$props2.color);
    if ("height" in $$props2)
      $$invalidate(1, height = $$props2.height);
    if ("shadow" in $$props2)
      $$invalidate(2, shadow = $$props2.shadow);
    if ("borderRadius" in $$props2)
      $$invalidate(3, borderRadius = $$props2.borderRadius);
    if ("href" in $$props2)
      $$invalidate(4, href = $$props2.href);
    if ("preserveStack" in $$props2)
      $$invalidate(5, preserveStack = $$props2.preserveStack);
    if ("$$scope" in $$props2)
      $$invalidate(9, $$scope = $$props2.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*href*/
    16) {
      $$invalidate(6, type = href != null ? "anchor" : "card");
    }
  };
  return [
    color,
    height,
    shadow,
    borderRadius,
    href,
    preserveStack,
    type,
    iconSpace,
    $$slots,
    $$scope,
    slots
  ];
}
class Card extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {
      color: 0,
      height: 1,
      shadow: 2,
      borderRadius: 3,
      href: 4,
      preserveStack: 5
    });
  }
}
export {
  Card as C
};
