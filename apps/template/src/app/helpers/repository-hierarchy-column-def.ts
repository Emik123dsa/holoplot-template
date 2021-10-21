import { Observable } from 'rxjs';
// TODO: resolve imports errors
import type { Repository } from '@holoplot/api/github/models';
import { Vue, Component, Model, VModel, Prop } from 'vue-property-decorator';
import { Observables } from 'vue-rx';

export const CdkRepositoryHierarchyColumnDefConstant: symbol = Symbol.for(
  'cdk-repository-hierarchy-column-def',
);

export interface CdkRepositoryHierarchyColumnDefOptions {
  name: string | null;
}

export const CDK_REPOSITORY_HIERARCHY_COLUMN_DEF_FACTORY: () => CdkRepositoryHierarchyColumnDefOptions =
  (): CdkRepositoryHierarchyColumnDefOptions => ({
    name: null,
  });

@Component<CdkRepositoryHierarchyColumnDef>({
  name: Symbol.keyFor(CdkRepositoryHierarchyColumnDefConstant),
  subscriptions(): Observables {
    return {};
  },
  comments: true,
  components: {
    CdkRepositoryHierarchyBranchCellDef: () =>
      import('@helpers/tables/repository-hierarchy-branch-cell-def.vue'),

    CdkRepositoryHierarchyNameCellDef: () =>
      import('@helpers/tables/repository-hierarchy-name-cell-def.vue'),

    CdkRepositoryHierarchyDateCellDef: () =>
      import('@helpers/tables/repository-hierarchy-date-cell-def.vue'),

    CdkRepositoryHierarchyLanguageCellDef: () =>
      import('@helpers/tables/repository-hierarchy-language-cell-def.vue'),

    CdkRepositoryHierarchyLicenseCellDef: () =>
      import('@helpers/tables/repository-hierarchy-license-cell-def.vue'),
  },
  domStreams: [],
  observableMethods: {},
})
export default class CdkRepositoryHierarchyColumnDef extends Vue {
  public columnDef: string | null =
    CdkRepositoryHierarchyColumnDef.cdkRepositoryHierarchyColumnDefFactory.name;

  @Prop({
    default: {},
    type: [Object, Boolean],
    required: true,
  })
  public cdkColumnDef!: Repository;

  @Prop({
    default: 0,
    type: [Number],
    required: true,
  })
  public index!: number;

  public static get cdkRepositoryHierarchyColumnDefFactory(): Readonly<CdkRepositoryHierarchyColumnDefOptions> {
    return CDK_REPOSITORY_HIERARCHY_COLUMN_DEF_FACTORY();
  }
}
