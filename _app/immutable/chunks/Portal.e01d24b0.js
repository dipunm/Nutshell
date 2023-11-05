import { s as safe_not_equal, c as create_slot, u as update_slot_base, g as get_all_dirty_from_scope, a as get_slot_changes } from "./utils.08e12359.js";
import { b as element, f as claim_element, g as children, d as detach, j as set_style, i as insert_hydration, z as onDestroy, n as binding_callbacks, t as tick } from "./scheduler.6906c812.js";
import { S as SvelteComponent, i as init, a as transition_in, g as group_outros, t as transition_out, c as check_outros } from "./index.f9624644.js";
import { a as openPortal } from "./index.6e691c29.js";
function create_if_block(ctx) {
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[5].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[4],
    null
  );
  return {
    c() {
      if (default_slot)
        default_slot.c();
    },
    l(nodes) {
      if (default_slot)
        default_slot.l(nodes);
    },
    m(target, anchor) {
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        16)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[4],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[4]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[4],
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
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function create_fragment(ctx) {
  let div;
  let current;
  let if_block = (
    /*key*/
    ctx[1] === 0 && create_if_block(ctx)
  );
  return {
    c() {
      div = element("div");
      if (if_block)
        if_block.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { style: true });
      var div_nodes = children(div);
      if (if_block)
        if_block.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_style(div, "display", "none");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if (if_block)
        if_block.m(div, null);
      ctx[6](div);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (
        /*key*/
        ctx2[1] === 0
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & /*key*/
          2) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(div, null);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
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
        detach(div);
      }
      if (if_block)
        if_block.d();
      ctx[6](null);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let container;
  let { target } = $$props;
  let observer;
  let key = 0;
  let portal;
  function portalToTarget(target2) {
    portal == null ? void 0 : portal.close();
    $$invalidate(3, portal = openPortal(target2));
  }
  async function forceRerender() {
    $$invalidate(1, key = 1);
    await tick();
    $$invalidate(1, key = 0);
  }
  function setObserver(val) {
    observer = val;
  }
  function disconnectObserver() {
    observer == null ? void 0 : observer.disconnect();
  }
  function setupObserver(container2) {
    observer.observe(container2, { childList: true, subtree: true });
  }
  onDestroy(() => {
    observer == null ? void 0 : observer.disconnect();
    portal == null ? void 0 : portal.close();
  });
  function div_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      container = $$value;
      $$invalidate(0, container);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("target" in $$props2)
      $$invalidate(2, target = $$props2.target);
    if ("$$scope" in $$props2)
      $$invalidate(4, $$scope = $$props2.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*target*/
    4) {
      portalToTarget(target);
    }
    if ($$self.$$.dirty & /*container, portal*/
    9) {
      {
        disconnectObserver();
        if ((container == null ? void 0 : container.childNodes) ?? false) {
          const content = [...container.childNodes];
          portal == null ? void 0 : portal.tunnel(content);
          tick().then(() => {
            if (container ?? false) {
              setObserver(new MutationObserver(() => {
                forceRerender();
              }));
              setupObserver(container);
            }
          });
        } else {
          portal == null ? void 0 : portal.clear();
        }
      }
    }
  };
  return [container, key, target, portal, $$scope, slots, div_binding];
}
class Portal extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { target: 2 });
  }
}
export {
  Portal as P
};
