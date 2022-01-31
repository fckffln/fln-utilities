import { HTTPOptions, Path, POSTOptions } from "./options.model";
export declare function http(api: string, uri: string, options?: HTTPOptions): Promise<any>;
export declare class HTTP {
    #private;
    set baseUrl(url: string);
    set options(init: HTTPOptions);
    get log(): {
        ErrorLog: Error[];
        DataLog: any[];
    };
    get<T>(path: string | Path, callback?: (response: any) => any): Promise<T>;
    post<T>(path: string, params: POSTOptions<any>, callback?: (response: any) => any): Promise<T>;
    send<T>(path: string | Path, options: HTTPOptions, callback?: (response: any) => any, api?: string): Promise<T>;
    private debug;
    private error;
    private build;
}
