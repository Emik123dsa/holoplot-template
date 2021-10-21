import { Repository } from '@holoplot/api/github/models';
import {
  ReactiveGitHubUserService,
  SimpleGitHubClient,
} from '@holoplot/api/github/services';
import { RepositoryNotFoundError } from '@holoplot/api/github/errors';
import { retryStrategy } from '@holoplot/common/strategies';
import {
  catchError,
  iif,
  mergeMap,
  Observable,
  of,
  retryWhen,
  throwError,
} from 'rxjs';
import { ArrayUtils } from '../../utils/array-utils';
import { StringUtils } from '../../utils/string-utils';
import {
  HttpClientStatusConstants,
  HttpResponse,
} from '@holoplot/common/http/client';
import { PageRequest, PageRequestConfig } from '../../paginators';

/**
 * Creates an implementation of reactive repository.
 *
 * @export
 * @class SimpleGitHubUserService
 * @typedef {SimpleGitHubUserService}
 * @extends {SimpleGitHubClient}
 * @implements {ReactiveGitHubUserService}
 */
export class SimpleGitHubUserService
  extends SimpleGitHubClient
  implements ReactiveGitHubUserService
{
  /**
   * Default prefix provider.
   *
   * @private
   * @static
   * @readonly
   * @type {"/user"}
   */
  private static readonly DEFAULT_BASE_PREFIX_USER = 'users';

  private static readonly DEFAULT_RETRY_ATTEMPTS: number = 4;

  private _userId!: string;

  /**
   * Get user id.
   *
   * @public
   * @returns {string}
   */
  public getUserId(): string {
    return this._userId;
  }

  /**
   * Setter for userId.
   *
   * @public
   * @param {string} userId
   * @returns {this}
   */
  public setUserId(userId: string): this {
    this._userId = userId;
    return this;
  }

  /**
   * GET /user/:userName/repos to fetch repos by provided {@link string} userName.
   *
   * @public
   * @param {string} userName
   * @returns {Observable<Repository[]>}
   */
  public findAllRepository(
    pageRequest: PageRequest = new PageRequest(
      PageRequestConfig.DEFAULT_PAGE,
      PageRequestConfig.DEFAULT_PER_PAGE,
      PageRequestConfig.DEFAULT_ORDER,
    ),
  ): Observable<Repository[] | null> {
    return this.get<Repository[]>(
      StringUtils.format(
        `${SimpleGitHubUserService.DEFAULT_BASE_PREFIX_USER}/%s/repos`,
        this.getUserId(),
      ),
      new URLSearchParams(pageRequest.toObject() as Record<string, string>),
    ).pipe(
      mergeMap(({ response, headers }: HttpResponse<Repository[]>) =>
        iif(
          () => !ArrayUtils.isEmpty(response),
          of(response),
          throwError(() => new RepositoryNotFoundError(this.getUserId())),
        ),
      ),
      retryWhen(
        retryStrategy({
          maxRetryAttempts: SimpleGitHubUserService.DEFAULT_RETRY_ATTEMPTS,
          excludedStatusCode: [HttpClientStatusConstants.OK],
        }),
      ),
      catchError(() => of(null)),
    );
  }
}
