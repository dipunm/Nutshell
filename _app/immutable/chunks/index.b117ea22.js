import { b as beforeNavigate, g as goto } from "./navigation.72f80f28.js";
import { f as get_store_value } from "./utils.08e12359.js";
import { w as writable } from "./index.d60672bb.js";
import { p as page } from "./stores.a7179f18.js";
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
  let node = element;
  while (node && node !== document.documentElement) {
    if (keep_focus === null)
      keep_focus = node.getAttribute(`data-sveltekit-keepfocus`);
    if (noscroll === null)
      noscroll = node.getAttribute(`data-sveltekit-noscroll`);
    if (reload === null)
      reload = node.getAttribute(`data-sveltekit-reload`);
    node = node.assignedSlot ?? node.parentNode;
    if ((node == null ? void 0 : node.nodeType) === 11)
      node = node.host;
  }
  return {
    keepFocus: getOptionState(keep_focus),
    noScroll: getOptionState(noscroll),
    reload: getOptionState(reload)
  };
}
const getRelativeUrl = (url) => `${url.pathname}${url.search}${url.hash}`;
function promoteToElement(target) {
  return true;
}
function isHistoryStateInitialized(state) {
  return typeof state === "object" && state !== null && "stack" in state && Array.isArray(state.stack) && state.stack.length > 0;
}
function assertHistoryStateInitialized(state) {
  if (!isHistoryStateInitialized(state)) {
    throw new Error(`History API not properly configured! Ensure that initializeHistoryStack() is called when the page loads.`);
  }
}
function matchesCurrentOrigin(url) {
  return url.protocol === window.location.protocol && url.host === window.location.host;
}
const container = document.documentElement;
const createClickedAnchorTracker = () => {
  const lastClickedLink = writable(null);
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
  return lastClickedLink;
};
function interceptAnchorSameOrigin(handler, { lastClickedAnchor }) {
  beforeNavigate(async (nav) => {
    if (nav.type === "link") {
      if (nav.to === null)
        return;
      if (!matchesCurrentOrigin(nav.to.url)) {
        return;
      }
      const anchor = get_store_value(lastClickedAnchor);
      await handler({ url: nav.to.url, anchor, preventDefault: () => nav.cancel() });
    }
  });
}
function interceptAnchorWithProtocol(handler, { protocol, lastClickedAnchor }) {
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
      const anchor = get_store_value(lastClickedAnchor);
      handler({ url: new URL(href, window.location.href), anchor, preventDefault: () => {
        event.preventDefault();
        event.stopImmediatePropagation();
      } });
    }
  });
}
function getPopUrl() {
  const url = get_store_value(page).url;
  if (url.search !== "" || url.hash !== "") {
    return url.pathname;
  } else {
    return url.pathname.replace(/\/[^/]+\/?$/, "");
  }
}
async function initializeHistoryStack() {
  if (!isHistoryStateInitialized(history.state)) {
    const stack = [getRelativeUrl(window.location)];
    return await goto(window.location.toString(), {
      replaceState: true,
      state: {
        ...history.state,
        stack,
        preservedIndexes: []
      }
    });
  }
}
const handleRouterLinkIntercept = async ({ url, preventDefault }) => {
  switch (url.pathname) {
    case "pop-stack":
      preventDefault();
      return await navPopStack();
    default:
      throw new Error(`Unable to handle router command, URI was unrecognized: '${url.toString()}'.`);
  }
};
const anchorHandler = async ({ url, anchor, preventDefault }) => {
  const {
    preserveStack = false,
    reload = false,
    keepFocus = false,
    noScroll = false
  } = anchor === null ? {} : {
    preserveStack: getOptionState((anchor == null ? void 0 : anchor.getAttribute("data-preserve-stack")) ?? "false"),
    ...getRouterOptions(anchor)
  };
  if (reload)
    return;
  preventDefault();
  await navPushStackInternal(url.toString(), {
    preserveStack,
    keepFocus,
    noScroll
  });
};
function activateNavigationStackBehaviour() {
  initializeHistoryStack();
  const lastClickedAnchor = createClickedAnchorTracker();
  interceptAnchorWithProtocol(
    handleRouterLinkIntercept,
    { protocol: "router:", lastClickedAnchor }
  );
  interceptAnchorSameOrigin(
    anchorHandler,
    { lastClickedAnchor }
  );
}
function navCanPopStack() {
  assertHistoryStateInitialized(history.state);
  return history.state.stack.length > 1;
}
async function navPopStack() {
  assertHistoryStateInitialized(history.state);
  if (history.state.stack.length > 1) {
    return await navPushStackInternal(history.state.stack[history.state.stack.length - 2], { breakPreserves: true });
  } else {
    return await navPushStackInternal(getPopUrl(), { breakPreserves: true });
  }
}
async function navPushStackInternal(url, opts = {}) {
  const newUrl = new URL(url, window.location.href);
  if (!matchesCurrentOrigin(newUrl)) {
    throw new Error("Navigating away from site cannot be performed by navPushStack.");
  }
  assertHistoryStateInitialized(history.state);
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
  navPopStack as b,
  navCanPopStack as n
};
