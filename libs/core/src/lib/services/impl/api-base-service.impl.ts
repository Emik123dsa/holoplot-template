import { Observable, Observer, of, Subscriber, Subscription } from 'rxjs';

import { ApiBaseService } from '../api-base-service';

export class ApiBaseServiceImpl implements ApiBaseService<unknown> {
 /**
   *
   *
   * @param {HttpUrl} baseUrl
   * @return {*}  {Observable<T>}
   * @memberof HttpService
   */
  get(baseUrl: HttpUrl): Observable<T>;

  /**
   *
   *
   * @param {HttpUrl} baseUrl
   * @param {Record<string, unknown>} params
   * @return {*}  {Observable<T>}
   * @memberof HttpService
   */
  get(baseUrl: HttpUrl, params: Record<string, unknown>): Observable<T>;

  /**
   *
   *
   * @param {HttpUrl} baseUrl
   * @return {*}  {Observable<T>}
   * @memberof HttpService
   */
  post(baseUrl: HttpUrl): Observable<T>;

  /**
   *
   *
   * @param {HttpUrl} baseUrl
   * @param {Record<string, unknown>} body
   * @return {*}  {Observable<T>}
   * @memberof HttpService
   */
  post(baseUrl: HttpUrl, body: Record<string, unknown>): Observable<T>;

  /**
   *
   *
   * @param {HttpUrl} baseUrl
   * @return {*}  {Observable<T>}
   * @memberof HttpService
   */
  patch(baseUrl: HttpUrl): Observable<T>;

  /**
   *
   *
   * @param {HttpUrl} baseUrl
   * @return {*}  {Observable<T>}
   * @memberof HttpService
   */
  delete(baseUrl: HttpUrl): Observable<T>;
}
