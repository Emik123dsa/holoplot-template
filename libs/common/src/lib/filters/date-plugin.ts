/* eslint-disable @typescript-eslint/no-unused-vars */
import _Vue, { PluginFunction, PluginObject } from 'vue';

import { CdkDateFilterConstants, CdkDateFilter } from './date-filter';

export const CdkDateFilterPlugin:
  | PluginObject<CdkDatePluginOptions>
  | PluginFunction<CdkDatePluginOptions> = {
  install: (
    Vue: typeof _Vue,
    options?: CdkDatePluginOptions | undefined,
  ): void => {
    Vue.filter(Symbol.keyFor(CdkDateFilterConstants) as string, CdkDateFilter);
  },
};

export class CdkDatePluginOptions {}
