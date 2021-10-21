import { Observable } from 'rxjs';
import { HttpParams, HttpResponse } from '@holoplot/common/http/client';
import {
  HttpURI,
  HttpBody,
} from '@holoplot/common/http/client/request-client-factory';
import { HttpMethod } from '@holoplot/common/http/method-type-constants';
import { StringUtils } from '@holoplot/core/utils/string-utils';
import { GitHubClientConfigConstants } from '../../../constants/config-constants';
import { ReactiveGitHubClient } from '../rx-request-client';
import { GitHubClientRequestFactory } from '../rx-request-client-factory';

/**
 * Reactive GitHub client impl.
 *
 * @export
 * @class GitHubClient
 * @typedef {GitHubClient}
 * @implements {ReactiveGitHubClient}
 */
export class SimpleGitHubClient implements ReactiveGitHubClient {
  /**
   * Implement get reactive request.
   *
   * @public
   * @template T extends unknown
   * @param {HttpURI} baseURL
   * @param {HttpParams} [params=new HttpParams()]
   * @returns {Observable<T>}
   */
  public get<T extends unknown>(
    pathURL: HttpURI,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    params?: HttpParams,
  ): Observable<HttpResponse<T>> {
    const clientRequestFactory: GitHubClientRequestFactory =
      new GitHubClientRequestFactory();
    clientRequestFactory.setMethod(HttpMethod.GET);
    clientRequestFactory.setBaseURL(GitHubClientConfigConstants.toBaseURL());
    return clientRequestFactory.createReactiveHttpRequest(pathURL, {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      params: params?.toString() || StringUtils.EMPTY,
    });
  }

  /**
   * Implement post reactive request.
   *
   * @public
   * @template T extends unknown
   * @param {HttpURI} baseURL
   * @param {HttpParams} [params=new HttpParams()]
   * @returns {Observable<T>}
   */
  public post<T extends unknown>(
    baseURL: HttpURI,
    body?: HttpBody,
  ): Observable<HttpResponse<T>> {
    const clientRequestFactory: GitHubClientRequestFactory =
      new GitHubClientRequestFactory();
    clientRequestFactory.setMethod(HttpMethod.POST);
    clientRequestFactory.setBaseURL(GitHubClientConfigConstants.toBaseURL());
    return clientRequestFactory.createReactiveHttpRequest(baseURL, { body });
  }
}
