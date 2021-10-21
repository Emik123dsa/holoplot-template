import { Observable } from 'rxjs';
import type { Repository } from '@holoplot/api/github/models';
import { Vue, Component, Model, VModel, Prop } from 'vue-property-decorator';
import { Observables } from 'vue-rx';

export const CdkRepositoryHierarchyDateCellDefConstant: symbol = Symbol.for(
  'cdk-repository-hierarchy-date-cell-def',
);

export interface CdkRepositoryHierarchyDateCellDefOptions {
  name: string | null;
}

export const CDK_REPOSITORY_HIERARCHY_Date_CELL_DEF_FACTORY: () => CdkRepositoryHierarchyDateCellDefOptions =
  (): CdkRepositoryHierarchyDateCellDefOptions => ({
    name: null,
  });

@Component<CdkRepositoryHierarchyDateCellDef>({
  name: Symbol.keyFor(CdkRepositoryHierarchyDateCellDefConstant),
  subscriptions(): Observables {
    return {};
  },
  comments: true,
  domStreams: [],
  observableMethods: {},
})
export default class CdkRepositoryHierarchyDateCellDef extends Vue {
  public columnDef: string | null =
    CdkRepositoryHierarchyDateCellDef.CdkRepositoryHierarchyDateCellDefFactory
      .name;

  @Prop({
    default: new Date(),
    type: [String, Boolean],
    required: true,
  })
  public cdkRowDef!: string;

  @Prop({
    default: 0,
    type: [Number],
    required: true,
  })
  public index!: number;

  public static get CdkRepositoryHierarchyDateCellDefFactory(): Readonly<CdkRepositoryHierarchyDateCellDefOptions> {
    return CDK_REPOSITORY_HIERARCHY_Date_CELL_DEF_FACTORY();
  }
}
