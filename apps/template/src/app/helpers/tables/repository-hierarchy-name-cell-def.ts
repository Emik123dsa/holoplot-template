import type { Repository } from '@holoplot/api/github/models';
import { Observable } from 'rxjs';

import { Vue, Component, Model, VModel, Prop } from 'vue-property-decorator';
import { Observables } from 'vue-rx';

export const CdkRepositoryHierarchyNameCellDefConstant: symbol = Symbol.for(
  'cdk-repository-hierarchy-name-cell-def',
);

export interface CdkRepositoryHierarchyNameCellDefOptions {
  name: string | null;
}

export const CDK_REPOSITORY_HIERARCHY_NAME_CELL_DEF_FACTORY: () => CdkRepositoryHierarchyNameCellDefOptions =
  (): CdkRepositoryHierarchyNameCellDefOptions => ({
    name: null,
  });

@Component<CdkRepositoryHierarchyNameCellDef>({
  name: Symbol.keyFor(CdkRepositoryHierarchyNameCellDefConstant),
  subscriptions(): Observables {
    return {};
  },
  comments: true,
  domStreams: [],
  observableMethods: {},
})
export default class CdkRepositoryHierarchyNameCellDef extends Vue {
  public columnDef: string | null =
    CdkRepositoryHierarchyNameCellDef.CdkRepositoryHierarchyNameCellDefFactory
      .name;

  @Prop({
    default: () => {},
    type: [Object, Boolean],
    required: true,
  })
  public cdkRowDef!: Repository;

  @Prop({
    default: 0,
    type: [Number],
    required: true,
  })
  public index!: number;

  public static get CdkRepositoryHierarchyNameCellDefFactory(): Readonly<CdkRepositoryHierarchyNameCellDefOptions> {
    return CDK_REPOSITORY_HIERARCHY_NAME_CELL_DEF_FACTORY();
  }
}
