/* eslint-disable @typescript-eslint/no-unused-vars */
import _Vue, { PluginFunction, PluginObject } from 'vue';

import VueMdifjs from 'vue-mdijs';

import { CDK_BASE_ICON_STATIC_PROVIDERS_FACTORY } from './base-icon-config';

import { CdkBaseIconConstants } from './base-icon';

import CdkBaseIcon from './base-icon';

export const CdkLayoutContainerPlugin:
  | PluginObject<CdkLayoutContainerPluginOptions>
  | PluginFunction<CdkLayoutContainerPluginOptions> = {
  install: (
    Vue: typeof _Vue,
    options?: CdkLayoutContainerPluginOptions | undefined,
  ): void => {
    void VueMdifjs.add(CDK_BASE_ICON_STATIC_PROVIDERS_FACTORY());
    Vue.use(VueMdifjs);
    Vue.component(Symbol.keyFor(CdkBaseIconConstants) as string, CdkBaseIcon);
  },
};

export class CdkLayoutContainerPluginOptions {}
