import {
  asyncScheduler,
  observeOn,
  shareReplay,
  takeUntil,
  Subject,
  Observable,
  BehaviorSubject,
} from 'rxjs';
import { Vue, Component, Inject } from 'vue-property-decorator';
import { Observables } from 'vue-rx';
import { Repository } from '@holoplot/api/github/models';
import { ReactiveGitHubUserService } from '@holoplot/api/github/services';

const RepositoryHierarchyConstant: symbol = Symbol.for('RepositoryHierarchy');

Component.registerHooks(['beforeRouteEnter', 'beforeRouteUpdate']);

@Component<RepositoryHierarchy>({
  name: Symbol.keyFor(RepositoryHierarchyConstant),
  components: {
    CdkRepositoryCtxHierarchy: () =>
      import('@ctx/repository-ctx-hierarchy.vue'),
  },
  subscriptions(): Observables {
    return {};
  },
})
export default class RepositoryHierarchy extends Vue {
  private static readonly BUFFER_DEFAULT_CHUNK_SIZE: number = 4;

  public dataSource: Repository[] = [] as Repository[];

  @Inject()
  public readonly reactiveUserService!: ReactiveGitHubUserService;

  /**
   * Provide repositories data source subject.
   *
   * @private
   * @type {Subject<any>}
   */
  private _repositoriesDataSourceSubject: BehaviorSubject<Repository[] | null> =
    new BehaviorSubject<Repository[] | null>(null);

  /**
   * Create observable for repositories data source.
   *
   * @private
   * @type {(Observable<Repository[] | null>)}
   */
  private _repositoriesDataSource: Observable<Repository[] | null> =
    this._repositoriesDataSourceSubject
      .asObservable()
      .pipe(takeUntil(this._repositoriesDataSourceSubject));

  /**
   * Create repositories reactive service.
   *
   * @public
   */
  public created(): void {
    this._repositoriesDataSource = this.reactiveUserService
      .findAllRepository()
      .pipe(
        observeOn(asyncScheduler, 0),
        shareReplay({
          refCount: true,
          bufferSize: RepositoryHierarchy.BUFFER_DEFAULT_CHUNK_SIZE,
        }),
      );
  }

  /**
   * Before RouteEnter
   *
   * @public
   * @param {Location} to
   * @param {Location} from
   * @param {Function} next
   */
  public beforeRouteEnter(to: Location, from: Location, next: Function): void {
    next((vm: RepositoryHierarchy) => {
      vm.onRouteUpdate(to, from, next);
    });
  }

  /**
   * Before Route Update
   *
   * @public
   * @param {Location} to
   * @param {Location} from
   * @param {Function} next
   */
  public beforeRouteUpdate(to: Location, from: Location, next: Function): void {
    this.onRouteUpdate(to, from, next);
  }

  /**
   * Reactive fetch repositories before route will be inserted/updated.
   *
   * @public
   * @param {Location} to
   * @param {Location} from
   * @param {Function} next
   */
  public onRouteUpdate(to: Location, from: Location, next: Function): void {
    next();
    this._fetchAllRepositoryByUserName();
  }

  /**
   * Description placeholder
   *
   * @private
   */
  private _fetchAllRepositoryByUserName(): void {
    this._repositoriesDataSource.subscribe({
      next: (dataSource: Repository[] | null) =>
        this.$set(this, 'dataSource', dataSource),
      error: () => this.$set(this, 'dataSource', null),
      complete: () => this.$nextTick,
    });
  }

  /**
   * Unsubscribe from {@link findAllRepositoryByUserName}.
   *
   * @see this#findAllRepositoryByUserName
   * @public
   */
  public beforeDestroy(): void {
    if (this._repositoriesDataSourceSubject) {
      this._repositoriesDataSourceSubject.next(null);
      this._repositoriesDataSourceSubject.complete();
    }
  }
}
