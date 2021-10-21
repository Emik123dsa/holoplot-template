import { isValid, format } from 'date-fns';

/**
 * Date Utils.
 *
 * @export
 * @class DateUtils
 * @typedef {DateUtils}
 */
export class DateUtils {
  /**
   * Parse date according to pattern.
   *
   * @public
   * @static
   * @param {string} date
   * @param {string} pattern
   * @returns {(Date | null)}
   */
  public static parse(date: string, pattern: string): string | null {
    return isValid(new Date(date)) ? format(new Date(date), pattern) : null;
  }
}
