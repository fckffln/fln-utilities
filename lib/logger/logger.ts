import {LoggerMessage} from "./loggerMessage";
import {constructMessage} from "./constructMessage";
import {messageType, msgType, typer} from "./typer";

export function log(message: (any | LoggerMessage) | (any | LoggerMessage[])): string {
    const msg = constructMessage(message);
    console.log(...msg);
    return msg.toString();
}

export const logger = (type: msgType, message: string): void => {
    const objType = typer(messageType[type]);
    log(new LoggerMessage(`%c${objType.prefix} ${message}`, objType.css));
}
