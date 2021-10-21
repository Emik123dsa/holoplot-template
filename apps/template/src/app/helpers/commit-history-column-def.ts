import { Observable } from 'rxjs';
// TODO: resolve imports errors
import type { Commit } from '@holoplot/api/github/models';
import { Vue, Component, Model, VModel, Prop } from 'vue-property-decorator';
import { Observables } from 'vue-rx';

export const CdkCommitHistoryColumnDefConstant: symbol = Symbol.for(
  'cdk-commit-hierarchy-column-def',
);

export interface CdkCommitHistoryColumnDefOptions {
  name: string | null;
}

export const CDK_COMMIT_HISTORY_COLUMN_DEF_FACTORY: () => CdkCommitHistoryColumnDefOptions =
  (): CdkCommitHistoryColumnDefOptions => ({
    name: null,
  });

@Component<CdkCommitHistoryColumnDef>({
  name: Symbol.keyFor(CdkCommitHistoryColumnDefConstant),
  subscriptions(): Observables {
    return {};
  },
  comments: true,
  domStreams: [],
  observableMethods: {},
})
export default class CdkCommitHistoryColumnDef extends Vue {
  public columnDef: string | null =
    CdkCommitHistoryColumnDef.cdkCommitHistoryColumnDefFactory.name;

  @Prop({
    default: {},
    type: [Object, Boolean],
    required: true,
  })
  public cdkColumnDef!: Commit;

  @Prop({
    default: 0,
    type: [Number],
    required: true,
  })
  public index!: number;

  public static get cdkCommitHistoryColumnDefFactory(): Readonly<CdkCommitHistoryColumnDefOptions> {
    return CDK_COMMIT_HISTORY_COLUMN_DEF_FACTORY();
  }
}
