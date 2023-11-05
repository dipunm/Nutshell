import { readable, writable } from "svelte/store";

type Contents = ChildNode[] | null;

const portals = writable({} as { [key: string]: Contents });

export function observePortal(name: string) {
    return readable<Contents>(null, (set) => {
        let cache = null as Contents;
        portals.subscribe(list => {
            if (list[name] !== cache) {
                cache = list[name] ?? null;
                set(cache);
            }
        });
    });
}

export function portalActive(name: string) {
    return readable<boolean>(false, (set) => {
        let cache = false;
        portals.subscribe(list => {
            const active = Object.hasOwn(list, name);
            if (active !== cache) {
                cache = active;
                set(cache);
            }
        });
    });
}

export type Portal = ReturnType<typeof openPortal>;
export function openPortal(name: string) {
    if (!name) return null;

    portals.update((list => {
        return { ...list, [name]: null };
    }));

    return {
        tunnel(components: Contents) {
            portals.update((list => {
                return { ...list, [name]: components };
            }));
        },
        clear() {
            this.tunnel(null);
        },
        close() {
            portals.update((list => {
                const { [name]: x, ...rest } = list;
                return { ...rest };
            }));
        }
    }
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

