import { Repository } from '@holoplot/api/github/models';
import { Observable, pluck } from 'rxjs';
import { Vue, Component, Model, VModel, Prop } from 'vue-property-decorator';
import { Observables } from 'vue-rx';

/**
 * @param  {} 'cdk-repository-hierarchy-list'
 */
export const RepositoryCtxHierarchyConstant: symbol = Symbol.for(
  'cdk-repository-hierarchy-list',
);

/** @internal */
interface CdkRepositoryHierarchyListState {
  cdkRepositoryHierarchyHeaderCellDef: CdkRepositoryHierarchyHeaderCellDef[];
}

/** @internal */
enum CdkRepositoryHierarchyColumnDef {
  REPOSITORY = 'REPOSITORY',
  BRANCH = 'BRANCH',
  LANGUAGE = 'LANGUAGE',
  LICENSE = 'LICENSE',
  DATE_CREATED = 'DATE CREATED',
  DATE_UPDATED = 'DATE UPDATED',
}

/** @internal */
type CdkRepositoryHierarchyHeaderCellDef = {
  label: CdkRepositoryHierarchyColumnDef;
  isAdaptive: boolean;
};

export const CDK_REPOSITORY_HIERARCHY_LIST_FACTORY: () => CdkRepositoryHierarchyListState =
  (): CdkRepositoryHierarchyListState => ({
    cdkRepositoryHierarchyHeaderCellDef: [
      {
        label: CdkRepositoryHierarchyColumnDef.REPOSITORY,
        isAdaptive: true,
      },
      {
        label: CdkRepositoryHierarchyColumnDef.BRANCH,
        isAdaptive: true,
      },
      {
        label: CdkRepositoryHierarchyColumnDef.LANGUAGE,
        isAdaptive: false,
      },
      {
        label: CdkRepositoryHierarchyColumnDef.LICENSE,
        isAdaptive: false,
      },
      {
        label: CdkRepositoryHierarchyColumnDef.DATE_CREATED,
        isAdaptive: true,
      },
      {
        label: CdkRepositoryHierarchyColumnDef.DATE_UPDATED,
        isAdaptive: true,
      },
    ],
  });

/**
 * @param  {Symbol.keyFor(RepositoryCtxHierarchyConstant} {name
 * @returns Readonly
 */
@Component<RepositoryCtxHierarchy>({
  name: Symbol.keyFor(RepositoryCtxHierarchyConstant),
  subscriptions(): Observables {
    return {};
  },
  components: {
    CdkRepositoryHierarchyColumnDef: () =>
      import('@helpers/repository-hierarchy-column-def.vue'),
  },
  domStreams: ['cdkHeaderCellDefEvent$'],
  observableMethods: {},
})
export default class RepositoryCtxHierarchy
  extends Vue
  implements CdkRepositoryHierarchyListState
{
  public cdkRepositoryHierarchyHeaderCellDef: CdkRepositoryHierarchyHeaderCellDef[] =
    this.cdkRepositoryHierarchyListFactory.cdkRepositoryHierarchyHeaderCellDef;

  /**
   * @param  {[Array} {type
   * @param  {} Boolean]
   * @param  {():unknown[]=>[]} default
   * @param  {false} required
   * @param  {} }
   * @param  {Repository[];} publicdataSource!
   * @returns Repository
   */

  @Prop({
    type: [Array, Object, Boolean],
    default: (): unknown[] => [],
    required: false,
  })
  public dataSource!: Repository[];

  public mounted(): void {
    this.$subscribeTo(
      (
        (this as any).cdkHeaderCellDefEvent$ as Observable<{
          event: PointerEvent;
          data: CdkRepositoryHierarchyColumnDef;
        }>
      ).pipe(pluck('data')),
      (columnDef: CdkRepositoryHierarchyColumnDef) => {
        console.log(columnDef);
      },
    );
  }

  /**
   */
  public get cdkRepositoryHierarchyListFactory(): Readonly<CdkRepositoryHierarchyListState> {
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
    return this.cdkRepositoryHierarchyHeaderCellDef!.length || 0;
  }
}
