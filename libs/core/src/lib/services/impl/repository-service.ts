import {
  ReactiveGitHubRepositoryService,
  SimpleGitHubClient,
} from '@holoplot/api/github/services';
import {
  BranchNotFoundError,
  CommitNotFoundError,
} from '@holoplot/api/github/errors';
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
import {
  HttpClientStatusConstants,
  HttpResponse,
} from '@holoplot/common/http/client';
import type { Branch, Commit } from '@holoplot/api/github/models';
import { URIUtils } from '../../utils/uri-utils';
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
export class SimpleGitHubRepositoryService
  extends SimpleGitHubClient
  implements ReactiveGitHubRepositoryService
{
  /**
   * Default prefix provider.
   *
   * @private
   * @static
   * @readonly
   * @type {"/repos"}
   */
  private static readonly DEFAULT_BASE_PREFIX_REPOS = 'repos';

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
   * GET /repos/:userName/:repositoryName/branches by {@link string} userName and repositoryName.
   *
   * @public
   * @param {string} userName
   * @returns {Observable<Repository[]>}
   */
  public findAllBranchByRepositoryId(
    repositoryId: string,
  ): Observable<Branch[] | null> {
    return this.get<Branch[]>(
      URIUtils.toString(
        SimpleGitHubRepositoryService.DEFAULT_BASE_PREFIX_REPOS,
        this.getUserId(),
        repositoryId,
        'branches',
      ),
    ).pipe(
      mergeMap(({ response }: HttpResponse<Branch[]>) =>
        iif(
          () => !ArrayUtils.isEmpty(response),
          of(response),
          throwError(() => new BranchNotFoundError(repositoryId)),
        ),
      ),
      retryWhen(
        retryStrategy({
          maxRetryAttempts:
            SimpleGitHubRepositoryService.DEFAULT_RETRY_ATTEMPTS,
          excludedStatusCode: [HttpClientStatusConstants.OK],
        }),
      ),
      catchError(() => of(null)),
    );
  }

  /**
   * GET /repos/:userName/:repositoryName/commits?sha=:sha by {@link string} userName and repositoryName,
   * branch hash.
   *
   * @public
   * @param {string} repositoryId
   * @param {string} sha
   * @returns {Observable<Commit[]>}
   */
  public findAllCommitByRepositoryIdAndBranchId(
    repositoryId: string,
    sha: string,
    pageRequest: PageRequest = new PageRequest(
      PageRequestConfig.DEFAULT_PAGE,
      PageRequestConfig.DEFAULT_PER_PAGE,
      PageRequestConfig.DEFAULT_ORDER,
    ),
  ): Observable<Commit[] | null> {
    return this.get<Commit[]>(
      URIUtils.toString(
        SimpleGitHubRepositoryService.DEFAULT_BASE_PREFIX_REPOS,
        this.getUserId(),
        repositoryId,
        'commits',
      ),
      new URLSearchParams(
        Object.assign({}, pageRequest.toObject(), { sha } as Record<
          string,
          string
        >),
      ),
    ).pipe(
      mergeMap(({ response, headers }: HttpResponse<Commit[]>) =>
        iif(
          () => {
            console.log(
              (headers as Headers).get('link')?.split(',')[0]?.split('; '),
            );
            return !ArrayUtils.isEmpty(response);
          },
          of(response),
          throwError(() => new CommitNotFoundError(repositoryId)),
        ),
      ),
      retryWhen(
        retryStrategy({
          maxRetryAttempts:
            SimpleGitHubRepositoryService.DEFAULT_RETRY_ATTEMPTS,
          excludedStatusCode: [HttpClientStatusConstants.OK],
        }),
      ),
      catchError(() => of(null)),
    );
  }
}
