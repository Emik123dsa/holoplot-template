import { EntityNotFoundError } from '@holoplot/common/errors';

/**
 * Commit Not Found Error.
 *
 * @export
 * @class CommitNotFoundError
 * @typedef {CommitNotFoundError}
 * @extends {EntityNotFoundError}
 */
export class CommitNotFoundError extends EntityNotFoundError {
  public constructor(message: string) {
    super(message);
  }

  public getMessage(): Readonly<string> {
    return this.message;
  }
}
