import { RouteConfig } from 'vue-router';

export const routesProvider: RouteConfig[] = [
  {
    path: '/',
    name: 'RepositoriesHierarchy',
    component: () =>
      import(
        /* webpackChunkName: "repositoriesHierarchy" */ '@views/repository-hierarchy.vue'
      ),
  },
  {
    path: '/:repositoryId',
    name: 'CommitHistory',
    meta: {
      requiredBranchId: true,
    },
    component: () =>
      import(
        /* webpackChunkName: "commitHistory" */ '@views/commit-history.vue'
      ),
  },
  {
    path: '*',
    redirect: {
      name: 'RepositoriesHierarchy',
    },
  },
];
