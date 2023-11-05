import { r as readable, w as writable } from "./index.d60672bb.js";
const portals = writable({});
function observePortal(name) {
  return readable(null, (set) => {
    let cache = null;
    portals.subscribe((list) => {
      if (list[name] !== cache) {
        cache = list[name] ?? null;
        set(cache);
      }
    });
  });
}
function portalActive(name) {
  return readable(false, (set) => {
    let cache = false;
    portals.subscribe((list) => {
      const active = Object.hasOwn(list, name);
      if (active !== cache) {
        cache = active;
        set(cache);
      }
    });
  });
}
function openPortal(name) {
  if (!name)
    return null;
  portals.update((list) => {
    return { ...list, [name]: null };
  });
  return {
    tunnel(components) {
      portals.update((list) => {
        return { ...list, [name]: components };
      });
    },
    clear() {
      this.tunnel(null);
    },
    close() {
      portals.update((list) => {
        const { [name]: x, ...rest } = list;
        return { ...rest };
      });
    }
  };
}
export {
  openPortal as a,
  observePortal as o,
  portalActive as p
};
