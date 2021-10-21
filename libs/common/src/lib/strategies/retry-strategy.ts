import { Observable, timer, throwError } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

export interface RetryStrategy {
  maxRetryAttempts: number;
  scalingDuration: number;
  excludedStatusCode: number[];
}

export const retryStrategy =
  <T = unknown>({
    maxRetryAttempts = 3,
    scalingDuration = 1000,
    excludedStatusCode = [],
  }: { [P in keyof RetryStrategy]?: RetryStrategy[P] }) =>
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  (attempts: Observable<T>) =>
    attempts.pipe(
      mergeMap((err: T, i: number) => {
        const attempt = i + 1;
        if (
          attempt > maxRetryAttempts ||
          excludedStatusCode?.find(
            (e) => e === (err as T & { status: number }).status,
          )
        ) {
          return throwError((): Error | unknown => new Error());
        }
        return timer(attempt * scalingDuration);
      }),
    );
