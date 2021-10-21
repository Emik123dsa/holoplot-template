import { Observable } from 'rxjs';
import { HttpParams, HttpResponse } from '@holoplot/common/http';
import {
  HttpURI,
  HttpBody,
} from '@holoplot/common/http/client/request-client-factory';

export interface ReactiveGitHubClient {
  /**
   * Implement get request.
   *
   * @template T extends unknown
   * @param {HttpURI} baseURL
   * @param {?HttpParams} [params]
   * @returns {Observable<T>}
   */
  get<T extends unknown>(
    baseURL: HttpURI,
    params?: HttpParams,
  ): Observable<HttpResponse<T>>;

  /**
   * Implement post request.
   *
   * @template T extends unknown
   * @param {HttpURI} baseURL
   * @param {?Record<string, unknown>} [body]
   * @returns {Observable<T>}
   */
  post<T extends unknown>(
    baseURL: HttpURI,
    body?: HttpBody,
  ): Observable<HttpResponse<T>>;
}
