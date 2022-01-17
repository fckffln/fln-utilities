import { environment } from "./environments";
const rules = environment[environment.now];
export class App {
    constructor() {
        this.api = rules.api;
        this.host = rules.host;
        this.init();
    }
    init() {
        console.log('');
    }
}
