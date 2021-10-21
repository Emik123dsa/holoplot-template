import { Observable } from 'rxjs';
import { Repository } from '../models';

/**
 * Reactive service for GitHub users.
 *
 * @returns Observable
 */
export abstract class ReactiveGitHubUserService {
  public abstract findAllRepository(): Observable<Repository[] | null>;
}

/**
 * Future service for GitHub users.
 *
 * @returns Promise
 */
export interface GitHubUserService {
  findAllRepository(): Promise<Repository[]>;
}
