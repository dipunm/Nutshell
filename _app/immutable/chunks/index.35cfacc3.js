import { r as readable, w as writable } from "./index.d60672bb.js";
const portals = writable({});
function createPortal(name) {
  return readable(null, (set) => {
    let cache = null;
    portals.subscribe((list) => {
      if (list[name] !== cache) {
        cache = list[name];
        set(list[name]);
      }
    });
  });
}
function bindToPortal(name, components) {
  portals.update((list) => {
    return { ...list, [name]: components };
  });
}
function portalActive(name) {
  return readable(false, (set) => {
    let cache = false;
    portals.subscribe((list) => {
      var _a;
      const active = (((_a = list[name]) == null ? void 0 : _a.length) ?? 0) > 0;
      if (active !== cache) {
        cache = active;
        set(active);
      }
    });
  });
}
export {
  bindToPortal as b,
  createPortal as c,
  portalActive as p
};
