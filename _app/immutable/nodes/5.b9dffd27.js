import { s as safe_not_equal, n as noop } from "../chunks/utils.08e12359.js";
import { s as space, b as element, c as claim_space, f as claim_element, w as get_svelte_dataset, h as attr, i as insert_hydration, d as detach } from "../chunks/scheduler.6906c812.js";
import { S as SvelteComponent, i as init, b as create_component, d as claim_component, m as mount_component, a as transition_in, t as transition_out, e as destroy_component } from "../chunks/index.f9624644.js";
import { P as Portal } from "../chunks/Portal.e01d24b0.js";
const _page_svelte_svelte_type_style_lang = "";
function create_fragment(ctx) {
  let portal;
  let t0;
  let div1;
  let textContent = `<div class="circle svelte-1fmwfy4">Open a wallet via the left panel.</div>`;
  let current;
  portal = new Portal({
    props: { target: "content-appbar-start" }
  });
  return {
    c() {
      create_component(portal.$$.fragment);
      t0 = space();
      div1 = element("div");
      div1.innerHTML = textContent;
      this.h();
    },
    l(nodes) {
      claim_component(portal.$$.fragment, nodes);
      t0 = claim_space(nodes);
      div1 = claim_element(nodes, "DIV", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(div1) !== "svelte-rgvxvo")
        div1.innerHTML = textContent;
      this.h();
    },
    h() {
      attr(div1, "class", "container svelte-1fmwfy4");
    },
    m(target, anchor) {
      mount_component(portal, target, anchor);
      insert_hydration(target, t0, anchor);
      insert_hydration(target, div1, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(portal.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(portal.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(t0);
        detach(div1);
      }
      destroy_component(portal, detaching);
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
