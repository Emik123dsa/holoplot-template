import { Vue, Component } from 'vue-property-decorator';

export const FooterLayoutConstant: symbol = Symbol.for('cdk-footer-layout');

@Component<FooterLayout>({
  name: Symbol.keyFor(FooterLayoutConstant),
})
export default class FooterLayout extends Vue {}
