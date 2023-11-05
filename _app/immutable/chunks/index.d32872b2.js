import { r as readable, w as writable } from "./index.d60672bb.js";
const portals = writable({});
function createPortal(name) {
  return readable(null, (set) => {
    let cache = void 0;
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
export {
  bindToPortal as b,
  createPortal as c
};
