import { s as safe_not_equal, e as compute_slots, c as create_slot, u as update_slot_base, g as get_all_dirty_from_scope, a as get_slot_changes } from "./utils.08e12359.js";
import { e as empty, i as insert_hydration, d as detach, b as element, s as space, f as claim_element, g as children, c as claim_space, h as attr, u as toggle_class, j as set_style, r as append_hydration } from "./scheduler.6906c812.js";
import { S as SvelteComponent, i as init, g as group_outros, t as transition_out, c as check_outros, a as transition_in } from "./index.f9624644.js";
import "./icon.8232ecae.js";
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
    ctx[13].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[12],
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
        ctx[1]
      );
      attr(
        a,
        "data-preserve-stack",
        /*preserveStack*/
        ctx[2]
      );
      attr(
        a,
        "style",
        /*styles*/
        ctx[3]
      );
      attr(a, "class", "svelte-1dtjxqp");
      toggle_class(
        a,
        "shadow",
        /*shadow*/
        ctx[0]
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
        4096)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[12],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[12]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[12],
              dirty,
              null
            ),
            null
          );
        }
      }
      if (!current || dirty & /*href*/
      2) {
        attr(
          a,
          "href",
          /*href*/
          ctx2[1]
        );
      }
      if (!current || dirty & /*preserveStack*/
      4) {
        attr(
          a,
          "data-preserve-stack",
          /*preserveStack*/
          ctx2[2]
        );
      }
      if (!current || dirty & /*styles*/
      8) {
        attr(
          a,
          "style",
          /*styles*/
          ctx2[3]
        );
      }
      if (!current || dirty & /*shadow*/
      1) {
        toggle_class(
          a,
          "shadow",
          /*shadow*/
          ctx2[0]
        );
      }
      const style_changed = dirty & /*styles*/
      8;
      if (dirty & /*styles*/
      8 || style_changed) {
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
    ctx[5].icon && create_if_block_1(ctx)
  );
  const default_slot_template = (
    /*#slots*/
    ctx[13].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[12],
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
      attr(
        section,
        "style",
        /*styles*/
        ctx[3]
      );
      attr(section, "class", "svelte-1dtjxqp");
      toggle_class(
        section,
        "shadow",
        /*shadow*/
        ctx[0]
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
        ctx2[5].icon
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & /*$$slots*/
          32) {
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
        4096)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[12],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[12]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[12],
              dirty,
              null
            ),
            null
          );
        }
      }
      if (!current || dirty & /*styles*/
      8) {
        attr(
          section,
          "style",
          /*styles*/
          ctx2[3]
        );
      }
      if (!current || dirty & /*shadow*/
      1) {
        toggle_class(
          section,
          "shadow",
          /*shadow*/
          ctx2[0]
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
    ctx[13].icon
  );
  const icon_slot = create_slot(
    icon_slot_template,
    ctx,
    /*$$scope*/
    ctx[12],
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
      attr(div, "class", "icon svelte-1dtjxqp");
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
        4096)) {
          update_slot_base(
            icon_slot,
            icon_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[12],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[12]
            ) : get_slot_changes(
              icon_slot_template,
              /*$$scope*/
              ctx2[12],
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
      ctx2[4] === "card"
    )
      return 0;
    if (
      /*type*/
      ctx2[4] === "anchor"
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
  let onColor;
  let ripple;
  let type;
  let styles;
  let { $$slots: slots = {}, $$scope } = $$props;
  const $$slots = compute_slots(slots);
  const surfaceVariantColors = [
    "surface-tint",
    "surface-container-highest",
    "surface-container-high",
    "surface-container",
    "surface-container-low",
    "surface-container-lowest",
    "surface-dim",
    "surface-bright"
  ];
  let { color } = $$props;
  let { height = "auto" } = $$props;
  let { shadow = false } = $$props;
  let { borderRadius = "1.5rem" } = $$props;
  let { maxWidth = "auto" } = $$props;
  const iconSpace = $$slots.icon ? 1.25 : 0;
  let { href = null } = $$props;
  let { preserveStack = false } = $$props;
  $$self.$$set = ($$props2) => {
    if ("color" in $$props2)
      $$invalidate(6, color = $$props2.color);
    if ("height" in $$props2)
      $$invalidate(7, height = $$props2.height);
    if ("shadow" in $$props2)
      $$invalidate(0, shadow = $$props2.shadow);
    if ("borderRadius" in $$props2)
      $$invalidate(8, borderRadius = $$props2.borderRadius);
    if ("maxWidth" in $$props2)
      $$invalidate(9, maxWidth = $$props2.maxWidth);
    if ("href" in $$props2)
      $$invalidate(1, href = $$props2.href);
    if ("preserveStack" in $$props2)
      $$invalidate(2, preserveStack = $$props2.preserveStack);
    if ("$$scope" in $$props2)
      $$invalidate(12, $$scope = $$props2.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*color*/
    64) {
      $$invalidate(10, onColor = surfaceVariantColors.includes(color) ? "surface" : color);
    }
    if ($$self.$$.dirty & /*color*/
    64) {
      $$invalidate(11, ripple = ["primary", "secondary", "error"].includes(color) ? `--md-ripple-pressed-color: var(--md-ref-palette-${color}20);` : "");
    }
    if ($$self.$$.dirty & /*href*/
    2) {
      $$invalidate(4, type = href != null ? "anchor" : "card");
    }
    if ($$self.$$.dirty & /*color, height, maxWidth, borderRadius, ripple, onColor*/
    4032) {
      $$invalidate(3, styles = `
    background-color: var(--md-sys-color-${color});
    padding-top: ${iconSpace}rem;
    height: ${height};
    max-width: ${maxWidth};
    border-radius: ${borderRadius};
    --md-focus-ring-shape: ${borderRadius};
    ${ripple}
    color: var(--md-sys-color-on-${onColor});`);
    }
  };
  return [
    shadow,
    href,
    preserveStack,
    styles,
    type,
    $$slots,
    color,
    height,
    borderRadius,
    maxWidth,
    onColor,
    ripple,
    $$scope,
    slots
  ];
}
class Card extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {
      color: 6,
      height: 7,
      shadow: 0,
      borderRadius: 8,
      maxWidth: 9,
      href: 1,
      preserveStack: 2
    });
  }
}
export {
  Card as C
};
