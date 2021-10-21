import { Order } from './order';

/**
 * Page request service.
 *
 * @export
 * @class PageRequest
 * @typedef {PageRequest}
 */
export class PageRequest {
  /**
   * Creates an instance of PageRequest.
   *
   * @constructor
   * @public
   * @param {number} _page
   * @param {number} _perPage
   * @param {Order | string} _order
   */
  public constructor(
    private _page: number,
    private _perPage: number,
    private _order: Order | string,
  ) {}

  /**
   * To object converter.
   *
   * @public
   * @returns {Record<string, number>}
   */
  public toObject(): Record<string, symbol | string | number> {
    return {
      page: this._page,
      order: this._order,
      per_page: this._perPage,
    };
  }
}
