import { s as safe_not_equal, n as noop } from "../chunks/utils.08e12359.js";
import { b as element, f as claim_element, w as get_svelte_dataset, h as attr, i as insert_hydration, d as detach } from "../chunks/scheduler.7be6e2f1.js";
import { S as SvelteComponent, i as init } from "../chunks/index.89845fad.js";
const _page_svelte_svelte_type_style_lang = "";
function create_fragment(ctx) {
  let div1;
  let textContent = `<div class="circle svelte-1fmwfy4">Open a wallet via the left panel.</div>`;
  return {
    c() {
      div1 = element("div");
      div1.innerHTML = textContent;
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(div1) !== "svelte-rgvxvo")
        div1.innerHTML = textContent;
      this.h();
    },
    h() {
      attr(div1, "class", "container svelte-1fmwfy4");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(div1);
      }
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
