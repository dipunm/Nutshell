import { goto } from '$app/navigation';
import { page } from '$app/stores';
import { isCashuToken, readToken } from '$lib/cashu/token.js';
import type { Proof } from '@cashu/cashu-ts';

async function fetchToken(data: string) {
    if (isCashuToken(data)) {
        return readToken(data);
    }
}

async function saveOffer(token: { amount: number; mint: string; proofs: Proof[]; }) {

}

export async function load({ url }) {
    const unsubscribe = page.subscribe(async ($page) => {
        if (!$page.url) {
            return;
        }
        const payload = $page.url.hash;
        const token = await fetchToken(payload);
        const id = await saveOffer(token!);
        unsubscribe();
        goto(`/offer/${id}`, {
            replaceState: true,
            noScroll: false,
            invalidateAll: true,
            keepFocus: true,
        });
    });
}
