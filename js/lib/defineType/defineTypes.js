"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineTypes = exports.defineTypeArray = void 0;
const defineType_1 = require("./defineType");
function defineTypeArray(...args) {
    const arrayTypes = [];
    args.forEach(arg => {
        arrayTypes.push((0, defineType_1.defineType)(arg));
    });
    return arrayTypes;
}
exports.defineTypeArray = defineTypeArray;
function defineTypes(args, options) {
    const arrayTypes = [];
    args.forEach(arg => {
        arrayTypes.push((0, defineType_1.defineType)(arg), options ? options : undefined);
    });
    return arrayTypes;
}
exports.defineTypes = defineTypes;
