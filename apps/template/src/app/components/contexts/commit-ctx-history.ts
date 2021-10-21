import { Observable } from 'rxjs';
import { Repository } from '@holoplot/api/github/models';
import { Vue, Component, Model, VModel, Prop } from 'vue-property-decorator';
import { Observables } from 'vue-rx';

export const CdkCommitCtxHistoryConstant: symbol = Symbol.for(
  'cdk-commit-ctx-history',
);

interface CdkCommitCtxHistoryState {
  dataName: string;
}

export interface CdkCommitCtxHistoryOptions {
  name: string;
}

export const CDK_COMMIT_CTX_HISTORY_FACTORY: () => CdkCommitCtxHistoryOptions =
  (): CdkCommitCtxHistoryOptions => ({ name: 'Your GitHub commits' });

@Component<CdkCommitCtxHistory>({
  comments: true,
  name: Symbol.keyFor(CdkCommitCtxHistoryConstant),
  subscriptions(): Observables {
    return {};
  },
  components: {
    CdkCommitHistoryList: () => import('@components/commit-history-list.vue'),
    CdkCommitCtxHistoryHeader: () =>
      import('@ctx/headers/commit-ctx-history-header.vue'),
    CdkCommitCtxHistoryFooter: () =>
      import('@ctx/footers/commit-ctx-history-footer.vue'),
  },
  domStreams: [],
  observableMethods: [],
})
export default class CdkCommitCtxHistory
  extends Vue
  implements CdkCommitCtxHistoryState
{
  public dataName: string = CdkCommitCtxHistory.cdkCommitCtxHistoryFactory.name;

  @Prop({
    default: {},
    type: [Object, Boolean, Array],
    required: true,
  })
  public dataSource!: Repository[];

  public mounted(): void {}

  public static get cdkCommitCtxHistoryFactory(): Readonly<CdkCommitCtxHistoryOptions> {
    return CDK_COMMIT_CTX_HISTORY_FACTORY();
  }

  public get dataSourceCount(): Readonly<number> {
    return this.dataSource!.length || 0;
  }
}
