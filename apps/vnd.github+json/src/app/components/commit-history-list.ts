import { Observable } from 'rxjs';
import { Vue, Component, Model, VModel } from 'vue-property-decorator';
import { Observables } from 'vue-rx';

export const RepositoryCtxHierarchyConstant: symbol = Symbol.for(
  'cdk-commit-history-list',
);

export interface CdkCommitHistoryListOptions {
  name: string;
}

export const CDK_COMMIT_HISTORY_LIST_FACTORY: () => CdkCommitHistoryListOptions =
  (): CdkCommitHistoryListOptions => ({ name: 'Your Repositories Table' });

@Component<RepositoryCtxHierarchy>({
  name: Symbol.keyFor(RepositoryCtxHierarchyConstant),
  subscriptions(): Observables {
    return {};
  },
  domStreams: [],
  observableMethods: {},
})
export default class RepositoryCtxHierarchy extends Vue {
  public repositoryCtxName: string =
    RepositoryCtxHierarchy.cdkRepositoryCtxFactory.name;

  public mounted(): void {}

  public static get cdkRepositoryCtxFactory(): Readonly<CdkCommitHistoryListOptions> {
    return CDK_COMMIT_HISTORY_LIST_FACTORY();
  }
}
