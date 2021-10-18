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

import { Repository } from '@holoplot/api/github/models';

export const AppComponentConstant: symbol = Symbol.for('AppComponent');

@Component<AppComponent>({
  name: Symbol.keyFor(AppComponentConstant),
  subscriptions(): Observables {
    return {};
  },
  domStreams: [],
  observableMethods: {},
})
export default class AppComponent extends Vue {
  public mounted(): void {
    // findRepositoriesByName<RepositoryModel[]>('holoplot')
    //   .pipe(shareReplay({ refCount: true, bufferSize: 4 }))
    //   .subscribe((data: RepositoryModel[] | null) => {
    //     console.log(data && data[0].archive_url);
    //   });
  }
}
