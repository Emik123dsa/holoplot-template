/* eslint-disable @typescript-eslint/no-unused-vars */
import _Vue, { PluginFunction, PluginObject } from 'vue';
import VueMdifjs from 'vue-mdijs';
import _mdiJs from '@mdi/js';
import { CdkBaseIconConstants } from './base-icon';
import CdkBaseIcon from './base-icon';
import { CDK_BASE_ICON_STATIC_PROVIDERS_FACTORY } from './base-icon-config';

export const CdkBaseIconPlugin:
  | PluginObject<CdkBaseIconPluginOptions>
  | PluginFunction<CdkBaseIconPluginOptions> = {
  install: (
    Vue: typeof _Vue,
    options?: CdkBaseIconPluginOptions | undefined,
  ): void => {
    void VueMdifjs.add(CDK_BASE_ICON_STATIC_PROVIDERS_FACTORY());
    Vue.use(VueMdifjs);
    Vue.component(Symbol.keyFor(CdkBaseIconConstants) as string, CdkBaseIcon);
  },
};

export class CdkBaseIconPluginOptions {}
