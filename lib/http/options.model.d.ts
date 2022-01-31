import { SimpleType } from "../types/model";
export declare type HTTPOptions = {
    method: "GET" | "POST";
    headers: HeadersInit;
} | RequestInit;
export declare type RequestOptions = GetRequestOptions | PostRequestOptions;
export declare type GetRequestOptions = [get?: GETOptions<any>, route?: ROUTEOptions<any>];
export declare type PostRequestOptions = POSTOptions<any>;
export declare type Path = [uri: string, get?: GETOptions<any>, route?: ROUTEOptions<any>];
export declare type GETOptions<T> = {
    [key: string]: SimpleType;
} & T;
export declare type ROUTEOptions<T> = (string | number)[];
export declare type POSTOptions<T> = GETOptions<T>;
