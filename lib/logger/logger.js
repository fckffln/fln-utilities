"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = exports.log = void 0;
const loggerMessage_1 = require("./loggerMessage");
const constructMessage_1 = require("./constructMessage");
const typer_1 = require("./typer");
function log(message) {
    console.log(...constructMessage_1.constructMessage(message));
}
exports.log = log;
const logger = (type, message) => {
    const objType = typer_1.typer(typer_1.messageType[type]);
    log(new loggerMessage_1.LoggerMessage(`%c${objType.prefix} ${message}`, objType.css));
};
exports.logger = logger;
