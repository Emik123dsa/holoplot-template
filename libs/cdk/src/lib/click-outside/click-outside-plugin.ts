/* eslint-disable @typescript-eslint/no-unused-vars */
import _Vue, { PluginFunction, PluginObject } from 'vue';
import ClickOutside from 'vue-click-outside';
import { CdkClickOutsideConstant } from './click-outside';
export const CdkClickOutsidePlugin:
  | PluginObject<CdkClickOutsidePluginOptions>
  | PluginFunction<CdkClickOutsidePluginOptions> = {
  install: (
    Vue: typeof _Vue,
    options?: CdkClickOutsidePluginOptions | undefined,
  ): void => {
    Vue.directive(
      Symbol.keyFor(CdkClickOutsideConstant) as string,
      ClickOutside,
    );
  },
};

export class CdkClickOutsidePluginOptions {}
