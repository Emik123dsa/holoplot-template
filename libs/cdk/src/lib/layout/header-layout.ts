import { Vue, Component } from 'vue-property-decorator';

export const HeaderLayoutConstant: symbol = Symbol.for('FooterLayout');

@Component<HeaderLayout>({
  name: Symbol.keyFor(HeaderLayoutConstant),
})
export class HeaderLayout extends Vue {}
