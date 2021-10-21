import type { LicenseRepository } from '@holoplot/api/github/models';
import { Observable } from 'rxjs';

import { Vue, Component, Model, VModel, Prop } from 'vue-property-decorator';
import { Observables } from 'vue-rx';

export const CdkRepositoryHierarchyLicenseCellDefConstant: symbol = Symbol.for(
  'cdk-repository-hierarchy-license-cell-def',
);

export interface CdkRepositoryHierarchyLicenseCellDefOptions {
  name: string | null;
}

export const CDK_REPOSITORY_HIERARCHY_LICENSE_CELL_DEF_FACTORY: () => CdkRepositoryHierarchyLicenseCellDefOptions =
  (): CdkRepositoryHierarchyLicenseCellDefOptions => ({
    name: null,
  });

@Component<CdkRepositoryHierarchyLicenseCellDef>({
  name: Symbol.keyFor(CdkRepositoryHierarchyLicenseCellDefConstant),
  subscriptions(): Observables {
    return {};
  },
  comments: true,
  domStreams: [],
  observableMethods: {},
})
export default class CdkRepositoryHierarchyLicenseCellDef extends Vue {
  public columnDef: string | null =
    CdkRepositoryHierarchyLicenseCellDef
      .CdkRepositoryHierarchyLicenseCellDefFactory.name;

  @Prop({
    default: () => false,
    type: [Boolean, Object],
    required: true,
  })
  public cdkRowDef!: LicenseRepository;

  @Prop({
    default: 0,
    type: [Number],
    required: true,
  })
  public index!: number;

  public static get CdkRepositoryHierarchyLicenseCellDefFactory(): Readonly<CdkRepositoryHierarchyLicenseCellDefOptions> {
    return CDK_REPOSITORY_HIERARCHY_LICENSE_CELL_DEF_FACTORY();
  }
}
