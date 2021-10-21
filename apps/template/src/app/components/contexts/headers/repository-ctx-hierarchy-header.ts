import { Observable } from 'rxjs';
import { Vue, Component, Model, VModel } from 'vue-property-decorator';
import { Observables } from 'vue-rx';

export const RepositoryCtxHierarchyHeaderConstant: symbol = Symbol.for(
  'cdk-repository-ctx-hierarchy-header',
);

interface CdkRepositoryCtxHeaderState {
  ctxHeaderName: string;
}

export interface CdkRepositoryCtxHeaderOptions {
  name: string;
}

export const CDK_REPOSITORY_CTX_HIERARCHY_HEADER_FACTORY: () => CdkRepositoryCtxHeaderOptions =
  (): CdkRepositoryCtxHeaderOptions => ({ name: 'GitHub Repositories' });

@Component<CdkRepositoryCtxHeader>({
  comments: true,
  name: Symbol.keyFor(RepositoryCtxHierarchyHeaderConstant),
  subscriptions(): Observables {
    return {};
  },

  domStreams: [],
  observableMethods: [],
})
export default class CdkRepositoryCtxHeader
  extends Vue
  implements CdkRepositoryCtxHeaderState
{
  public ctxHeaderName: string =
    CdkRepositoryCtxHeader.cdkRepositoryCtxHeaderFactory.name;

  public mounted(): void {}

  public static get cdkRepositoryCtxHeaderFactory(): Readonly<CdkRepositoryCtxHeaderOptions> {
    return CDK_REPOSITORY_CTX_HIERARCHY_HEADER_FACTORY();
  }
}
