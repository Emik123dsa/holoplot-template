import { MdiSvg } from 'vue-mdijs';
import { mdiMagnify } from '@mdi/js';

/**
 * Register all of the required icon static providers.
 *
 * @returns {@link MdiSvg}
 */
export const CDK_BASE_ICON_STATIC_PROVIDERS_FACTORY: () => MdiSvg =
  (): MdiSvg => ({
    mdiMagnify,
  });
