import type {
  ReactiveGitHubRepositoryService,
  ReactiveGitHubUserService,
} from '@holoplot/api/github/services';
import { Component, Provide, Vue } from 'vue-property-decorator';
import { SimpleGitHubRepositoryService } from './impl/repository-service';
import { SimpleGitHubUserService } from './impl/user-service';

/**
 * GitHub client service constant.
 *
 * @internal
 * @type {symbol}
 */
export const GitHubClientServiceConstants: symbol = Symbol.for(
  'github-client-service',
);

@Component<GitHubClientService>({
  name: Symbol.keyFor(GitHubClientServiceConstants),
  comments: false,
})
export class GitHubClientService extends Vue {
  @Provide()
  public reactiveUserService: ReactiveGitHubUserService = new SimpleGitHubUserService();

  @Provide()
  public reactiveRepositoryService: ReactiveGitHubRepositoryService = new SimpleGitHubRepositoryService();
}
