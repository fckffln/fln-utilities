"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildOptions = void 0;
function buildOptions(options) {
    const [uri, get, route] = options;
    let output = uri;
    route.forEach((v) => output += '/' + v);
    Object.keys(get).forEach((key, index) => {
        const v = `${key}=${get[key]}`;
        if (index === 0)
            output += '?' + v;
        else
            output += '&' + v;
    });
    return output;
}
exports.buildOptions = buildOptions;
