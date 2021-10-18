import { Repository } from '@holoplot/api/github/models';
import { Observable } from 'rxjs';
import { Vue, Component, Model, VModel, Prop } from 'vue-property-decorator';
import { Observables } from 'vue-rx';

export const RepositoryCtxHierarchyConstant: symbol = Symbol.for(
  'cdk-repository-hierarchy-list',
);

export interface CdkRepositoryHierarchyListOptions {}

export const CDK_REPOSITORY_HIERARCHY_LIST_FACTORY: () => CdkRepositoryHierarchyListOptions =
  (): CdkRepositoryHierarchyListOptions => ({});

@Component<RepositoryCtxHierarchy>({
  name: Symbol.keyFor(RepositoryCtxHierarchyConstant),
  subscriptions(): Observables {
    return {};
  },
  domStreams: [],
  observableMethods: {},
})
export default class RepositoryCtxHierarchy extends Vue {
  public cdkColumnDefs: string[] = [
    'REPOSITORY',
    'BRANCH',
    'LANGUAGE',
    'LICENSE',
    'DATE CREATED',
    'DATE UPDATED',
  ];

  @Prop({
    type: [Array],
    default: [],
    required: true,
  })
  public _dataSource!: Repository[];

  public set dataSource(dateSource: Repository[]) {
    this._dataSource = dateSource;
  }

  public get dataSource() {
    return this._dataSource;
  }

  public created(): void {}

  @Prop({
    default: [],
    type: [Array],
    required: true,
  })
  public repositories!: any[];

  public mounted(): void {}

  public static get cdkRepositoryHierarchyListFactory(): Readonly<CdkRepositoryHierarchyListOptions> {
    return CDK_REPOSITORY_HIERARCHY_LIST_FACTORY();
  }

  public get getRepositoriesCount(): Readonly<number> {
    return this.repositories!.length || 0;
  }
}
