export class GitHubClientConfigConstants {
  public static readonly API_BASE_SCHEME_CONFIG = 'https';
  public static readonly API_BASE_SCHEME_DOC =
    'Default GitHub RestAPI scheme provider';

  public static readonly API_BASE_PORT_CONFIG = 443;
  public static readonly API_BASE_PORT_DOC =
    'Default GitHub RestAPI port provider';

  public static readonly API_BASE_HOST_CONFIG = 'api.github.com';
  public static readonly API_BASE_HOST_DOC: string =
    'Create GitHub RestAPI host provider';

  public static readonly API_BASE_URL_CONFIG: URL | string = '/';
  public static readonly API_BASE_URL_DOC: string =
    'Provide initial endpoint of HttpClient requests';

  public static toBaseURL(): Readonly<string> {
    return (
      GitHubClientConfigConstants.API_BASE_SCHEME_CONFIG +
      '://' +
      GitHubClientConfigConstants.API_BASE_HOST_CONFIG +
      ':' +
      GitHubClientConfigConstants.API_BASE_PORT_CONFIG +
      GitHubClientConfigConstants.API_BASE_URL_CONFIG
    );
  }
}
