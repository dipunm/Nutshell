import { readable, writable } from "svelte/store";

const portals = writable({} as { [key: string]: any });

export function createPortal(name: string) {
    return readable<Element[] | null>(null, (set) => {
        let cache = undefined as unknown;
        portals.subscribe(list => {
            if (list[name] !== cache) {
                cache = list[name];
                set(list[name]);
            }
        })
    });
}

export function bindToPortal(name: string, component: Element[] | null) {
    portals.update((list => {
        return { ...list, [name]: component };
    }));
}
