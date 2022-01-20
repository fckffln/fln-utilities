export declare enum messageType {
    'error' = -2,
    'warning' = -1,
    'info' = 0,
    'success' = 1
}
export declare type msgType = 'error' | 'warning' | 'info' | 'success';
export declare const typer: (type: messageType) => {
    css: object;
    prefix: string;
};
