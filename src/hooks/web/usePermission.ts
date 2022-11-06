import type { RouteRecordRaw } from 'vue-router';
import { usePermissionStore } from '/@/store/modules/permission';
// import { useUserStore } from '/@/store/modules/user';

import { useTabs } from './useTabs';

import { router, resetRouter } from '/@/router';
// import { RootRoute } from '/@/router/routes';
import { useMultipleTabStore } from '/@/store/modules/multipleTab';

// User permissions related operations
export function usePermission() {
  // const userStore = useUserStore();
  const permissionStore = usePermissionStore();
  const { closeAll } = useTabs(router);

  /**
   * 重置和重新获得权限资源信息
   */
  async function resume() {
    const tabStore = useMultipleTabStore();
    tabStore.clearCacheTabs();
    resetRouter();
    const routes = await permissionStore.buildRoutesAction();
    routes.forEach((route) => {
      router.addRoute(route as unknown as RouteRecordRaw);
    });
    permissionStore.setLastBuildMenuTime();
    closeAll();
  }

  /**
   * refresh menu data
   */
  async function refreshMenu() {
    resume();
  }

  return { refreshMenu };
}
