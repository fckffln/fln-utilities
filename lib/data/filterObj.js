"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterObj = exports.filterArray = void 0;
const isEqual_1 = require("./isEqual");
const filterArray = (array, filter) => {
    if (!array || !array.length || !(array[0] instanceof Object))
        return null;
    return array.filter((item) => (0, isEqual_1.isEqual)(Object.values((0, exports.filterObj)(item, Object.keys(filter))), Object.values(filter)));
};
exports.filterArray = filterArray;
const filterObj = (obj, keys, values) => {
    if (!keys && !values)
        return obj;
    else {
        if (keys && values) {
            const newObj = {};
            keys.forEach((key, i) => {
                if (obj[key] === values[i])
                    newObj[key] = obj[key];
            });
            return newObj;
        }
        if (keys) {
            const newObj = {};
            keys.forEach(key => newObj[key] = obj[key]);
            return newObj;
        }
    }
};
exports.filterObj = filterObj;
