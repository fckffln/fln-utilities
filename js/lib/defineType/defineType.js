"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineType = void 0;
const primitiveTypes = [
    'Number',
    'String',
    'Boolean',
    'Undefined',
    'BigInt',
    'Symbol',
    'Function'
];
const defineType = (anything, options) => {
    if (anything === undefined)
        return 'undefined';
    if (anything === null)
        return 'null';
    if (Array.isArray(anything))
        return 'array';
    const typeFactory = anything.constructor.name;
    const type = primitiveTypes.includes(typeFactory) ? 'primitive' : 'object';
    if (type === 'primitive')
        return typeof anything;
    if (typeFactory !== 'Object')
        return (options === null || options === void 0 ? void 0 : options.classnames) ? typeFactory : 'class';
    return type;
};
exports.defineType = defineType;
let obj = {
    a: [4, 6, 8],
    b: {
        a: { a: 5 }
    },
    c: { a: 5, b: 7 }
};
let result = (0, exports.defineType)(obj, { recursion: true });
console.log(result);
