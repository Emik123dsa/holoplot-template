import { Observable } from 'rxjs';
import { Vue, Component } from 'vue-property-decorator';
import { Observables } from 'vue-rx';

const CommitHistoryConstant: symbol = Symbol.for('CommitHistory');

@Component<CommitHistory>({
  name: Symbol.keyFor(CommitHistoryConstant),
  subscriptions(): Observables {
    return {};
  },
  domStreams: [],
  observableMethods: [],
})
export default class CommitHistory extends Vue {
  public mounted(): void {}
}
