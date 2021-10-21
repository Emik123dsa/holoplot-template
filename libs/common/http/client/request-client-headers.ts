/** @external */
export type HttpRequestHeaders =
  | {
      [param: string]:
        | string
        | number
        | boolean
        | ReadonlyArray<string | number | boolean>;
    }
  | Record<string, string>
  | Headers;
