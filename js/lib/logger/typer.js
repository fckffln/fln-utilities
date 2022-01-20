"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typer = exports.messageType = void 0;
const emoji_1 = require("../emoji");
var messageType;
(function (messageType) {
    messageType[messageType["error"] = -2] = "error";
    messageType[messageType["warning"] = -1] = "warning";
    messageType[messageType["info"] = 0] = "info";
    messageType[messageType["success"] = 1] = "success";
})(messageType = exports.messageType || (exports.messageType = {}));
const typer = (type) => {
    switch (type) {
        case messageType.success:
            return {
                css: { color: 'green' },
                prefix: `${emoji_1.Emoji.greenSquare} [success]:`
            };
        case messageType.error:
            return {
                css: { color: 'red' },
                prefix: `${emoji_1.Emoji.redSquare} [error]:`
            };
        case messageType.info:
            return {
                css: { color: 'gray' },
                prefix: `${emoji_1.Emoji.blueSquare} [info]:`
            };
        case messageType.warning:
            return {
                css: { color: 'orange' },
                prefix: `${emoji_1.Emoji.orangeSquare} [warning]:`
            };
        default:
            return {
                css: { color: 'black' },
                prefix: `${emoji_1.Emoji.whiteSquare} [message]:`
            };
    }
};
exports.typer = typer;
