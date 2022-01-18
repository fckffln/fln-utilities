"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const environments_1 = require("./environments");
const rules = environments_1.environment[environments_1.environment.now];
class App {
    constructor() {
        this.api = rules.api;
        this.host = rules.host;
        this.init();
    }
    init() {
        console.log('');
    }
}
exports.App = App;
