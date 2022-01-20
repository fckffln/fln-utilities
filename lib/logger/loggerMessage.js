"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _LoggerMessage_message, _LoggerMessage_style;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerMessage = void 0;
const css_1 = require("../css");
class LoggerMessage {
    constructor(message, style) {
        _LoggerMessage_message.set(this, '');
        _LoggerMessage_style.set(this, '');
        this.message = message || '';
        this.style = style || {};
    }
    get message() { return __classPrivateFieldGet(this, _LoggerMessage_message, "f"); }
    set message(value) { __classPrivateFieldSet(this, _LoggerMessage_message, value, "f"); }
    get style() { return css_1.CSS.unparse(__classPrivateFieldGet(this, _LoggerMessage_style, "f")); }
    set style(value) { __classPrivateFieldSet(this, _LoggerMessage_style, css_1.CSS.parse(value), "f"); }
    get styleLog() { return __classPrivateFieldGet(this, _LoggerMessage_style, "f"); }
}
exports.LoggerMessage = LoggerMessage;
_LoggerMessage_message = new WeakMap(), _LoggerMessage_style = new WeakMap();
