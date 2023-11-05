import { b as beforeNavigate, g as goto } from "./navigation.b7bfb1b7.js";
import { p as page } from "./stores.34c45022.js";
import { w as writable } from "./index.d60672bb.js";
import { f as get_store_value } from "./utils.08e12359.js";
const initializeHistoryStack = async () => {
  var _a, _b;
  if (!Array.isArray((_a = history.state) == null ? void 0 : _a.stack) || ((_b = history.state) == null ? void 0 : _b.stack.length) === 0) {
    const stack = [getRelativeUrl(window.location)];
    await goto(window.location.toString(), {
      replaceState: true,
      state: {
        ...history.state,
        stack
      }
    });
  }
};
const stackPopUrl = writable("");
page.subscribe((p) => {
  if (!(p == null ? void 0 : p.url))
    return;
  if (p.url.search !== "" || p.url.hash !== "") {
    stackPopUrl.set(p.url.pathname);
  } else {
    stackPopUrl.set(p.url.pathname.replace(/\/[^/]+\/?$/, ""));
  }
});
const getRelativeUrl = (url) => `${url.pathname}${url.search}${url.hash}`;
const activateNavigationStackBehaviour = () => {
  initializeHistoryStack();
  beforeNavigate(async (nav) => {
    if (nav.type === "link") {
      if (nav.to === null)
        return;
      if (nav.to.url.protocol !== window.location.protocol || nav.to.url.host !== window.location.host) {
        return;
      }
      nav.cancel();
      await stackGo(nav.to.url.toString());
    }
  });
};
async function stackBack() {
  return await stackGo(get_store_value(stackPopUrl));
}
async function stackGo(url, opts = {}) {
  var _a, _b;
  const newUrl = new URL(url, window.location.href);
  if (newUrl.protocol !== window.location.protocol || newUrl.host !== window.location.host) {
    throw new Error("Navigating away from site, cannot be performed by stackGo.");
  }
  if (!Array.isArray((_a = history.state) == null ? void 0 : _a.stack) || ((_b = history.state) == null ? void 0 : _b.stack.length) === 0) {
    throw new Error(`History API not properly configured!`);
  }
  const { stack } = history.state;
  const newPath = getRelativeUrl(newUrl);
  let commonIndex = stack.findLastIndex((path) => newPath.startsWith(path));
  while (true) {
    if (commonIndex < 0)
      break;
    let commonPathHasQS = new URL(
      stack[commonIndex],
      window.location.href
    ).search !== "";
    if (!commonPathHasQS) {
      break;
    }
    commonIndex--;
  }
  let backCount = 0;
  let replace = false;
  if (commonIndex === -1) {
    backCount = stack.length - 1;
    replace = true;
  } else {
    backCount = stack.length - commonIndex - 1;
    if (stack[commonIndex] === newPath) {
      replace = true;
    } else if (backCount === 1) {
      backCount = 0;
      replace = true;
    }
  }
  const go = async () => {
    const newStack = replace ? [...stack.slice(0, commonIndex), getRelativeUrl(newUrl)] : [...stack.slice(0, commonIndex + 1), getRelativeUrl(newUrl)];
    await goto(url, {
      ...opts ?? {},
      replaceState: replace,
      state: {
        ...history.state,
        ...(opts == null ? void 0 : opts.state) ?? {},
        stack: newStack
      }
    });
  };
  if (backCount > 0) {
    const handler = () => {
      window.removeEventListener("popstate", handler);
      go();
    };
    window.addEventListener("popstate", handler);
    history.go(-backCount);
  } else {
    await go();
  }
}
export {
  activateNavigationStackBehaviour as a,
  stackGo as b,
  stackBack as c,
  stackPopUrl as s
};
