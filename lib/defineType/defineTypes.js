import { defineType } from "./defineType";
export function defineTypes(...args) {
    const arrayTypes = [];
    args.forEach(arg => {
        arrayTypes.push(defineType(arg));
    });
    return arrayTypes;
}
