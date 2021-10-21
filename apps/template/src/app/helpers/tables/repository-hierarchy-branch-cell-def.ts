import {
  asyncScheduler,
  BehaviorSubject,
  finalize,
  interval,
  Observable,
  observeOn,
  Observer,
  publishReplay,
  refCount,
  share,
  shareReplay,
  Subscription,
  takeUntil,
  tap,
} from 'rxjs';
import type { Repository } from '@holoplot/api/github/models';
import {
  Vue,
  Component,
  Model,
  VModel,
  Prop,
  Emit,
  Inject,
} from 'vue-property-decorator';
import { Observables } from 'vue-rx';
import { BooleanUtils } from '@holoplot/core/utils/boolean-utils';
import { ReactiveGitHubRepositoryService } from '@holoplot/api/github/services';
import { Branch } from '@holoplot/api/github/models/branch';

export const CdkRepositoryHierarchyBranchCellDefConstant: symbol = Symbol.for(
  'cdk-repository-hierarchy-branch-cell-def',
);

export interface CdkRepositoryHierarchyBranchCellDefOptions {
  name: string | null;
}

export const CDK_REPOSITORY_HIERARCHY_BRANCH_CELL_DEF_FACTORY: () => CdkRepositoryHierarchyBranchCellDefOptions =
  (): CdkRepositoryHierarchyBranchCellDefOptions => ({
    name: null,
  });

import ClickOutside from 'vue-click-outside';
import { PageRequest } from '@holoplot/core/paginators';

/**
 * This class is currently implemented `sharedReplay` strategy.
 * Menu will be dispatched into temporary props instead of using VueX.
 *
 * @export
 * @class CdkRepositoryHierarchyBranchCellDef
 * @typedef {CdkRepositoryHierarchyBranchCellDef}
 * @extends {Vue}
 */
@Component<CdkRepositoryHierarchyBranchCellDef>({
  name: Symbol.keyFor(CdkRepositoryHierarchyBranchCellDefConstant),
  subscriptions(): Observables {
    return {};
  },
  comments: true,
  directives: { ClickOutside },
  domStreams: [],
  observableMethods: {},
})
export default class CdkRepositoryHierarchyBranchCellDef extends Vue {
  /**
   * Default buffer chunk size for `sharedReplay`.
   *
   * @public
   * @static
   * @readonly
   * @type {number}
   */
  public static readonly DEFAULT_BUFFER_CHUNK_SIZE: number = 4;

  public columnDef: string | null =
    CdkRepositoryHierarchyBranchCellDef
      .CdkRepositoryHierarchyBranchCellDefFactory.name;

  @Prop({
    default: () => false,
    type: [Object, Boolean],
    required: true,
  })
  public cdkRowDef!: Repository;

  @Prop({
    default: 0,
    type: [Number],
    required: true,
  })
  public index!: number;

  @Inject()
  public readonly reactiveRepositoryService!: ReactiveGitHubRepositoryService;

  /**
   * Data Source Entities.
   *
   * @public
   * @type {Branch[]}
   */
  public values: Branch[] = [];

  /**
   * Repository Service Subscription.
   *
   * @internal
   * @private
   * @type {Subscription}
   */
  private _branchesSubject: BehaviorSubject<Branch[] | null> =
    new BehaviorSubject<Branch[] | null>(null);

  /**
   * Is drop down opened.
   *
   * @public
   * @type {boolean}
   */
  public isDropDownStateOpened: boolean = false;

  /**
   * Is drop down opened handler.
   *
   * @public
   */
  public handleDropDownState(): void {
    this.isDropDownStateOpened = !this.isDropDownStateOpened;
    this.$nextTick();
  }

  /**
   * Hide drop down internally.
   *
   * @public
   * @param {PointerEvent} event
   */
  public hideDropDownState(event: PointerEvent) {
    this.isDropDownStateOpened = BooleanUtils.isBoolean(event);
    this.$nextTick();
  }

  /**
   * Create handler for listening branches sha.
   *
   * @public
   * @param {string} lastBranchSha
   */
  public handleBranchByShaEvent(branchId: string, lastBranchId: string) {
    void this.$router.push({
      path: this.cdkRowDef.name,
      query: { sha: lastBranchId },
      params: { repositoryId: this.cdkRowDef.name },
    });
    this.$nextTick();
  }

  /**
   * Branches source as observable.
   *
   * @private
   * @type {(Observable<Branch[] | null>)}
   */
  private _branchesDataSource: Observable<Branch[] | null> =
    this._branchesSubject.asObservable().pipe(takeUntil(this._branchesSubject));

  /**
   * Handle click events emitter.
   *
   * @public
   * @param {string} repositoryName
   */
  @Emit('handle-click-event')
  public handleBranchEvent(): void {
    void this._branchesDataSource
      .pipe(finalize(this.handleDropDownState))
      .subscribe({
        next: (values: Branch[] | null) => this.$set(this, 'values', values),
        error: () => this.$set(this, 'values', null),
        complete: () => this.$nextTick,
      });
  }

  public created(): void {
    const { name: defaultBranch }: Repository = this.cdkRowDef;
    this._branchesDataSource = this.reactiveRepositoryService
      .findAllBranchByRepositoryId(defaultBranch)
      .pipe(
        observeOn(asyncScheduler, 0),
        shareReplay({
          refCount: true,
          bufferSize:
            CdkRepositoryHierarchyBranchCellDef.DEFAULT_BUFFER_CHUNK_SIZE,
        }),
      );
  }

  /**
   * Destroy branches subject, will be re-fetched
   * in the case of back routing.
   *
   * @public
   */
  public beforeDestroy(): void {
    if (this._branchesSubject) {
      this._branchesSubject.next(null);
      this._branchesSubject.complete();
    }
  }

  public static get CdkRepositoryHierarchyBranchCellDefFactory(): Readonly<CdkRepositoryHierarchyBranchCellDefOptions> {
    return CDK_REPOSITORY_HIERARCHY_BRANCH_CELL_DEF_FACTORY();
  }
}
