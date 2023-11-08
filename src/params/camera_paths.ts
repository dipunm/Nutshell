import type { ParamMatcher } from "@sveltejs/kit";

export const match: ParamMatcher = (param) => {
    switch (true) {
        case param === '':
        case /^accounts\/\d+\/spend$/.test(param):
        case /^accounts\/\d+\/deposit$/.test(param):
            return true;        
        default:
            return false;
    }
}