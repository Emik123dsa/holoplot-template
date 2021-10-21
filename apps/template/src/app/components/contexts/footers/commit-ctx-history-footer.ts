import { Observable } from 'rxjs';
import { Vue, Component, Model, VModel } from 'vue-property-decorator';
import { Observables } from 'vue-rx';

export const CdkCommitCtxHistoryFooterConstant: symbol = Symbol.for(
  'cdk-commit-ctx-history-footer',
);

interface CdkCommitCtxHistoryState {
  /** @internal */
}

export interface CdkCommitCtxFooterOptions {}

export const CDK_COMMIT_CTX_HISTORY_FOOTER_FACTORY: () => CdkCommitCtxFooterOptions =
  (): CdkCommitCtxFooterOptions => ({});

@Component<CdkCommitCtxHistoryFooter>({
  comments: true,
  name: Symbol.keyFor(CdkCommitCtxHistoryFooterConstant),
  subscriptions(): Observables {
    return {};
  },
  domStreams: [],
  observableMethods: [],
})
export default class CdkCommitCtxHistoryFooter
  extends Vue
  implements CdkCommitCtxHistoryState
{
  public mounted(): void {}

  public static get cdkCommitCtxFooterFactory(): Readonly<CdkCommitCtxFooterOptions> {
    return CDK_COMMIT_CTX_HISTORY_FOOTER_FACTORY();
  }
}
