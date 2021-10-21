import { EntityNotFoundError } from '@holoplot/common/errors';

/**
 * Branch Not Found Error.
 *
 * @export
 * @class BranchNotFoundError
 * @typedef {BranchNotFoundError}
 * @extends {EntityNotFoundError}
 */
export class BranchNotFoundError extends EntityNotFoundError {
  public constructor(message: string) {
    super(message);
  }

  public getMessage(): Readonly<string> {
    return this.message;
  }
}
