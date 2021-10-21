import {
  HttpRequestHeaders,
  HttpMethod,
  HttpBody,
} from '@holoplot/common/http';

/**
 * Creates a builder for http client request.
 *
 * @external
 *
 * @export
 * @class HttpClientRequestBuilder
 * @typedef {HttpClientRequestBuilder}
 */
export class HttpClientRequestBuilder {
  /**
   * Http client request.
   *
   * @private
   * @type {RequestInit}
   */
  private _httpClientRequest: RequestInit;

  /**
   * Creates an instance of HttpClientRequestBuilder.
   *
   * @constructor
   * @public
   */
  public constructor() {
    this._httpClientRequest = {} as Request;
  }

  /**
   * Add method request.
   *
   * @public
   * @param {HttpMethod} method
   * @returns {HttpClientRequestBuilder}
   */
  public withMethod(method: HttpMethod): HttpClientRequestBuilder {
    Object.assign(this._httpClientRequest, { method }, {});
    return this;
  }

  /**
   * Add body for POST requests.
   *
   * @public
   * @param {HttpBody} body
   * @returns {HttpClientRequestBuilder}
   */
  public withBody(body: HttpBody): HttpClientRequestBuilder {
    Object.assign(this._httpClientRequest, { body }, {});
    return this;
  }

  /**
   * Add interruption signal for request.
   *
   * @public
   * @param {AbortSignal} signal
   * @returns {HttpClientRequestBuilder}
   */
  public withSignal(signal: AbortSignal): HttpClientRequestBuilder {
    Object.assign(this._httpClientRequest, { signal }, {});
    return this;
  }

  /**
   * Add request headers to request.
   *
   * @public
   * @param {HttpRequestHeaders} headers
   * @returns {HttpClientRequestBuilder}
   */
  public withHeaders(headers: HttpRequestHeaders): HttpClientRequestBuilder {
    Object.assign(this._httpClientRequest, { headers }, {});
    return this;
  }

  // .withIntegrity(this.getIntegrity())
  // .withKeepAlive(this.getKeepAlive())
  // .withCredentials(this.getCredentials())

  /**
   * Add request mode to request.
   *
   * @public
   * @param {HttpRequestHeaders} headers
   * @returns {HttpClientRequestBuilder}
   */
  public withMode(mode: RequestMode): HttpClientRequestBuilder {
    Object.assign(this._httpClientRequest, { mode }, {});
    return this;
  }

  /**
   * Add referrer to request.
   *
   * @public
   * @param {HttpRequestHeaders} headers
   * @returns {HttpClientRequestBuilder}
   */
  public withReferrer(referrer: string | null): HttpClientRequestBuilder {
    Object.assign(this._httpClientRequest, { referrer }, {});
    return this;
  }

  /**
   * Add referrer to request.
   *
   * @public
   * @param {HttpRequestHeaders} headers
   * @returns {HttpClientRequestBuilder}
   */
  public withRedirect(redirect: RequestRedirect): HttpClientRequestBuilder {
    Object.assign(this._httpClientRequest, { redirect }, {});
    return this;
  }

  /**
   * Add cache mode to request.
   *
   * @public
   * @param {HttpRequestHeaders} headers
   * @returns {HttpClientRequestBuilder}
   */
  public withCache(cache: RequestCache): HttpClientRequestBuilder {
    Object.assign(this._httpClientRequest, { cache }, {});
    return this;
  }

  /**
   * Add integrity to request.
   *
   * @public
   * @param {HttpRequestHeaders} headers
   * @returns {HttpClientRequestBuilder}
   */
  public withIntegrity(integrity: string | null): HttpClientRequestBuilder {
    Object.assign(this._httpClientRequest, { integrity }, {});
    return this;
  }

  /**
   * Add keepalive to request.
   *
   * @public
   * @param {HttpRequestHeaders} headers
   * @returns {HttpClientRequestBuilder}
   */
  public withKeepAlive(keepalive: boolean): HttpClientRequestBuilder {
    Object.assign(this._httpClientRequest, { keepalive }, {});
    return this;
  }

  /**
   * Add credentials to request.
   *
   * @public
   * @param {HttpRequestHeaders} headers
   * @returns {HttpClientRequestBuilder}
   */
  public withCredentials(
    credentials: RequestCredentials,
  ): HttpClientRequestBuilder {
    Object.assign(this._httpClientRequest, { credentials }, {});
    return this;
  }

  /**
   * Build client request.
   *
   * @public
   * @returns {Readonly<RequestInit>}
   */
  public build(): Readonly<RequestInit> {
    return this._httpClientRequest;
  }
}
