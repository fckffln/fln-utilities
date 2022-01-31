"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _HTTP_baseUrl, _HTTP_options, _HTTP_log;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTP = exports.http = void 0;
const buildOptions_1 = require("./buildOptions");
async function http(api, uri, options) {
    const request = await fetch(api + uri, Object.assign({}, options));
    return await request.json();
}
exports.http = http;
class HTTP {
    constructor() {
        _HTTP_baseUrl.set(this, void 0);
        _HTTP_options.set(this, void 0);
        _HTTP_log.set(this, void 0);
        this.build = (path) => {
            let _path;
            if (Array.isArray(path)) {
                const [uri, options] = path;
                _path = uri + (0, buildOptions_1.buildOptions)(options);
            }
            else
                _path = path;
            return _path;
        };
    }
    set baseUrl(url) { __classPrivateFieldSet(this, _HTTP_baseUrl, url, "f"); }
    ;
    set options(init) { __classPrivateFieldSet(this, _HTTP_options, init, "f"); }
    ;
    get log() { return __classPrivateFieldGet(this, _HTTP_log, "f"); }
    ;
    async get(path, callback) {
        const _path = this.build(path);
        return http(__classPrivateFieldGet(this, _HTTP_baseUrl, "f"), _path, Object.assign(Object.assign({ headers: { 'Content-Type': 'application/json' } }, __classPrivateFieldGet(this, _HTTP_options, "f")), { method: 'GET' }))
            .then((response) => this.debug(response, callback))
            .catch((e) => {
            console.error("Can't get data.");
            this.error(e);
        });
    }
    async post(path, params, callback) {
        return http(__classPrivateFieldGet(this, _HTTP_baseUrl, "f"), path, Object.assign(Object.assign({ mode: 'cors', cache: 'no-cache', credentials: 'same-origin', headers: { 'Content-Type': 'application/json' }, redirect: 'follow', referrerPolicy: 'no-referrer', body: JSON.stringify(params) }, __classPrivateFieldGet(this, _HTTP_options, "f")), { method: 'POST' }))
            .then((response) => this.debug(response, callback))
            .catch((e) => {
            console.error("Can't post data.");
            this.error(e);
        });
    }
    async send(path, options, callback, api) {
        const _path = this.build(path);
        return http(api ? api : __classPrivateFieldGet(this, _HTTP_baseUrl, "f"), _path, Object.assign(Object.assign({ headers: { 'Content-Type': 'application/json' } }, __classPrivateFieldGet(this, _HTTP_options, "f")), options))
            .then((response) => this.debug(response, callback))
            .catch((e) => {
            console.error("Can't send data.");
            this.error(e);
        });
    }
    debug(response, callback) {
        __classPrivateFieldGet(this, _HTTP_log, "f").DataLog.push(response);
        return (callback ? callback(response) : response);
    }
    error(e) {
        const error = new Error(e);
        __classPrivateFieldGet(this, _HTTP_log, "f").ErrorLog.push(error);
        throw error;
    }
}
exports.HTTP = HTTP;
_HTTP_baseUrl = new WeakMap(), _HTTP_options = new WeakMap(), _HTTP_log = new WeakMap();
