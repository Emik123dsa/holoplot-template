import {
  catchError,
  EMPTY,
  iif,
  mergeMap,
  Observable,
  Observer,
  of,
  switchMap,
  TeardownLogic,
  throwError,
} from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { HttpMethod } from '../../method-type-constants';
import { HttpRequestHeaders } from '../request-client-headers';
import { HttpURI, HttpBody } from '../request-client-factory';
import { StringUtils } from '@holoplot/core/utils/string-utils';
import { URIUtils } from '@holoplot/core/utils/uri-utils';
import { HttpClientRequestBuilder } from './builder/request-client-builder';
import { HttpResponse } from '../response-client-factory';
import { camelizeKeys } from 'humps';
/** @internal */
export interface HttpClientReactiveRequest {
  body: HttpBody;
  params: string | null;
}

/**
 * Http Reactive Request Abstract Factory.
 *
 * @export
 * @class HttpClientRequestFactory
 * @typedef {HttpClientRequestFactory}
 */
export abstract class ReactiveHttpClientRequestFactory {
  private _baseURL!: HttpURI;

  public setBaseURL(baseURL: HttpURI): void {
    this._baseURL = baseURL;
  }

  /**
   * Get base URL according to the Http Method.
   *
   * @public
   * @returns {Readonly<HttpURI>}
   */
  public getBaseURL(): Readonly<HttpURI> {
    return this._baseURL;
  }

  private _method!: HttpMethod;

  public setMethod(method: HttpMethod): void {
    this._method = method;
  }

  public getMethod(): Readonly<HttpMethod> {
    return this._method;
  }

  /**
   * Cache provider, it's required for overriding template.
   *
   * @public
   * @abstract
   * @returns {RequestCache}
   */
  public abstract getCache(): RequestCache;

  /**
   * Override credentials.
   *
   * @public
   * @abstract
   * @returns {RequestCredentials}
   */
  public abstract getCredentials(): RequestCredentials;

  /**
   * Override headers.
   *
   * @public
   * @abstract
   * @returns {HeadersInit}
   */
  public abstract getHeaders(): HeadersInit;

  /**
   * Override integrity.
   *
   * @public
   * @abstract
   * @returns {string}
   */
  public abstract getIntegrity(): string | null;

  /**
   * Override keep alive.
   *
   * @public
   * @abstract
   * @returns {boolean}
   */
  public abstract getKeepAlive(): boolean;

  /**
   * Override mode factory.
   *
   * @public
   * @abstract
   * @returns {RequestMode}
   */
  public abstract getMode(): RequestMode;

  /**
   * Override redirect.
   *
   * @public
   * @abstract
   * @returns {RequestRedirect}
   */
  public abstract getRedirect(): RequestRedirect;

  /**
   * Override referrer.
   *
   * @public
   * @abstract
   * @returns {string}
   */
  public abstract getReferrer(): string | null;

  /**
   * Override abort signal.
   *
   * @public
   * @abstract
   * @returns {AbortSignal}
   */
  public abstract getAbortSignal(): AbortSignal;

  /**
   * Description placeholder
   *
   * @public
   * @abstract
   * @returns {ReferrerPolicy}
   */
  public abstract getRefererPolicy(): ReferrerPolicy;

  private _handleThrowableErrors<T>(
    err: Error | unknown,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    caught: Observable<HttpResponse<T>>,
  ): Observable<never> {
    return throwError(() => {
      throw err;
    });
  }
  /**
   * Create an instance of Reactive request.
   *
   * @public
   * @template T extends unknown
   * @param {HttpURI} pathUrl
   * @param {({
        [P in keyof HttpClientReactiveRequest]?:
          | HttpClientReactiveRequest[P]
          | null;
      })} {
        body,
        params,
      }
   * @returns {Observable<HttpResponse<T>>}
   */
  public createReactiveHttpRequest<T extends unknown>(
    pathUrl: HttpURI,
    {
      body,
      params,
    }: {
      [P in keyof HttpClientReactiveRequest]?:
        | HttpClientReactiveRequest[P]
        | null;
    },
  ): Observable<HttpResponse<T>> {
    // @formatter:off
    const clientRequestBuilder: HttpClientRequestBuilder =
      new HttpClientRequestBuilder()
        .withMode(this.getMode())
        .withCache(this.getCache())
        .withMethod(this.getMethod())
        .withRedirect(this.getRedirect())
        .withSignal(this.getAbortSignal())
        .withKeepAlive(this.getKeepAlive())
        .withCredentials(this.getCredentials())
        .withHeaders(this.getHeaders() as HttpRequestHeaders);
    // @formatter:on
    if (StringUtils.equals(this.getMethod(), HttpMethod.POST)) {
      clientRequestBuilder.withBody(body as HttpBody);
    }

    return fromFetch(
      URIUtils.toBaseURL(this.getBaseURL(), pathUrl, this.getMethod(), params),
      clientRequestBuilder.build(),
    ).pipe(
      mergeMap(
        (response: Response): Observable<HttpResponse<T>> =>
          iif(
            () => response.ok,
            response.json().then(
              (json: T): HttpResponse<T> => ({
                response: json,
                headers: response.headers,
              }),
            ),
            EMPTY,
          ),
      ),
      switchMap(({ response, headers }): Observable<HttpResponse<T>> => {
        return new Observable(
          (observer: Observer<HttpResponse<T>>): TeardownLogic => {
            if (response) {
              observer.next({ response: camelizeKeys(response) as T, headers });
              return observer.complete();
            }
            observer.error(null);
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            return (): void => {};
          },
        );
      }),
      catchError(this._handleThrowableErrors),
    );
  }
}
