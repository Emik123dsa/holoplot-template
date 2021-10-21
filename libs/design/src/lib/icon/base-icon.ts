import { VNode, VNodeChildren } from 'vue';
import { Component, Prop, Vue } from 'vue-property-decorator';
import { CreateElement } from 'vue/types/umd';

/* @internal */
export const CdkBaseIconConstants: symbol = Symbol.for('cdk-base-icon');

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CdkBaseIconOptions {
  fill: string | null;
  title: string | null;
}

export const CDK_BASE_ICON_FACTORY: () => CdkBaseIconOptions =
  (): CdkBaseIconOptions => ({
    fill: 'currentColor',
    title: null,
  });

/**
 * @param  {Symbol.keyFor(CdkBaseIconConstants} {name
 */
@Component<CdkBaseIcon>({
  name: Symbol.keyFor(CdkBaseIconConstants),
  comments: true,
})
export default class CdkBaseIcon extends Vue implements CdkBaseIconOptions {
  /**
   * @param  {null} {default
   * @param  {[String]} type
   * @param  {false} required
   * @param  {} }
   * @param  {string;} public_title!
   * @returns string
   */
  @Prop({
    default: 24,
    type: [String, Number],
    required: false,
  })
  public size!: string;

  /**
   * @param  {null} {default
   * @param  {[String]} type
   * @param  {false} required
   * @param  {} }
   * @param  {string;} public_title!
   * @returns string
   */
  @Prop({
    default: null,
    type: [String],
    required: false,
  })
  public _title!: string;

  public set title(title: string) {
    this._title = title;
  }

  public get title(): Readonly<string> {
    return this._title;
  }
  /**
   * @param  {null} {default
   * @param  {[String]} type
   * @param  {false} required
   * @param  {} }
   * @param  {string;} public_fill!
   * @returns string
   */
  @Prop({
    default: { factory: CDK_BASE_ICON_FACTORY() }.factory.fill,
    type: [String],
    required: false,
  })
  public _fill!: string;
  /**
   * @param  {string} fill
   */
  public set fill(fill: string) {
    this._fill = fill;
  }
  /**
   * @returns Readonly
   */
  public get fill(): Readonly<string> {
    return this._fill;
  }

  /**
   * @param  {CreateElement} $createElement
   * @returns VNode
   */
  public render($createElement: CreateElement): VNode | VNodeChildren {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const defaultName: string = this.$slots.default![0].text as string;
    if (!defaultName) return null;
    return $createElement(
      'v-mdi',
      {
        attrs: {
          role: 'img',
          name: defaultName,
          fill: this._fill || null,
        },
        props: {
          name: defaultName,
          fill: this._fill || null,
          size: this.size,
        },
      },
      this.$slots.default,
    );
  }

  /**
   * @returns Readonly
   */
  public get cdkBaseIconFactory(): Readonly<CdkBaseIconOptions> {
    return CDK_BASE_ICON_FACTORY();
  }
}
