/* eslint-disable @typescript-eslint/no-unused-vars */
import _Vue, { PluginFunction, PluginObject, VueConstructor } from 'vue';

export const LayoutPlugin:
  | PluginObject<LayoutPluginOptions>
  | PluginFunction<LayoutPluginOptions> = {
  install: (
    Vue: typeof _Vue,
    options?: LayoutPluginOptions | undefined,
  ): void => {
    console.log('hello, honey');
  },
};

export class LayoutPluginOptions {}
