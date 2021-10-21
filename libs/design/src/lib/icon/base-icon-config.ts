import {
  mdiCog,
  mdiPlus,
  mdiFilter,
  mdiMagnify,
  mdiCogOutline,
  mdiPlusOutline,
  mdiFilterOutline,
  mdiTrayArrowDown,
  mdiSourceBranch,
} from '@mdi/js';
import { MdiSvg } from 'vue-mdijs';

/**
 * Register all of the required icon static providers.
 *
 * @returns {@link MdiSvg}
 */
export const CDK_BASE_ICON_STATIC_PROVIDERS_FACTORY: () => MdiSvg =
  (): MdiSvg => ({
    mdiCog,
    mdiPlus,
    mdiFilter,
    mdiMagnify,
    mdiCogOutline,
    mdiPlusOutline,
    mdiFilterOutline,
    mdiTrayArrowDown,
    mdiSourceBranch,
  });
