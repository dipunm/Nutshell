import { CashuMint, CashuWallet, getDecodedToken } from "@cashu/cashu-ts";

export function isCashuToken(token: string) {
    return token.startsWith('cashuA');
}

export function readToken(encoded: string) {
    if (!encoded.startsWith('cashuA')) {
        throw new Error('Cannot read token: cannot recognize token format.')
    }

    const { token: decoded } = getDecodedToken(encoded);
    if (decoded.length !== 1) {
        throw new Error('Cannot read token: unexpected number of token entries found, expected 1.');
    }
    const [ token ] = decoded;
    
    return { 
        amount: token.proofs.reduce((sum, proof) => sum + proof.amount, 0),
        mint: token.mint, 
        proofs: token.proofs 
    };
}

export async function acceptToken(encoded: string) {
    const token = readToken(encoded);

    const keys = token.proofs.reduce((keys, proof) => [...keys, proof.id], [] as string[]);
    const wallet = new CashuWallet(new CashuMint(token!.mint), keys);
    const result = await wallet.receive(encoded);
    if (typeof result.tokensWithErrors === 'undefined') {
        return {
            token: result.token,
            newKeys: result.newKeys,
        };
    }

    throw new Error('Unable to accept token: unknown reason.');
}

