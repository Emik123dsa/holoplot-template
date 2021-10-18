import { Observable } from 'rxjs';
import { Vue, Component, Model, VModel, Prop } from 'vue-property-decorator';
import { Observables } from 'vue-rx';

export const RepositoryCtxHierarchyConstant: symbol = Symbol.for(
  'cdk-repository-ctx-hierarchy',
);

interface CdkRepositoryCtxState {
  cdkCtxName: string;
}

export interface CdkRepositoryCtxOptions {
  name: string;
}

export const CDK_REPOSITORY_CTX_HIERARCHY_FACTORY: () => CdkRepositoryCtxOptions =
  (): CdkRepositoryCtxOptions => ({ name: 'Your GitHub Repositories' });

@Component<CdkRepositoryCtxHierarchy>({
  comments: true,
  name: Symbol.keyFor(RepositoryCtxHierarchyConstant),
  subscriptions(): Observables {
    return {};
  },
  components: {
    CdkRepositoryHierarchyList: () =>
      import('@components/repository-hierarchy-list.vue'),
    CdkRepositoryCtxHierarchyHeader: () =>
      import('@ctx/headers/repository-ctx-hierarchy-header.vue'),
    CdkRepositoryCtxHierarchyFooter: () =>
      import('@ctx/footers/repository-ctx-hierarchy-footer.vue'),
  },
  domStreams: [],
  observableMethods: [],
})
export default class CdkRepositoryCtxHierarchy
  extends Vue
  implements CdkRepositoryCtxState
{
  public cdkCtxName: string =
    CdkRepositoryCtxHierarchy.cdkRepositoryCtxFactory.name;

  @Prop({
    default: {},
    type: [Array],
    required: true,
  })
  public ctxRepositories!: any[];

  public mounted(): void {}

  public static get cdkRepositoryCtxFactory(): Readonly<CdkRepositoryCtxOptions> {
    return CDK_REPOSITORY_CTX_HIERARCHY_FACTORY();
  }
}
