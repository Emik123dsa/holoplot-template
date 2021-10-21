import {
  EMPTY,
  fromEvent,
  iif,
  Observable,
  of,
  pluck,
  Subscription,
  switchMap,
} from 'rxjs';
import { VNode, VNodeChildren } from 'vue';
import { Component, Ref, Mixins, Emit } from 'vue-property-decorator';
import { CreateElement } from 'vue/types/umd';
import { CdkButton, CdkButtonTag } from './button';

import './flat-button.scss';
/**
 * @param  {} 'cdk-flat-button'
 */
export const CdkFlatButtonConstant: symbol = Symbol.for('cdk-flat-button');

export type CdkFlatButtonRef =
  | HTMLButtonElement
  | HTMLAnchorElement
  | HTMLDivElement;

export const CDK_BUTTON_HOST_ATTRIBUTES: CdkButtonTag[] = [
  'a',
  'button',
  'router-link',
];

export type CdkButtonFocusEvent = MouseEvent | KeyboardEvent;

@Component<CdkFlatButton>({
  name: Symbol.keyFor(CdkFlatButtonConstant),
  comments: true,
})
export default class CdkFlatButton extends Mixins(CdkButton) {
  /**
   * @param  {} 'cdk-flat-button'
   * @param  {CdkFlatButtonRef;} private_cdkFlatButtonRef!
   * @returns CdkFlatButtonRef
   */
  @Ref('cdk-flat-button')
  private _cdkFlatButtonRef!: CdkFlatButtonRef[];

  private _focusSubscription!: Subscription;

  /** @internal */
  private _isFocusedRef: boolean = false;

  /** @internal */
  public mounted(): void {
    setTimeout(() => {
      this._focusSubscription = fromEvent<CdkButtonFocusEvent>(
        this._getHostElement(),
        'focus',
      )
        .pipe(
          pluck<CdkButtonFocusEvent>('target'),
          switchMap(
            (): Observable<boolean> =>
              iif(() => !this._isFocusedRef, of(this._isFocusedRef), EMPTY),
          ),
        )
        .subscribe(this.focus);
    }, 0);
  }

  /**
   * @param  {boolean} _target
   * @returns void
   */
  private focus(_target: boolean): void {
    if (_target) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      void this._getHostElement()!.focus();
    }

    this._handleFocusEvents(this._getHostElement());
  }

  /**
   * @param  {CdkFlatButtonRef} _targetRef
   * @returns CdkFlatButtonRef
   */
  @Emit('handle-focus')
  private _handleFocusEvents(_targetRef: CdkFlatButtonRef): CdkFlatButtonRef {
    return _targetRef;
  }

  /**
   * @internal
   * @returns void
   */
  public beforeDestroy(): void {
    if (this._focusSubscription && !this._focusSubscription.closed) {
      this._focusSubscription.unsubscribe();
    }
  }

  private _getHostElement(): Readonly<CdkFlatButtonRef> {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this._cdkFlatButtonRef![0] as CdkFlatButtonRef;
  }

  @Emit('handle-click-event')
  public handleClickEvent(
    event: MouseEvent | PointerEvent,
  ): Readonly<MouseEvent | PointerEvent> {
    return event;
  }

  public render($createElement: CreateElement): VNode | VNodeChildren {
    if (CDK_BUTTON_HOST_ATTRIBUTES.indexOf(this.tag) === -1) return null;
    return $createElement(
      this.tag,
      {
        attrs: {
          tag: this.tag,
          name: this.name || null,
          disabled: this.disabled || null,
          autocomplete: this.autocomplete,
          autofocus: this.autofocus,
          'cdk-btn-color': this.color,
          'cdk-btn-size': this.size,
          'aria-label': this.ariaLabel,
          'aria-hidden': this.ariaHidden,
        },
        class: {
          'cdk-flat-button': true,
          'cdk-flat-button-block': true,
          'cdk-flat-button-primary': this.color === 'primary',
        },
        on: {
          '&click': (event: MouseEvent | PointerEvent) =>
            this.handleClickEvent(event),
        },
        refInFor: true,
        key: Symbol.keyFor(CdkFlatButtonConstant),
        ref: Symbol.keyFor(CdkFlatButtonConstant),
      },
      this.$slots.default,
    );
  }
}
