import { EntityNotFoundError } from '@holoplot/common/errors';

/**
 * Repository Not Found Error.
 *
 * @export
 * @class RepositoryNotFoundError
 * @typedef {RepositoryNotFoundError}
 * @extends {EntityNotFoundError}
 */
export class RepositoryNotFoundError extends EntityNotFoundError {
  public constructor(message: string) {
    super(message);
  }

  public getMessage(): Readonly<string> {
    return this.message;
  }
}
