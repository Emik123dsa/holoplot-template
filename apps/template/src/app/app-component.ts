import { Vue, Component, Ref } from 'vue-property-decorator';
import { Observables } from 'vue-rx';
import { fromFetch } from 'rxjs/fetch';

import {
  catchError,
  observeOn,
  shareReplay,
  asyncScheduler,
  throwError,
  throwIfEmpty,
  Observable,
  mergeMap,
  iif,
  of,
  EMPTY,
  switchMap,
  Observer,
  TeardownLogic,
  Subscriber,
  OperatorFunction,
} from 'rxjs';

export const CdkAppComponentConstant: symbol = Symbol.for('cdk-app-component');

@Component<CdkAppComponent>({
  name: Symbol.keyFor(CdkAppComponentConstant),
  subscriptions(): Observables {
    return {};
  },
  domStreams: [],
  observableMethods: {},
})
export default class CdkAppComponent extends Vue {}
