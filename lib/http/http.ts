/**
 *
 *************************************************
 *                                               *
 *                  http client                  *
 *                                               *
 *************************************************
 *
 * HTTP (RESTful API) CLIENT (will add over time)
 *
 **/

import {HTTPOptions, Path, POSTOptions} from "./options.model";
import {buildOptions} from "./buildOptions";

export async function http(api: string, uri: string, options?: HTTPOptions) {
  const request = await fetch(api + uri, {...options});
  return await request.json();
}

export class HTTP {

  #baseUrl: string;
  #options: HTTPOptions;
  #log: {ErrorLog: Error[], DataLog: any[]};

  public set baseUrl(url: string) {this.#baseUrl = url};
  public set options(init: HTTPOptions) {this.#options = init};

  public get log() {return this.#log};

  public async get<T>(path: string | Path, callback?: (response: any) => any): Promise<T> {
    const _path = this.build(path);
    return http(this.#baseUrl, _path, {headers: {'Content-Type': 'application/json'}, ...this.#options, method: 'GET'})
        .then((response) => this.debug(response, callback))
        .catch((e) => {
          console.error("Can't get data.");
          this.error(e);
        });
  }

  public async post<T>(path: string, params: POSTOptions<any>, callback?: (response: any) => any): Promise<T> {
    return http(this.#baseUrl, path, {
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {'Content-Type': 'application/json'},
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(params),
      ...this.#options,
      method: 'POST'})
        .then((response) => this.debug(response, callback))
        .catch((e) => {
          console.error("Can't post data.");
          this.error(e);
        });
  }

  public async send<T>(path: string | Path, options: HTTPOptions, callback?: (response: any) => any, api?: string): Promise<T> {
    const _path = this.build(path);
    return http(api ? api : this.#baseUrl, _path, {headers: {'Content-Type': 'application/json'}, ...this.#options, ...options})
        .then((response) => this.debug(response, callback))
        .catch((e) => {
          console.error("Can't send data.");
          this.error(e);
        });
  }

  private debug(response: any, callback?: (response: any) => any) {
    this.#log.DataLog.push(response)
    return (callback ? callback(response) : response)
  }

  private error(e: string) {
    const error = new Error(e);
    this.#log.ErrorLog.push(error);
    throw error;
  }

  private build = (path: string | Path): string => {
    let _path: string;
    if (Array.isArray(path)) {
      const [uri, options] = path;
      _path = uri + buildOptions(options);
    }
    else _path = path;
    return _path;
  }

}
