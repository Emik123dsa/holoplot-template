import { Commit } from '@holoplot/api/github/models';
import { Observable, pluck } from 'rxjs';
import { Vue, Component, Model, VModel, Prop } from 'vue-property-decorator';
import { Observables } from 'vue-rx';

/**
 * @param  {} 'cdk-repository-hierarchy-list'
 */
export const CommitCtxHistoryConstant: symbol = Symbol.for(
  'cdk-repository-hierarchy-list',
);

/** @internal */
interface CdkCommitHistoryListState {
  cdkCommitHistoryHeaderCellDef: CdkCommitHistoryHeaderCellDef[];
}

/** @internal */
enum CdkCommitHistoryColumnDef {
  AUTHOR = 'AUTHOR',
  MESSAGE = 'MESSAGE',
  EMAIL = 'E-MAIL',
  DATE = 'DATE',
}

/** @internal */
type CdkCommitHistoryHeaderCellDef = {
  label: CdkCommitHistoryColumnDef;
  isAdaptive: boolean;
};

export const CDK_REPOSITORY_HIERARCHY_LIST_FACTORY: () => CdkCommitHistoryListState =
  (): CdkCommitHistoryListState => ({
    cdkCommitHistoryHeaderCellDef: [
      {
        label: CdkCommitHistoryColumnDef.AUTHOR,
        isAdaptive: true,
      },
      {
        label: CdkCommitHistoryColumnDef.MESSAGE,
        isAdaptive: true,
      },
      {
        label: CdkCommitHistoryColumnDef.EMAIL,
        isAdaptive: false,
      },
      {
        label: CdkCommitHistoryColumnDef.DATE,
        isAdaptive: false,
      },
    ],
  });

/**
 * @param  {Symbol.keyFor(CommitCtxHistoryConstant} {name
 * @returns Readonly
 */
@Component<CommitCtxHistory>({
  name: Symbol.keyFor(CommitCtxHistoryConstant),
  subscriptions(): Observables {
    return {};
  },
  components: {
    CdkCommitHistoryColumnDef: () =>
      import(
        /* webpackChunkName: "commitHistoryColumnDef" */ '@helpers/commit-history-column-def.vue'
      ),
  },
  domStreams: ['cdkHeaderCellDefEvent$'],
  observableMethods: {},
})
export default class CommitCtxHistory
  extends Vue
  implements CdkCommitHistoryListState
{
  public cdkCommitHistoryHeaderCellDef: CdkCommitHistoryHeaderCellDef[] =
    this.cdkCommitHistoryListFactory.cdkCommitHistoryHeaderCellDef;

  /**
   * @param  {[Array} {type
   * @param  {} Boolean]
   * @param  {():unknown[]=>[]} default
   * @param  {false} required
   * @param  {} }
   * @param  {Commit[];} publicdataSource!
   * @returns Commit
   */

  @Prop({
    type: [Array, Object, Boolean],
    default: (): unknown[] => [],
    required: false,
  })
  public dataSource!: Commit[];

  public mounted(): void {
    this.$subscribeTo(
      (
        (this as any).cdkHeaderCellDefEvent$ as Observable<{
          event: PointerEvent;
          data: CdkCommitHistoryColumnDef;
        }>
      ).pipe(pluck('data')),
      (columnDef: CdkCommitHistoryColumnDef) => {
        console.log(columnDef);
      },
    );
  }

  /**
   */
  public get cdkCommitHistoryListFactory(): Readonly<CdkCommitHistoryListState> {
    return CDK_REPOSITORY_HIERARCHY_LIST_FACTORY();
  }

  /**
   * @returns Readonly
   */
  public get dataSourceCount(): Readonly<number> {
    return this.dataSource!.length || 0;
  }

  /**
   * @returns Readonly
   */
  public get cdkHeaderCellDefCount(): Readonly<number> {
    return this.cdkCommitHistoryHeaderCellDef!.length || 0;
  }
}
