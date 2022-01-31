import {isEqual} from "./isEqual";

export const filterArray = <T>(array: T[], filter: Partial<T>) => {
    if (!array || !array.length || !(array[0]! instanceof Object)) return null;
    return array.filter((item) =>
        isEqual(Object.values(filterObj(item, Object.keys(filter) as (keyof T)[])), Object.values(filter))
    );
};

export const filterObj = <T>(obj: T, keys: (keyof T)[], values?: any[]) => {
    if (!keys && !values) return obj;
    else {
        if (keys && values) {
            const newObj: Partial<T> = {};
            keys.forEach((key, i) => {
                if (obj[key] === values[i]) newObj[key] = obj[key];
            });
            return newObj;
        }
        if (keys) {
            const newObj: Partial<T> = {};
            keys.forEach(key => newObj[key] = obj[key]);
            return newObj;
        }
    }
};
