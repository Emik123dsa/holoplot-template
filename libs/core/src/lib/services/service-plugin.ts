/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  ReactiveGitHubRepositoryService,
  ReactiveGitHubUserService,
} from '@holoplot/api/github/services';
import { GitHubClientConfig } from '@holoplot/api/github/configs/client-config';
import _Vue, { PluginFunction, PluginObject } from 'vue';
import { GitHubClientServiceConstants } from './client-service';
import { GitHubClientService } from './client-service';
import { SimpleGitHubRepositoryService } from './impl/repository-service';
import { SimpleGitHubUserService } from './impl/user-service';
import { StringUtils } from '../utils/string-utils';

export const GitHubClientPlugin:
  | PluginObject<GitHubClientPluginOptions>
  | PluginFunction<GitHubClientPluginOptions> = {
  install: (
    Vue: typeof _Vue,
    options?: GitHubClientPluginOptions | undefined,
  ): void => {
    console.warn(
      StringUtils.format(
        'GitHubClientConfig has overrides: %s',
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        options!.clientProvider!.getDefaultUserName() as string,
      ),
    );

    const userId: string =
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      options!.clientProvider!.getDefaultUserName() as string;
    Vue.mixin({
      provide: {
        reactiveUserService: new SimpleGitHubUserService().setUserId(userId),
        reactiveRepositoryService:
          new SimpleGitHubRepositoryService().setUserId(userId),
      },
    });
  },
};

export class GitHubClientPluginOptions {
  public clientProvider?: GitHubClientConfig;
}
