import { s as safe_not_equal, n as noop, b as component_subscribe } from "./utils.08e12359.js";
import { b as element, s as space, f as claim_element, g as children, d as detach, c as claim_space, j as set_style, i as insert_hydration, n as binding_callbacks } from "./scheduler.7be6e2f1.js";
import { S as SvelteComponent, i as init } from "./index.89845fad.js";
import { o as observePortal } from "./index.6e691c29.js";
function create_fragment(ctx) {
  let div0;
  let t;
  let div1;
  return {
    c() {
      div0 = element("div");
      t = space();
      div1 = element("div");
      this.h();
    },
    l(nodes) {
      div0 = claim_element(nodes, "DIV", { style: true });
      children(div0).forEach(detach);
      t = claim_space(nodes);
      div1 = claim_element(nodes, "DIV", { style: true });
      children(div1).forEach(detach);
      this.h();
    },
    h() {
      div0.hidden = true;
      set_style(div0, "display", "none");
      div1.hidden = true;
      set_style(div1, "display", "none");
    },
    m(target, anchor) {
      insert_hydration(target, div0, anchor);
      ctx[5](div0);
      insert_hydration(target, t, anchor);
      insert_hydration(target, div1, anchor);
      ctx[6](div1);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(div0);
        detach(t);
        detach(div1);
      }
      ctx[5](null);
      ctx[6](null);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let $contents;
  let { name } = $$props;
  let handleStart;
  let handleEnd;
  const contents = observePortal(name);
  component_subscribe($$self, contents, (value) => $$invalidate(4, $contents = value));
  function div0_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      handleStart = $$value;
      $$invalidate(0, handleStart);
    });
  }
  function div1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      handleEnd = $$value;
      $$invalidate(1, handleEnd);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("name" in $$props2)
      $$invalidate(3, name = $$props2.name);
  };
  $$self.$$.update = () => {
    var _a;
    if ($$self.$$.dirty & /*handleStart, handleEnd, $contents*/
    19) {
      {
        if ((handleStart ?? false) && (handleEnd ?? false)) {
          while (handleStart.nextSibling !== handleEnd) {
            (_a = handleStart.nextSibling) == null ? void 0 : _a.remove();
          }
          if (Array.isArray($contents)) {
            $contents.forEach((el) => {
              handleEnd.parentNode.insertBefore(el, handleEnd);
            });
          }
        }
      }
    }
  };
  return [handleStart, handleEnd, contents, name, $contents, div0_binding, div1_binding];
}
class PortalTarget extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { name: 3 });
  }
}
export {
  PortalTarget as P
};
