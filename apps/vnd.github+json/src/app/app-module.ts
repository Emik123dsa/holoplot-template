import Vue from 'vue';
import VueRx from 'vue-rx';
import VueRouter from 'vue-router';
import { Plugin as VueFragment } from 'vue-fragment';
import {
  Observable,
  Subject,
  BehaviorSubject,
  ReplaySubject,
  AsyncSubject,
} from 'rxjs';
import { LayoutPlugin } from '@holoplot/cdk/layout';

import { RouterFactory } from '@router';
import AppComponent from '@/app-component';

Vue.config.productionTip =
  process.env.NODE_ENV === 'development' ? false : true;

Vue.use(LayoutPlugin);

Vue.use(VueRx, {
  Observable,
  BehaviorSubject,
  ReplaySubject,
  AsyncSubject,
  Subject,
});

Vue.use(VueFragment);

/**
 * Creates an instance of {@link AppFactory} for app bootstrapping.
 *
 * @export {@link AppFactory} as bootstrap factory.
 * @class AppFactory
 */
export class AppFactory {
  /**
   * Define default mount point.
   *
   * @private {@link String} appMount of {@link AppFactory}.
   * @static variable.
   * @type {Readonly<string>}
   * @memberof AppFactory
   */
  private static readonly appRoot: Readonly<string> = '#app';

  /**
   * Get router factory instance.
   *
   * @static
   * @return {*}  {VueRouter}
   * @memberof AppFactory
   */
  public static getRouterFactory(): VueRouter {
    return RouterFactory.createRouter();
  }
  /**
   * Create application instance.
   *
   * @static createApp.
   * @return {@link Vue} instance of bootstrap application.
   * @memberof AppFactory
   */
  public static createApp<V extends Vue = Vue>(): Vue {
    return new Vue({
      router: AppFactory.getRouterFactory(),
      render: (h) => h(AppComponent),
    }).$mount(AppFactory.appRoot);
  }
}

export const bootstrap: <T>() => Promise<T> = <T>(): Promise<T> => {
  const appFactory: AppFactory = AppFactory.createApp();
  return new Promise((
    resolve: (value: T | PromiseLike<T>) => void,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    reject: (reason?: Error) => void,
  ) => resolve(appFactory as T));
};
