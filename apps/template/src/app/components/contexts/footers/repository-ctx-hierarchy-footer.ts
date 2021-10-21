import { Observable } from 'rxjs';
import { Vue, Component, Model, VModel } from 'vue-property-decorator';
import { Observables } from 'vue-rx';

export const CdkRepositoryCtxHierarchyFooterConstant: symbol = Symbol.for(
  'cdk-repository-ctx-hierarchy-footer',
);

interface CdkRepositoryCtxHierarchyState {}

export interface CdkRepositoryCtxFooterOptions {}

export const CDK_REPOSITORY_CTX_HIERARCHY_FOOTER_FACTORY: () => CdkRepositoryCtxFooterOptions =
  (): CdkRepositoryCtxFooterOptions => ({});

@Component<CdkRepositoryCtxHierarchyFooter>({
  comments: true,
  name: Symbol.keyFor(CdkRepositoryCtxHierarchyFooterConstant),
  subscriptions(): Observables {
    return {};
  },
  domStreams: [],
  observableMethods: [],
})
export default class CdkRepositoryCtxHierarchyFooter
  extends Vue
  implements CdkRepositoryCtxHierarchyState
{
  public mounted(): void {}

  public static get cdkRepositoryCtxFooterFactory(): Readonly<CdkRepositoryCtxFooterOptions> {
    return CDK_REPOSITORY_CTX_HIERARCHY_FOOTER_FACTORY();
  }
}
