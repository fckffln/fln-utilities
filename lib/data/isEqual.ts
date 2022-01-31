/**
 * Code from GH-Gists https://gist.github.com/vicimpa/46355808a68496978530a15cfda70880
 * author Vicimpa
 */

export const isEqual = (a: any, b: any) => {
    const toEqual: [any, any][] = [[a, b]];
    let iteratorNumber = 0;

    for (let j = 0; j < toEqual.length; j++) {
        iteratorNumber++;
        const [a, b] = toEqual[j];
        if (a === b) continue;

        if (a === null || b === null)
            return false;

        if (typeof a === 'object' && typeof b === 'object') {
            if (Array.isArray(a) && Array.isArray(b)) {
                if (a.length !== b.length)
                    return false;

                for (let i = 0; i < a.length; i++)
                    toEqual.push([a[i], b[i]]);
            } else {
                for (let key in a)
                    toEqual.push([a[key], b[key]]);
            }
            continue;
        }

        if (typeof a === 'bigint' && typeof b === 'bigint') {
            if (a.toString() !== b.toString())
                return false;

            continue;
        }

        if (a instanceof RegExp && b instanceof RegExp) {
            if (a.toString() !== b.toString())
                return false;

            continue;
        }

        if (a instanceof Function && b instanceof Function) {
            if (a.toString() !== b.toString())
                return false;

            continue;
        }

        if (a !== b) return false;
    }

    return true;
};
