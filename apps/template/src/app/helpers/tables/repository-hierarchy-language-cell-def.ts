import type { Repository } from '@holoplot/api/github/models';
import { Observable } from 'rxjs';

import { Vue, Component, Model, VModel, Prop } from 'vue-property-decorator';
import { Observables } from 'vue-rx';

export const CdkRepositoryHierarchyLanguageCellDefConstant: symbol = Symbol.for(
  'cdk-repository-hierarchy-language-cell-def',
);

export interface CdkRepositoryHierarchyLanguageCellDefOptions {
  name: string | null;
}

export const CDK_REPOSITORY_HIERARCHY_Language_CELL_DEF_FACTORY: () => CdkRepositoryHierarchyLanguageCellDefOptions =
  (): CdkRepositoryHierarchyLanguageCellDefOptions => ({
    name: null,
  });

@Component<CdkRepositoryHierarchyLanguageCellDef>({
  name: Symbol.keyFor(CdkRepositoryHierarchyLanguageCellDefConstant),
  subscriptions(): Observables {
    return {};
  },
  comments: true,
  domStreams: [],
  observableMethods: {},
})
export default class CdkRepositoryHierarchyLanguageCellDef extends Vue {
  public columnDef: string | null =
    CdkRepositoryHierarchyLanguageCellDef
      .CdkRepositoryHierarchyLanguageCellDefFactory.name;

  @Prop({
    default: () => false,
    type: [String, Boolean, Object],
    required: true,
  })
  public cdkRowDef!: String;

  @Prop({
    default: 0,
    type: [Number],
    required: true,
  })
  public index!: number;

  public static get CdkRepositoryHierarchyLanguageCellDefFactory(): Readonly<CdkRepositoryHierarchyLanguageCellDefOptions> {
    return CDK_REPOSITORY_HIERARCHY_Language_CELL_DEF_FACTORY();
  }
}
