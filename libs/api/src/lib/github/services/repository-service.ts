import { Observable } from 'rxjs';
import { Repository } from '../models';
import { Branch } from '../models/branch';
import { Commit } from '../models/commit';
import { PageRequest } from '@holoplot/core/paginators';

/**
 * Reactive service for GitHub users.
 *
 * @returns Observable
 */
export abstract class ReactiveGitHubRepositoryService {
  public abstract findAllBranchByRepositoryId(
    repositoryId: string,
  ): Observable<Branch[] | null>;

  public abstract findAllCommitByRepositoryIdAndBranchId(
    repositoryId: string,
    sha: string,
    pageRequest?: PageRequest,
  ): Observable<Commit[] | null>;
}

/**
 * Future service for GitHub users.
 *
 * @returns Promise
 */
export interface GitHubRepositoryService {
  findAllCommitByRepositoryId(userName: string): Promise<Repository[]>;
}
