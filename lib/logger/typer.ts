import {Emoji} from "../emoji";

export enum messageType {
    'error'= -2,
    'warning',
    'info',
    'success',
}

export type msgType = 'error' | 'warning' | 'info' | 'success';

export const typer = (type: messageType): { css: object, prefix: string } => {
    switch (type) {
        case messageType.success:
            return {
                css: {color: 'green'},
                prefix: `${Emoji.greenSquare} [success]:`
            }
        case messageType.error:
            return {
                css: {color: 'red'},
                prefix: `${Emoji.redSquare} [error]:`
            }
        case messageType.info:
            return {
                css: {color: 'gray'},
                prefix: `${Emoji.blueSquare} [info]:`
            }
        case messageType.warning:
            return {
                css: {color: 'orange'},
                prefix: `${Emoji.orangeSquare} [warning]:`
            }
        default:
            return {
                css: {color: 'black'},
                prefix: `${Emoji.whiteSquare} [message]:`
            }
    }
}
