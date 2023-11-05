import { readable, writable } from "svelte/store";

type Contents = ChildNode[] | null;

const portals = writable({} as { [key: string]: Contents });

export function createPortal(name: string) {
    return readable<Contents>(null, (set) => {
        let cache = null as Contents;
        portals.subscribe(list => {
            if (list[name] !== cache) {
                cache = list[name];
                set(list[name]);
            }
        });
    });
}

export function bindToPortal(name: string, components: Contents) {
    portals.update((list => {
        return { ...list, [name]: components };
    }));
}

export function appendToPortal(name: string, components: ChildNode[]) {
    portals.update(list => {
        return { ...list, [name]: [...(list[name] ?? []), ...components]}
    });
}

export function portalActive(name: string) {
    return readable<boolean>(false, (set) => {
        let cache = false;
        portals.subscribe(list => {
            const active = (list[name]?.length ?? 0) > 0
            if (active !== cache) {
                cache = active;
                set(active);
            }
        });
    });
}