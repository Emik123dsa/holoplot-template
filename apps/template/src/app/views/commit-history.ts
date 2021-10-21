import type { Commit } from '@holoplot/api/github/models';
import type { ReactiveGitHubRepositoryService } from '@holoplot/api/github/services';
import { BooleanUtils } from '@holoplot/core/utils/boolean-utils';
import { URIUtils } from '@holoplot/core/utils/uri-utils';
import {
  Observable,
  BehaviorSubject,
  takeUntil,
  observeOn,
  asyncScheduler,
  shareReplay,
} from 'rxjs';
import { Vue, Component, Inject } from 'vue-property-decorator';
import { Observables } from 'vue-rx';

const CommitHistoryConstant: symbol = Symbol.for('CommitHistory');

Component.registerHooks(['beforeRouteEnter', 'beforeRouterUpdate']);

@Component<CommitHistory>({
  name: Symbol.keyFor(CommitHistoryConstant),
  subscriptions(): Observables {
    return {};
  },
  components: {
    CdkCommitCtxHistory: () => import('@ctx/commit-ctx-history.vue'),
  },
  domStreams: [],
  observableMethods: [],
})
export default class CommitHistory extends Vue {
  private static readonly DEFAULT_CLIENT_USERNAME = 'holoplot';

  private static readonly BUFFER_DEFAULT_CHUNK_SIZE: number = 4;

  public dataSource: Commit[] = [] as Commit[];

  @Inject()
  public readonly reactiveRepositoryService!: ReactiveGitHubRepositoryService;

  /**
   * Commits data source subject.
   *
   * @private
   * @type {(BehaviorSubject<Commit[] | null>)}
   */
  private _commitsDataSourceSubject: BehaviorSubject<Commit[] | null> =
    new BehaviorSubject<Commit[] | null>(null);

  /**
   * Observable for commits data source subject.
   *
   * @private
   * @type {(Observable<Commit[] | null>)}
   */
  private _commitsDataSource: Observable<Commit[] | null> =
    this._commitsDataSourceSubject
      .asObservable()
      .pipe(takeUntil(this._commitsDataSourceSubject));

  public created(): void {
    this._commitsDataSource = this.reactiveRepositoryService
      .findAllCommitByRepositoryIdAndBranchId(
        this.defaultRepositoryId as string,
        this.defaultBranchHash as string,
      )
      .pipe(
        observeOn(asyncScheduler, 0),
        shareReplay({
          refCount: true,
          bufferSize: CommitHistory.BUFFER_DEFAULT_CHUNK_SIZE,
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
    next((vm: CommitHistory) => {
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
    this._fetchAllCommitByRepositoryIdAndBranchId();
  }

  private _fetchAllCommitByRepositoryIdAndBranchId(): void {
    void this._commitsDataSource.subscribe({
      next: (dataSource: Commit[] | null) =>
        this.$set(this, 'dataSource', dataSource),
      error: () =>
        this.$router.push({
          path: URIUtils.HTTP_QUERY_CLIENT_TRAILING_SLASH,
          query: { error: BooleanUtils.TRUE },
        }),
      complete: () => this.$nextTick,
    });
  }

  public beforeDestroy(): void {
    if (this._commitsDataSourceSubject) {
      this._commitsDataSourceSubject.next(null);
      this._commitsDataSourceSubject.complete();
    }
  }

  public get defaultRepositoryId(): Readonly<string | null> {
    return this.$route.params.repositoryId || null;
  }

  public get defaultBranchHash(): string | ReadonlyArray<string | null> | null {
    return this.$route.query.sha || null;
  }
}
