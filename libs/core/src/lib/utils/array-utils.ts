export class ArrayUtils {
  /**
   * Is empty array utils.
   *
   * @public
   * @static
   * @param {((string | symbol | number)[])} arr
   * @returns {boolean}
   */
  public static isEmpty<T>(arr: T[]): boolean {
    return !Array.from(arr).length;
  }
}
