/**
 * Boolean Utils
 *
 * @export
 * @class BooleanUtils
 * @typedef {BooleanUtils}
 */
export class BooleanUtils {
  /**
   * True as string boolean.
   *
   * @public
   * @static
   * @readonly
   * @type {"true"}
   */
  public static readonly TRUE = 'true';

  /**
   * False as string boolean
   *
   * @public
   * @static
   * @readonly
   * @type {"false"}
   */
  public static readonly FALSE = 'false';

  /**
   * Check if boolean property is being boolean.
   *
   * @public
   * @static
   * @param {string} boolean
   * @returns {Readonly<boolean>}
   */
  public static isBoolean(boolean: unknown): Readonly<boolean> {
    return boolean !== null && boolean === typeof 'boolean';
  }
}
