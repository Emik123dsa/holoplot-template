/** @external */
export abstract class CommonHttpStatusConstants {
  public static readonly OK: number = 200;
}

/** @external */
export class HttpClientStatusConstants extends CommonHttpStatusConstants {
  public static readonly BAD_REQUEST: number = 400;
  public static readonly UNAUTHORIZED: number = 401;
}
