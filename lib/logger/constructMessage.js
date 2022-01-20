"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructMessage = void 0;
const defineType_1 = require("../defineType");
function constructMessage(message) {
    let type = defineType_1.defineType(message);
    if (type === 'array') {
        let outputMessage = '';
        const outputStyles = [];
        message.forEach(m => {
            const t = defineType_1.defineType(m, { classnames: true });
            if (t === 'LoggerMessage') {
                outputStyles.push(m.styleLog);
                outputMessage += `%c${m.message}`;
            }
            else
                outputMessage += m;
        });
        return [outputMessage, ...outputStyles];
    }
    else {
        type = defineType_1.defineType(message, { classnames: true });
        if (type === 'LoggerMessage') {
            return [message.message, message.styleLog];
        }
        return [message];
    }
}
exports.constructMessage = constructMessage;
