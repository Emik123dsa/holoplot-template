import { ReactiveHttpClientRequestFactory } from '@holoplot/common/http/client';
import { GitHubConfigFactory } from '../../configs/config-factory';

export class GitHubClientRequestFactory extends ReactiveHttpClientRequestFactory {
  /**
   * Override abort signal.
   *
   * @public
   * @override
   * @returns {Readonly<AbortSignal>}
   */
  public override getAbortSignal(): Readonly<AbortSignal> {
    return new AbortController().signal;
  }

  /**
   * Cache provider, it's required for overriding template.
   *
   * @public
   * @override
   * @returns {RequestCache}
   */
  public override getCache(): RequestCache {
    return 'no-store';
  }

  /**
   * Override credentials.
   *
   * @public
   * @override
   * @returns {RequestCredentials}
   */
  public override getCredentials(): RequestCredentials {
    return 'omit';
  }

  /**
   * Override headers.
   *
   * @public
   * @override
   * @returns {HeadersInit}
   */
  public override getHeaders(): HeadersInit {
    return GitHubConfigFactory.createGitHubRequestHeadersConfig() as HeadersInit;
  }

  /**
   * Override integrity.
   *
   * @public
   * @override
   * @returns {string}
   */
  public override getIntegrity(): string | null {
    return 'anonymous';
  }

  /**
   * Override keep alive.
   *
   * @public
   * @override
   * @returns {boolean}
   */
  public override getKeepAlive(): boolean {
    return false;
  }

  /**
   * Override mode factory.
   *
   * @public
   * @override
   * @returns {RequestMode}
   */
  public override getMode(): RequestMode {
    return 'cors';
  }

  /**
   * Override redirect.
   *
   * @public
   * @override
   * @returns {RequestRedirect}
   */
  public override getRedirect(): RequestRedirect {
    return 'follow';
  }

  /**
   * Override referrer.
   *
   * @public
   * @override
   * @returns {string}
   */
  public override getReferrer(): string | null {
    return null;
  }

  /**
   * Description placeholder
   *
   * @public
   * @override
   * @returns {ReferrerPolicy}
   */
  public override getRefererPolicy(): ReferrerPolicy {
    return 'strict-origin-when-cross-origin';
  }
}
