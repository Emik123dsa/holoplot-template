import { Vue, Component } from 'vue-property-decorator';

export const FooterLayoutConstant: symbol = Symbol.for('FooterLayout');

@Component<FooterLayout>({
  name: Symbol.keyFor(FooterLayoutConstant),
})
export class FooterLayout extends Vue {}
