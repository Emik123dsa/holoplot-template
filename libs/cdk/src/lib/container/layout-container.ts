import { VNode } from 'vue';
import { Vue, Component, Prop } from 'vue-property-decorator';
import { CreateElement } from 'vue/types/umd';

/**
 * @param  {} 'cdk-layout-container'
 */
export const CdkLayoutContainerConstant: symbol = Symbol.for(
  'cdk-layout-container',
);

/** @internal */
export interface CdkLayoutContainerBorderOptions {
  left: boolean;
  right: boolean;
  top: boolean;
  bottom: boolean;
}

/**
 * @param  {Symbol.keyFor(CdkLayoutContainerConstant} name
 * @internal
 */
@Component<CdkLayoutContainer>({
  name: Symbol.keyFor(CdkLayoutContainerConstant),
  comments: true,
})
export default class CdkLayoutContainer extends Vue {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public mounted(): void {}

  /**
   * @param  {false} default
   * @param  {[Boolean]} type
   * @param  {false} required
   * @param  {} }
   * @param  {boolean;} private_isCentered!
   * @returns boolean
   */
  @Prop({
    default: false,
    type: [Boolean],
    required: false,
  })
  private _isCentered!: boolean;
  public set isCentered(_isCentered: boolean) {
    this._isCentered = _isCentered;
  }
  public get isCentered(): Readonly<boolean> {
    return this._isCentered;
  }

  /**
   * @param  {false} default
   * @param  {[Object,Boolean]} type
   * @param  {false} required
   * @param  {Partial<CdkLayoutContainerBorderOptions>|boolean;} private _isBordered!
   * @returns Partial
   */

  @Prop({
    default: false,
    type: [Object, Boolean],
    required: false,
  })
  private _isBordered!: Partial<CdkLayoutContainerBorderOptions> | boolean;

  public set isBordered(
    isBordered: Partial<CdkLayoutContainerBorderOptions> | boolean,
  ) {
    this._isBordered = isBordered;
  }
  public get isBordered(): Readonly<
    Partial<CdkLayoutContainerBorderOptions> | boolean
  > {
    return this._isBordered;
  }

  @Prop({
    default: false,
    type: [Boolean],
    required: false,
  })
  private _isRelative!: boolean;
  public set isRelative(_isRelative: boolean) {
    this._isRelative = _isRelative;
  }
  public get isRelative(): Readonly<boolean> {
    return this._isRelative;
  }

  /**
   * @param  {typeofVue.prototype.$createElement} createElement
   * @returns VNode
   */
  public render(createElement: CreateElement): VNode | Array<VNode> {
    return createElement(
      'div',
      {
        attrs: {
          'cdk-container': true,
          'cdk-block': true,
          'cdk-position': this._isRelative,
          'cdk-centered': this._isCentered,
          'cdk-left-border':
            (this._isBordered as CdkLayoutContainerBorderOptions).left === true,
        },

        class: {
          'cdk-layout-container': true,
          'cdk-layout-block': true,
          'cdk-layout-position': this._isRelative,
          'cdk-layout-centered': this._isCentered,
          'cdk-layout-borders-left':
            (this._isBordered as CdkLayoutContainerBorderOptions).left === true,
        },
      },
      this.$slots.default,
    );
  }
}
