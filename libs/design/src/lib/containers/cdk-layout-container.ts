import { VNode } from 'vue';
import { Vue, Component } from 'vue-property-decorator';

@Component<CdkLayoutContainer>({
  name: CdkLayoutContainer.name,
})
export default class CdkLayoutContainer extends Vue {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public mounted(): void {}

  public render(
    createElement: typeof Vue.prototype.$createElement,
  ): VNode | Array<VNode> {
    return createElement(
      'div',
      {
        attrs: {
          container: true,
          block: true,
          position: true,
        },
        class: {
          'cdk-layout-container': true,
          'cdk-layout-block': true,
          'cdk-layout-position': true,
        },
      },
      this.$slots.default,
    );
  }
}
