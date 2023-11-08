import { b as beforeNavigate, g as goto } from "./navigation.83baf1cf.js";
import { p as page } from "./stores.aeaee850.js";
import { w as writable } from "./index.d60672bb.js";
import { f as get_store_value } from "./utils.08e12359.js";
function getOptionState(value) {
  switch (value) {
    case "":
    case "true":
      return true;
    case "off":
    case "false":
    default:
      return false;
  }
}
function getRouterOptions(element) {
  let keep_focus = null;
  let noscroll = null;
  let reload = null;
  let replace_state = null;
  let node = element;
  while (node && node !== document.documentElement) {
    if (keep_focus === null)
      keep_focus = node.getAttribute(`data-sveltekit-keepfocus`);
    if (noscroll === null)
      noscroll = node.getAttribute(`data-sveltekit-noscroll`);
    if (reload === null)
      reload = node.getAttribute(`data-sveltekit-reload`);
    if (replace_state === null)
      replace_state = node.getAttribute(`data-sveltekit-replacestate`);
    node = node.assignedSlot ?? node.parentNode;
    if ((node == null ? void 0 : node.nodeType) === 11)
      node = node.host;
  }
  return {
    keepFocus: getOptionState(keep_focus),
    noScroll: getOptionState(noscroll),
    reload: getOptionState(reload),
    replaceState: getOptionState(replace_state)
  };
}
const getRelativeUrl = (url) => `${url.pathname}${url.search}${url.hash}`;
function promoteToElement(target) {
  return true;
}
const container = document.documentElement;
const lastClickedLink = writable(null);
const initClickedAnchorTracker = () => {
  container.addEventListener("click", (event) => {
    if (event.button || event.which !== 1)
      return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)
      return;
    if (event.defaultPrevented)
      return;
    let anchorElement = event.composedPath()[0];
    while (anchorElement && anchorElement !== container) {
      if (anchorElement.nodeName.toUpperCase() === "A" && anchorElement.hasAttribute("href")) {
        break;
      }
      anchorElement = anchorElement.assignedSlot ?? anchorElement.parentNode;
    }
    if ((anchorElement == null ? void 0 : anchorElement.nodeType) === 11)
      anchorElement = anchorElement.host;
    lastClickedLink.set(anchorElement);
  }, { passive: true, capture: true });
};
function interceptAnchorWithProtocol(protocol, handler) {
  container.addEventListener("click", function(event) {
    let element = event.composedPath()[0];
    while (element && element.nodeName !== "A") {
      element = element.parentNode;
      if (element === container)
        break;
    }
    if (!element || element.nodeName !== "A" || !promoteToElement())
      return;
    const href = element.getAttribute("href");
    if (href && href.startsWith(`${protocol}`)) {
      event.preventDefault();
      event.stopImmediatePropagation();
      handler(new URL(href, window.location.href));
    }
  });
}
const initializeHistoryStack = async () => {
  var _a, _b;
  if (!Array.isArray((_a = history.state) == null ? void 0 : _a.stack) || ((_b = history.state) == null ? void 0 : _b.stack.length) === 0) {
    const stack = [getRelativeUrl(window.location)];
    await goto(window.location.toString(), {
      replaceState: true,
      state: {
        ...history.state,
        stack,
        preservedIndexes: []
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
    stackPopUrl.set("/" + p.url.pathname.replace(/\/[^/]+\/?$/, "").replace(/^\//, ""));
  }
});
function stackContainsParent() {
  var _a, _b;
  if (!Array.isArray((_a = history.state) == null ? void 0 : _a.stack) || ((_b = history.state) == null ? void 0 : _b.stack.length) === 0) {
    throw new Error(`History API not properly configured! Ensure that initializeHistoryStack() is called when the page loads.`);
  }
  return history.state.stack.length > 1;
}
const activateNavigationStackBehaviour = () => {
  initializeHistoryStack();
  initClickedAnchorTracker();
  interceptAnchorWithProtocol("router:", async (url) => {
    switch (url.pathname) {
      case "pop-stack":
        return await stackBack();
      default:
        throw new Error(`Unable to handle router command, URI was unrecognized: '${url.toString()}'.`);
    }
  });
  beforeNavigate(async (nav) => {
    if (nav.type === "link") {
      if (nav.to === null)
        return;
      if (nav.to.url.protocol !== window.location.protocol || nav.to.url.host !== window.location.host) {
        return;
      }
      const anchor = get_store_value(lastClickedLink);
      const {
        preserveStack = false,
        reload = false,
        keepFocus = false,
        noScroll = false,
        replaceState = false
      } = anchor === null ? {} : {
        preserveStack: getOptionState((anchor == null ? void 0 : anchor.getAttribute("data-preserve-stack")) ?? "false"),
        ...getRouterOptions(anchor)
      };
      if (reload)
        return;
      nav.cancel();
      await stackGoInternal(nav.to.url.toString(), {
        preserveStack,
        keepFocus,
        noScroll,
        replaceState
      });
    }
  });
};
async function stackBack() {
  var _a, _b;
  if (!Array.isArray((_a = history.state) == null ? void 0 : _a.stack) || ((_b = history.state) == null ? void 0 : _b.stack.length) === 0) {
    throw new Error(`History API not properly configured! Ensure that initializeHistoryStack() is called when the page loads.`);
  }
  if (history.state.stack.length > 1) {
    return await stackGoInternal(history.state.stack[history.state.stack.length - 2], { breakPreserves: true });
  } else {
    return await stackGoInternal(get_store_value(stackPopUrl), { breakPreserves: true });
  }
}
async function stackGoInternal(url, opts = {}) {
  var _a, _b;
  const newUrl = new URL(url, window.location.href);
  if (newUrl.protocol !== window.location.protocol || newUrl.host !== window.location.host) {
    throw new Error("Navigating away from site, cannot be performed by stackGo.");
  }
  if (!Array.isArray((_a = history.state) == null ? void 0 : _a.stack) || ((_b = history.state) == null ? void 0 : _b.stack.length) === 0) {
    throw new Error(`History API not properly configured! Ensure that initializeHistoryStack() is called when the page loads.`);
  }
  if (opts.preserveStack && opts.breakPreserves) {
    throw new Error(`Options 'preserveStack' and 'breakPreserves' cannot both be true.`);
  }
  const { stack, preservedIndexes = [] } = history.state;
  const [preservedCount, mutableStack] = (() => {
    if (opts.breakPreserves) {
      return [0, stack.slice(0)];
    } else {
      let preservedCount2 = 0;
      if (opts.preserveStack) {
        preservedCount2 = stack.length;
      } else if (preservedIndexes.length > 0) {
        preservedCount2 = preservedIndexes[preservedIndexes.length - 1] + 1;
      }
      return [
        preservedCount2,
        stack.slice(preservedCount2)
      ];
    }
  })();
  const newPath = getRelativeUrl(newUrl);
  let commonIndex = mutableStack.findLastIndex((path) => newPath.startsWith(path));
  while (true) {
    if (commonIndex < 0)
      break;
    let commonPathHasQS = new URL(
      mutableStack[commonIndex],
      window.location.href
    ).search !== "";
    if (!commonPathHasQS) {
      break;
    }
    commonIndex--;
  }
  let backCount = 0;
  let replace = false;
  let sameUrl = false;
  if (commonIndex === -1 && mutableStack.length > 0) {
    backCount = mutableStack.length - 1;
    replace = true;
  } else if (commonIndex === -1) {
    backCount = 0;
    replace = false;
  } else {
    backCount = mutableStack.length - commonIndex - 1;
    sameUrl = mutableStack[commonIndex] === newPath;
    if (sameUrl) {
      replace = true;
    } else if (backCount === 1) {
      backCount = 0;
      replace = true;
    }
  }
  const go = async () => {
    const remainderCount = commonIndex + (sameUrl ? 0 : 1);
    const newStack = [
      ...stack.slice(0, preservedCount),
      ...mutableStack.slice(0, remainderCount),
      getRelativeUrl(newUrl)
    ];
    const newPreservedIndexes = [
      ...opts.breakPreserves ? preservedIndexes.filter((i) => i < remainderCount) : preservedIndexes,
      ...opts.preserveStack ? [preservedCount + remainderCount - 1] : []
    ];
    await goto(url, {
      ...opts ?? {},
      replaceState: replace,
      state: {
        ...history.state,
        ...(opts == null ? void 0 : opts.state) ?? {},
        stack: newStack,
        preservedIndexes: newPreservedIndexes
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
  stackBack as b,
  stackContainsParent as s
};
