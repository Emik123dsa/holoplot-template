import { GitHubRequestHeadersConstants } from '../constants/request-headers-constants';

export class GitHubRequestHeadersConfig {
  public requestHeaders = new Map<string, GitHubRequestHeadersConstants>();

  public setAcceptHeader(): void {
    this.requestHeaders.set(
      'Accept',
      GitHubRequestHeadersConstants.API_BASE_CONTENT_TYPE_HEADER,
    );
  }

  public setContentTypeHeader(): void {
    this.requestHeaders.set(
      'Content-Type',
      GitHubRequestHeadersConstants.API_BASE_CONTENT_TYPE_HEADER,
    );
  }

  public getRequestHeaders(): Readonly<
    Map<string, GitHubRequestHeadersConstants>
  > {
    return this.requestHeaders;
  }
}
