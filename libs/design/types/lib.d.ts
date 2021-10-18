declare module 'vue-mdijs' {
  import _Vue from 'vue';
  import _mdiSvg from '@mdi/js';
  /** @internal */
  export type MdiSvg = { [P in typeof _mdiSvg]: typeof _mdiSvg[P] };

  /**
   * @param  {MdiSvg} mdiSvg
   * @returns void
   */
  export function add(mdiSvg: MdiSvg): void;

  /**
   * @param  {typeof_Vue} Vue
   * @returns void
   */
  export function install(Vue: typeof _Vue): void;
}
