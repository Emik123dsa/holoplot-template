/**
 * GitHub client config auth.
 *
 * @export
 * @abstract
 * @class GitHubClientConfig
 * @typedef {GitHubClientConfig}
 */
export abstract class GitHubClientConfig {
  public abstract getDefaultUserName(): Readonly<string>;
}
