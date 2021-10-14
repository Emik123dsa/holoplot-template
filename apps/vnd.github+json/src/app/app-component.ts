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
} from 'rxjs';

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
    fromFetch('https://api.github.com/users/holoplot/repos', {
      headers: {
        Accept: 'application/vnd.github+json',
        'Content-Type': 'application/vnd.github+json',
      },
    })
      .pipe(
        mergeMap(({ json, ok }) => iif(() => ok, of(json), EMPTY)),
        throwIfEmpty(),
        observeOn(asyncScheduler),
        shareReplay({ refCount: true, bufferSize: 1 }),
      )
      .subscribe({
        next: () => {},
        error: (err: Error) => {},
        complete: () => {},
      });
  }
}
