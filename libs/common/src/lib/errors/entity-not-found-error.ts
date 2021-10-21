/**
 * Entity Not Found Errors.
 *
 * @export
 * @class EntityNotFoundError
 * @typedef {EntityNotFoundError}
 * @extends {Error}
 */
export class EntityNotFoundError extends Error {
  /**
   * Creates an instance of {@link ConfigError}.
   *
   * @param {string} message
   * @param {...unknown[]} args
   * @memberof ConfigError
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public constructor(public message: string, ...args: unknown[]) {
    super(message);
  }
}
