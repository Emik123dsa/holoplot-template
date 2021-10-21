/* eslint-disable @typescript-eslint/no-unused-vars */
import _Vue, { PluginFunction, PluginObject } from 'vue';

import { CdkFlatButtonConstant } from './flat-button';
import CdkFlatButton from './flat-button';

export const CdkButtonPlugin:
  | PluginObject<CdkButtonPluginOptions>
  | PluginFunction<CdkButtonPluginOptions> = {
  install: (
    Vue: typeof _Vue,
    options?: CdkButtonPluginOptions | undefined,
  ): void => {
    Vue.component(
      Symbol.keyFor(CdkFlatButtonConstant) as string,
      CdkFlatButton,
    );
  },
};

export class CdkButtonPluginOptions {}
