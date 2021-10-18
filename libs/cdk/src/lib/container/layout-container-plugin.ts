/* eslint-disable @typescript-eslint/no-unused-vars */
import _Vue, { PluginFunction, PluginObject } from 'vue';

import { CdkLayoutContainerConstant } from './layout-container';
import CdkLayoutContainer from './layout-container.vue';
export const CdkLayoutContainerPlugin:
  | PluginObject<CdkLayoutContainerPluginOptions>
  | PluginFunction<CdkLayoutContainerPluginOptions> = {
  install: (
    Vue: typeof _Vue,
    options?: CdkLayoutContainerPluginOptions | undefined,
  ): void => {
    Vue.component(
      Symbol.keyFor(CdkLayoutContainerConstant) as string,
      CdkLayoutContainer,
    );
  },
};

export class CdkLayoutContainerPluginOptions {}
