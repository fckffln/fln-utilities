import {LoggerMessage} from "./loggerMessage";
import {constructMessage} from "./constructMessage";
import {messageType, msgType, typer} from "./typer";

export function log(message: (any | LoggerMessage) | (any | LoggerMessage[])): void {
    console.log(...constructMessage(message));
}

export const logger = (type: msgType, message: string): void => {
    const objType = typer(messageType[type]);
    log(new LoggerMessage(`%c${objType.prefix} ${message}`, objType.css));
}
