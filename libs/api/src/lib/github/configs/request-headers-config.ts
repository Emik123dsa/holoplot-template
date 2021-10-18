import { GithubRequestHeadersConstants } from '../constants/request-headers-constants';

export class GithubRequestHeadersConfig {
  public static requestHeaders = new Map<
    string,
    GithubRequestHeadersConstants
  >();

  public static setAcceptHeader() {
    GithubRequestHeadersConfig.requestHeaders.set(
      'Accept',
      GithubRequestHeadersConstants.API_BASE_CONTENT_TYPE_HEADER,
    );
  }

  public static setContentTypeHeader() {
    GithubRequestHeadersConfig.requestHeaders.set(
      'Content-Type',
      GithubRequestHeadersConstants.API_BASE_CONTENT_TYPE_HEADER,
    );
  }

  public static getRequestHeaders() {
    return GithubRequestHeadersConfig.requestHeaders;
  }
}
