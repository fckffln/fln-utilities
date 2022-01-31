import {SimpleType} from "../types/model";

export type HTTPOptions = { method: "GET" | "POST", headers: HeadersInit } | RequestInit;

export type RequestOptions = GetRequestOptions | PostRequestOptions;

export type GetRequestOptions = [get?: GETOptions<any>, route?: ROUTEOptions<any>];
export type PostRequestOptions = POSTOptions<any>;

export type Path = [uri: string, get?: GETOptions<any>, route?: ROUTEOptions<any>];

export type GETOptions<T> = {[key: string] : SimpleType} & T;
export type ROUTEOptions<T> = (string | number)[];
export type POSTOptions<T> = GETOptions<T>;
