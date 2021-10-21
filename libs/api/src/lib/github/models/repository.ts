import { OwnerRepository } from './owner-repository';

/**
 * Full Repository entity.
 *
 * @export
 * @interface Repository
 * @typedef {Repository}
 */
export interface Repository {
  allowForking: boolean;
  archiveUrl: string;
  archived: false;
  assigneesUrl: string;
  blobsUrl: string;
  branchesUrl: string;
  cloneUrl: string;
  collaboratorsUrl: string;
  commentsUrl: string;
  commitsUrl: string;
  compareUrl: string;
  contentsUrl: string;
  contributorsUrl: string;
  createdAt: Date;
  defaultBranch: string;
  deploymentsUrl: string;
  description: string;
  disabled: false;
  downloadsUrl: string;
  eventsUrl: string;
  fork: boolean;
  forks: number;
  forksCount: number;
  forksUrl: string[] | string;
  fullName: string;
  gitRefsUrl: string;
  gitTagsUrl: string;
  gitUrl: string;
  hasDownloads: boolean;
  hasIssues: false;
  hasPages: false;
  hasProjects: true;
  hasWiki: true;
  homepage: string;
  hooksUrl: string;
  htmlUrl: string;
  id: number;
  isTemplate: boolean;
  issueCommentUrl: string;
  issueEventsUrl: string;
  issuesUrl: string;
  keysUrl: string;
  labelsUrl: string;
  language: string;
  languagesUrl: string;
  license: Record<string, string>;
  mergesUrl: string;
  milestonesUrl: string;
  mirrorUrl: URL | null;
  name: string;
  nodeId: string;
  notificationsUrl: string;
  openIssues: number;
  openIssuesCount: number;
  owner: OwnerRepository;
  private: boolean;
  pullsUrl: string;
  pushedAt: Date;
  releasesUrl: string;
  size: number;
  sshUrl: string;
  stargazersCount: number;
  stargazersUrl: string;
  statusesUrl: string;
  subscribersUrl: string;
  subscriptionUrl: string;
  svnUrl: string;
  tagsUrl: string;
  teamsUrl: string;
  topics: (string | number | symbol)[];
  treesUrl: string;
  updatedAt: Date;
  url: string;
  visibility: string;
  watchers: number;
  watchersCount: number;
}
