import { RouteConfig } from 'vue-router';

export const routesProvider: RouteConfig[] = [
  {
    path: '/',
    name: 'RepositoriesHierarchy',
    component: () => import('@views/repository-hierarchy.vue'),
  },
  {
    path: '/:repositoryId',
    name: 'CommitHistory',
    meta: {
      requiredRepositoryHash: true,
    },
    component: () => import('@views/commit-history.vue'),
  },
  {
    path: '*',
    redirect: '/',
  },
];
