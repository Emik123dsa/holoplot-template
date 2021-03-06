/* eslint-disable @typescript-eslint/no-unused-vars */
import _Vue, { PluginFunction, PluginObject, VueConstructor } from 'vue';
import FooterLayout from './footer-layout.vue';
import { FooterLayoutConstant } from './footer-layout';
import HeaderLayout from './header-layout.vue';
import { HeaderLayoutConstant } from './header-layout';
export const CdkLayoutPlugin:
  | PluginObject<CdkLayoutPluginOptions>
  | PluginFunction<CdkLayoutPluginOptions> = {
  install: (
    Vue: typeof _Vue,
    options?: CdkLayoutPluginOptions | undefined,
  ): void => {
    Vue.component(Symbol.keyFor(HeaderLayoutConstant) as string, HeaderLayout);
    Vue.component(Symbol.keyFor(FooterLayoutConstant) as string, FooterLayout);
  },
};

export class CdkLayoutPluginOptions {}
