import {
  HttpMethod,
  HttpRequestHeaders,
  HttpURI,
  PageableResponse,
  PageDirection,
  PageResponse,
} from '@holoplot/common/http';
import { StringUtils } from './string-utils';

export class URIUtils {
  /** @internal */
  private static readonly HTTP_QUERY_CLIENT_SEPARATOR: string = '?';

  /** @internal */
  public static readonly HTTP_QUERY_CLIENT_TRAILING_SLASH: string = '/';

  /**
   * To Base URL converter.
   *
   * @public
   * @static
   * @param {HttpURI} baseURL
   * @param {HttpURI} pathURL
   * @param {HttpMethod} method
   * @param {(string | null)} params
   * @returns {Readonly<string>}
   */
  public static toBaseURL(
    baseURL: HttpURI,
    pathURL: HttpURI,
    method: HttpMethod,
    params?: string | null,
  ): Readonly<string> {
    const pathURLStr: string = pathURL.toString();
    const baseURLStr: string = baseURL.toString();
    return Array.from([
      pathURLStr.toString().indexOf(baseURLStr) === -1
        ? Array.from([baseURLStr, pathURLStr]).join(StringUtils.EMPTY)
        : pathURLStr,
      StringUtils.equals(method, HttpMethod.GET) && params,
    ])
      .filter(Boolean)
      .join(URIUtils.HTTP_QUERY_CLIENT_SEPARATOR);
  }

  /**
   * Description placeholder
   *
   * @public
   * @static
   * @param {...unknown[]} args
   * @returns {string}
   */
  public static toString(...args: string[]): string {
    return Array.from(args).join(URIUtils.HTTP_QUERY_CLIENT_TRAILING_SLASH);
  }

  // TODO implement pagination.
  // private static hasNextPage(pagesLinks: string[][]): null {
  //   const isNextPage = new RegExp('next$', 'gim');
  // const nextPage = pagesLinks
  //   .find((page) =>
  //     isNextPage.test(
  //       (page && page[1])?.split(/=/gim).pop().slice(1, -1) as string,
  //     ),
  //   )
  //   .map((_, index) => (index === 0 ? _.slice(1, -1) : _));
  // {
  //   url: nextPage[0],
  //   page: new URLSearchParams(nextPage[0].split("?")[1]).get('page')
  // }
  // return null;
  // }

  // public static parsePageableResponse(headers: Headers): PageableResponse {
  //   const hasPageDirection: boolean = headers.has('link');
  //   if (!hasPageDirection) return {} as PageableResponse;
  //   // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  //   const pagesLinks: string[][] = headers
  //     .get('link')!
  //     .split(/,/gim)!
  //     .map((page: string) => page.split(/;!?\s/gim));
  //   return {} as PageableResponse;
  // }
}
