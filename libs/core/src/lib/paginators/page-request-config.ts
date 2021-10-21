import { Order } from './order';
/**
 * PageRequestConfig will be implemented PageRequest
 * for default pagination.
 *
 * @export
 * @class PageRequestConfig
 * @typedef {PageRequestConfig}
 */
export class PageRequestConfig {
  /**
   * Default per page overriding.
   *
   * @public
   * @static
   * @readonly
   * @type {number}
   */
  public static readonly DEFAULT_PER_PAGE: number =
    Number(process.env.DEFAULT_PER_PAGE) || 20;

  /**
   * Default page overriding.
   *
   * @public
   * @static
   * @readonly
   * @type {number}
   */
  public static readonly DEFAULT_PAGE: number =
    Number(process.env.DEFAULT_PAGE) || 1;

  public static readonly DEFAULT_ORDER: Order | string =
    process.env.DEFAULT_ORDER || Order.DESC;
}
