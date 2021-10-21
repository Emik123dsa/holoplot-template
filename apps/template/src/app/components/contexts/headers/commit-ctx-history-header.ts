import { Observable } from 'rxjs';
import { Vue, Component } from 'vue-property-decorator';
import { Observables } from 'vue-rx';

export const CommitCtxHistoryHeaderConstant: symbol = Symbol.for(
  'cdk-commit-ctx-history-header',
);

interface CdkCommitCtxHeaderState {
  dataHeaderName: string;
}

export interface CdkCommitCtxHeaderOptions {
  name: string;
}

export const CDK_COMMIT_CTX_HISTORY_HEADER_FACTORY: () => CdkCommitCtxHeaderOptions =
  (): CdkCommitCtxHeaderOptions => ({ name: 'GitHub Commits' });

@Component<CdkCommitCtxHeader>({
  comments: true,
  name: Symbol.keyFor(CommitCtxHistoryHeaderConstant),
  subscriptions(): Observables {
    return {};
  },

  domStreams: [],
  observableMethods: [],
})
export default class CdkCommitCtxHeader
  extends Vue
  implements CdkCommitCtxHeaderState
{
  public dataHeaderName: string =
    CdkCommitCtxHeader.cdkCommitCtxHeaderFactory.name;

  public mounted(): void {}

  public static get cdkCommitCtxHeaderFactory(): Readonly<CdkCommitCtxHeaderOptions> {
    return CDK_COMMIT_CTX_HISTORY_HEADER_FACTORY();
  }
}
