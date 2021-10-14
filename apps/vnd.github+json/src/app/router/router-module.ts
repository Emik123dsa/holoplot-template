import Vue from 'vue';
import VueRouter, { RouterMode } from 'vue-router';
import { routesProvider } from '@routes';

Vue.use(VueRouter);

export class RouterFactory {
  private static readonly ROUTER_BASE_MODE: RouterMode = 'history';

  public static createRouter(): VueRouter {
    return new VueRouter({
      mode: RouterFactory.ROUTER_BASE_MODE,
      base: process.env.BASE_URL,
      routes: routesProvider,
    });
  }
}
