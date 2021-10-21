import { HttpMethod } from '../method-type-constants';

/**
 *  Http URI instance type.
 *
 * @external {}
 *
 * @export
 * @typedef {HttpURI}
 */
export type HttpURI = RequestInfo | string;

/**
 * Http body instance type.
 *
 * @external {}
 *
 * @export
 * @typedef {HttpBody}
 */
export type HttpBody =
  | BodyInit
  | Record<string, string>
  | {
      [param: string]:
        | string
        | number
        | boolean
        | ReadonlyArray<string | number | boolean>;
    };

/**
 * Http request factory.
 *
 * @export
 * @class HttpClientRequestFactory
 * @typedef {HttpClientRequestFactory}
 */
export class HttpClientRequestFactory {
  /**
   * Create Http Request.
   *
   * @public
   * @static
   * @param {URL} uri
   * @param {HttpMethod} method
   */
  public static createHttpRequest(
    baseURL: HttpURI,
    method: HttpMethod,
  ): Promise<Response> {
    return fetch(baseURL, { method });
  }
}
