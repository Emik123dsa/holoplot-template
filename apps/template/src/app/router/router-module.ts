import Vue from 'vue';
import VueRouter, { RouterMode } from 'vue-router';
import { routesProvider } from '@routes';
import { Position, Route } from 'vue-router/types/router';

void Vue.use(VueRouter);

/**
 * Static class provider for creating a custom instance of {@link VueRouter}.
 *
 * @param  {RouterFactory.ROUTER_BASE_MODE} mode
 * @param  {process.env.BASE_URL} base
 * @param  {routesProvider} routes
 * @param  {RouterFactory.ROUTER_LINK_ACTIVE_CLASS} linkActiveClass
 * @param  {RouterFactory.ROUTER_LINK_EXACT_ACTIVE_CLASS} linkExactActiveClass
 * @param  {(to:Route,from:Route,savedPosition:Position|void,):Promise<void>=>{return newPromise((resolve:(value:void|PromiseLike<void>} scrollBehavior
 */
export class RouterFactory {
  private static readonly ROUTER_BASE_MODE: RouterMode = 'history';

  private static readonly ROUTER_LINK_ACTIVE_CLASS: string = 'cdk-active';

  private static readonly ROUTER_LINK_EXACT_ACTIVE_CLASS: string = 'cdk-active';

  /**
   * Create instance of router factory.
   *
   * @returns VueRouter
   */
  public static createRouter(): VueRouter {
    return new VueRouter({
      fallback: true,
      mode: RouterFactory.ROUTER_BASE_MODE,
      base: process.env.BASE_URL,
      routes: routesProvider,
      linkActiveClass: RouterFactory.ROUTER_LINK_ACTIVE_CLASS,
      linkExactActiveClass: RouterFactory.ROUTER_LINK_EXACT_ACTIVE_CLASS,
      scrollBehavior: (
        to: Route,
        from: Route,
        savedPosition: Position | void,
      ): Promise<void> => {
        return new Promise(
          (
            resolve: (value: void | PromiseLike<void>) => void,
            reject: (reason?: any) => void,
          ): void => {
            setTimeout((): void => {
              // TODO: resolve crutch implementation to normal type ...
              resolve({ x: 0, y: 0 } as any);
            }, 0);
          },
        );
      },
    });
  }
}
