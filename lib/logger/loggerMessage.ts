import {CSS} from "../css";

export class LoggerMessage {
    #message = '';
    #style = '';

    constructor(message?: string, style?: object) {
        this.message = message || '';
        this.style = style || {};
    }

    get message(): string {return this.#message}
    set message(value: string) {this.#message = value}

    get style(): object {return CSS.unparse(this.#style)}
    set style(value: object) {this.#style = CSS.parse(value)}
    get styleLog(): string {return this.#style}
}
