"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSS = void 0;
class CSS {
}
exports.CSS = CSS;
CSS.unparse = (input) => {
    if (!(input === null || input === void 0 ? void 0 : input.length))
        return {};
    const output = {};
    input.split(';').forEach(p => {
        const [key, value] = p.split(':');
        output[key] = value;
    });
    return output;
};
CSS.parse = (input) => {
    const keys = Object.keys(input);
    const values = Object.values(input);
    const length = keys.length;
    let output = '';
    for (let i = 0; i < length; i++) {
        output += `${keys[i]}:${values[i]};`;
    }
    return output;
};
