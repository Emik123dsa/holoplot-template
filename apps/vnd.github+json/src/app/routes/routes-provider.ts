import { RouteConfig } from 'vue-router';

export const routesProvider: RouteConfig[] = [
  {
    path: '/',
    name: 'RepositoriesHierarchy',
    component: () => import('@views/repository-hierarchy-view.vue'),
  },
  {
    path: '/:repositoryId',
    name: 'CommitHistory',
    meta: {
      requiredRepositoryHash: true,
    },
    component: () => import('@views/commit-history-view.vue'),
  },
  {
    path: '*',
    redirect: '/',
  },
];
