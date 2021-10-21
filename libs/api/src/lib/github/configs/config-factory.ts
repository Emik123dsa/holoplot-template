import { MapUtils } from '@holoplot/core/utils/map-utils';
import { HttpRequestHeaders } from '@holoplot/common/http';
import { GitHubRequestHeadersConfig } from './request-headers-config';
/**
 * Static config factory.
 *
 * @external {@link GitHubConfigFactory}
 */
export class GitHubConfigFactory {
  /**
   * Create an instance of GitHub request headers.
   *
   * @static
   * @external {@link GitHubConfigFactory}
   */
  public static createGitHubRequestHeadersConfig(): Readonly<HttpRequestHeaders> {
    const headersConfig: GitHubRequestHeadersConfig =
      new GitHubRequestHeadersConfig();
    headersConfig.setAcceptHeader();
    headersConfig.setContentTypeHeader();
    return MapUtils.toObject(
      headersConfig.getRequestHeaders(),
    ) as HttpRequestHeaders;
  }
}
