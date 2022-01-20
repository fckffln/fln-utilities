"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getData = void 0;
async function getData(url) {
    const factory = await fetch(url);
    const request = await factory.json();
    const result = JSON.stringify(request);
    console.log(result);
}
exports.getData = getData;
