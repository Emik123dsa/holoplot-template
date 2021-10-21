import { Prop, Vue, Component } from 'vue-property-decorator';
/**
 * @param  {} 'cdk-layout-container'
 */
export const CdlFlatButtonConstant: symbol = Symbol.for('cdk-flat-button');

export type CdkButtonType = 'submit' | 'reset' | 'button';

export type CdkButtonTag = 'a' | 'button' | 'router-link';

export type CdkButtonColor = 'primary' | 'secondary' | 'negative' | 'positive';

export type CdkButtonSize = 'small' | 'normal' | 'large';

/**
 * @param  {Symbol.keyFor(CdlFlatButtonConstant} {name
 * @returns CdkButtonType
 */
@Component<CdkButton>({
  name: Symbol.keyFor(CdlFlatButtonConstant),
  comments: true,
})
export class CdkButton extends Vue {
  /**
   * @param  {false} {default
   * @param  {[Boolean]} type
   * @param  {false} required
   * @param  {} }
   * @param  {boolean;} protected ariaLabel!
   * @returns boolean
   */
  @Prop({
    default: false,
    type: [String],
    required: false,
  })
  protected ariaLabel!: boolean;

  /**
   * @param  {false} {default
   * @param  {[Boolean]} type
   * @param  {false} required
   * @param  {} }
   * @param  {boolean;} protected ariaHidden!
   * @returns boolean
   */
  @Prop({
    default: false,
    type: [Boolean, String],
    required: false,
  })
  protected ariaHidden!: boolean;

  /**
   * @param  {false} {default
   * @param  {[Boolean]} type
   * @param  {false} required
   * @param  {} }
   * @param  {boolean;} protected disabled!
   * @returns boolean
   */
  @Prop({
    default: false,
    type: [Boolean, String],
    required: false,
  })
  protected disabled!: boolean;

  /**
   * @param  {false} {default
   * @param  {[Boolean]} type
   * @param  {false} required
   * @param  {} }
   * @param  {boolean;} protected name;
   * @returns boolean
   */
  @Prop({
    default: false,
    type: [Boolean],
    required: false,
  })
  protected name!: boolean;

  /**
   * @param  {false} {default
   * @param  {[Boolean]} type
   * @param  {false} required
   * @param  {} }
   * @param  {boolean;} protected name;
   * @returns boolean
   */
  @Prop({
    default: 'button',
    type: [String],
    required: false,
  })
  protected type!: CdkButtonType;

  /**
   * @param  {false} {default
   * @param  {[Boolean]} type
   * @param  {false} required
   * @param  {} }
   * @param  {boolean;} protected name;
   * @returns boolean
   */
  @Prop({
    default: false,
    type: [Boolean, String],
    required: false,
  })
  protected autocomplete!: boolean;

  /**
   * @param  {false} {default
   * @param  {[Boolean]} type
   * @param  {false} required
   * @param  {} }
   * @param  {boolean;} protected name;
   * @returns boolean
   */
  @Prop({
    default: false,
    type: [Boolean, String],
    required: false,
  })
  protected autofocus!: boolean;

  /**
   * @param  {false} {default
   * @param  {[Boolean]} type
   * @param  {false} required
   * @param  {} }
   * @param  {boolean;} protected name;
   * @returns boolean
   */
  @Prop({
    default: 'button',
    type: [String],
    required: true,
  })
  protected tag!: CdkButtonTag;

  /**
   * @param  {false} {default
   * @param  {[Boolean]} type
   * @param  {false} required
   * @param  {} }
   * @param  {boolean;} protected color;
   * @returns boolean
   */
  @Prop({
    default: 'primary',
    type: [String],
    required: true,
  })
  protected color!: CdkButtonColor;

  /**
   * @param  {false} {default
   * @param  {[Boolean]} type
   * @param  {false} required
   * @param  {} }
   * @param  {boolean;} protected color;
   * @returns boolean
   */
  @Prop({
    default: 'normal',
    type: [String],
    required: true,
  })
  protected size!: CdkButtonSize;
}
