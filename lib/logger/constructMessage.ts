import {LoggerMessage} from "./loggerMessage";
import {defineType} from "../defineType";

export function constructMessage(message: (any | LoggerMessage) | (any | LoggerMessage[])): string[] {
    let type = defineType(message);
    if (type === 'array') {
        let outputMessage = '';
        const outputStyles = [];
        message.forEach(m => {
            const t = defineType(m, {classnames: true});
            if (t === 'LoggerMessage') {
                outputStyles.push(m.styleLog);
                outputMessage += `%c${m.message}`;
            }
            else outputMessage += m
        })
        return [outputMessage, ...outputStyles];
    }
    else {
        type = defineType(message, {classnames: true});
        if (type === 'LoggerMessage') {
            return [(<LoggerMessage>message).message, (<LoggerMessage>message).styleLog];
        }
        return [message];
    }
}
