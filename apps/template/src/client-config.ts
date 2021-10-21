import { GitHubClientConfig } from '@holoplot/api/github/configs/client-config';

/**
 * Client config impl.
 *
 * @export
 * @class ClientConfig
 * @typedef {ClientConfig}
 */
export class CustomGitHubClientConfig extends GitHubClientConfig {
  /**
   * Default client credentials.
   * TODO: implement authentication with other credentials.
   * @public
   * @static
   * @readonly
   * @type {string}
   */
  public override getDefaultUserName(): Readonly<string> {
    return process.env.DEFAULT_CLIENT_USERNAME || 'holoplot';
  }
}
