import { environment } from "./environments";

const rules = environment[environment.now];

export class App {

  api = rules.api;
  host = rules.host;

  constructor() {
    this.init();
  }

  init() {
    console.log('');

  }

}