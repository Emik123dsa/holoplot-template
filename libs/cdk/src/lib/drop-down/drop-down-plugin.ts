/* eslint-disable @typescript-eslint/no-unused-vars */
import _Vue, { PluginFunction, PluginObject } from 'vue';

import { CdkDropDownConstant } from './drop-down';
import CdkDropDown from './drop-down.vue';

export const CdkDropDownPlugin:
  | PluginObject<CdkDropDownPluginOptions>
  | PluginFunction<CdkDropDownPluginOptions> = {
  install: (
    Vue: typeof _Vue,
    options?: CdkDropDownPluginOptions | undefined,
  ): void => {
    Vue.component(Symbol.keyFor(CdkDropDownConstant) as string, CdkDropDown);
  },
};

export class CdkDropDownPluginOptions {}
