import { HttpURI } from './request-client-factory';

export type PageDirection = 'next' | 'prev' | 'last';

export interface PageResponse {
  url?: HttpURI;
  page?: number;
}

export type PageableResponse = {
  [P in PageDirection]?: Partial<PageResponse>;
};

/**
 * Http Response.
 *
 * @export
 * @interface HttpResponse
 * @typedef {HttpResponse}
 * @template T
 */
export interface HttpResponse<T> {
  response: T;
  pages?: Record<Partial<PageDirection>, PageResponse>;
  headers:
    | Headers
    | Record<string, unknown>
    | { [param: string]: string | ReadonlyArray<string | number | symbol> };
}
