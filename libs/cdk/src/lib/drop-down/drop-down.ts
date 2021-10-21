import { Vue, Component, Prop } from 'vue-property-decorator';

/**
 * @param {} 'cdk-drop-down'
 */
export const CdkDropDownConstant: symbol = Symbol.for('cdk-drop-down');

/**
 * @param  {Symbol.keyFor(CdkLayoutContainerConstant} name
 * @internal
 */
@Component<CdkDropDown>({
  name: Symbol.keyFor(CdkDropDownConstant),
  comments: true,
})
export default class CdkDropDown extends Vue {
  @Prop({
    default: () => [],
    required: true,
    type: [String, Object, Array],
  })
  public value!: unknown[];
}
