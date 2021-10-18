import { Vue, Component } from 'vue-property-decorator';

export const HeaderLayoutConstant: symbol = Symbol.for('cdk-header-layout');

@Component<HeaderLayout>({
  name: Symbol.keyFor(HeaderLayoutConstant),
})
export default class HeaderLayout extends Vue {}
