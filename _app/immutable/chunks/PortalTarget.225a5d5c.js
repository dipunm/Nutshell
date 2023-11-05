import { s as safe_not_equal, n as noop, b as component_subscribe } from "./utils.08e12359.js";
import { b as element, f as claim_element, g as children, d as detach, j as set_style, i as insert_hydration, n as binding_callbacks } from "./scheduler.7be6e2f1.js";
import { S as SvelteComponent, i as init } from "./index.89845fad.js";
import { c as createPortal } from "./index.d32872b2.js";
function create_fragment(ctx) {
  let div;
  return {
    c() {
      div = element("div");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { style: true });
      children(div).forEach(detach);
      this.h();
    },
    h() {
      set_style(div, "display", "none");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      ctx[5](div);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(div);
      }
      ctx[5](null);
    }
  };
}
function insertAfter(newNode, referenceNode) {
  if (referenceNode.nextSibling) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  } else {
    referenceNode.parentNode.appendChild(newNode);
  }
}
function instance($$self, $$props, $$invalidate) {
  let $contents;
  let { name } = $$props;
  let handle;
  const contents = createPortal(name);
  component_subscribe($$self, contents, (value) => $$invalidate(4, $contents = value));
  let olderContents = $contents;
  function div_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      handle = $$value;
      $$invalidate(0, handle);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("name" in $$props2)
      $$invalidate(2, name = $$props2.name);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*handle, olderContents, $contents*/
    25) {
      {
        if ((handle ?? false) && olderContents !== $contents) {
          if (Array.isArray(olderContents)) {
            olderContents.forEach((el) => el.remove());
          }
          if (Array.isArray($contents)) {
            $contents.reverse().forEach((el) => {
              insertAfter(el, handle);
            });
          }
          $$invalidate(3, olderContents = $contents);
        }
      }
    }
  };
  return [handle, contents, name, olderContents, $contents, div_binding];
}
class PortalTarget extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { name: 2 });
  }
}
export {
  PortalTarget as P
};
