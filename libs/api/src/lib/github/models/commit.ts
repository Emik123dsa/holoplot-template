/**
 * Author entity.
 *
 * @export
 * @interface Author
 * @typedef {Author}
 */
export interface Author {
  name: string;
  email: string;
  date: Date;
}

/**
 * Committer entity.
 *
 * @export
 * @interface Committer
 * @typedef {Committer}
 */
export interface Committer {
  name: string;
  email: string;
  date: Date;
}

/**
 * Tree entity.
 *
 * @export
 * @interface Tree
 * @typedef {Tree}
 */
export interface Tree {
  sha: string;
  url: string;
}

/**
 * Verification entity.
 *
 * @export
 * @interface Verification
 * @typedef {Verification}
 */
export interface Verification {
  verified: boolean;
  reason: string;
  signature?: string;
  payload?: string;
}

/**
 * Commit Child entity.
 *
 * @export
 * @interface CommitChild
 * @typedef {CommitChild}
 */
export interface CommitChild {
  author: Author;
  committer: Committer;
  message: string;
  tree: Tree;
  url: string;
  commentCount: number;
  verification: Verification;
}

/**
 * Author Child entity.
 *
 * @export
 * @interface AuthorChild
 * @typedef {AuthorChild}
 */
export interface AuthorChild {
  login: string;
  id: number;
  nodeId: string;
  avatarUrl: string;
  gravatarId: string;
  url: string;
  htmlUrl: string;
  followersUrl: string;
  followingUrl: string;
  gistsUrl: string;
  starredUrl: string;
  subscriptionsUrl: string;
  organizationsUrl: string;
  reposUrl: string;
  eventsUrl: string;
  receivedEventsUrl: string;
  type: string;
  siteAdmin: boolean;
}

/**
 * Committer child entity.
 *
 * @export
 * @interface CommitterChild
 * @typedef {CommitterChild}
 */
export interface CommitterChild {
  login: string;
  id: number;
  nodeId: string;
  avatarUrl: string;
  gravatarId: string;
  url: string;
  htmlUrl: string;
  followersUrl: string;
  followingUrl: string;
  gistsUrl: string;
  starredUrl: string;
  subscriptionsUrl: string;
  organizationsUrl: string;
  reposUrl: string;
  eventsUrl: string;
  receivedEventsUrl: string;
  type: string;
  siteAdmin: boolean;
}

/**
 * Parent children entities.
 *
 * @export
 * @interface ParentChildren
 * @typedef {ParentChildren}
 */
export interface ParentChildren {
  sha: string;
  url: string;
  htmlUrl: string;
}

/**
 * Commit entity.
 *
 * @export
 * @interface Commit
 * @typedef {Commit}
 */
export interface Commit {
  sha: string;
  nodeId: string;
  commit: CommitChild;
  url: string;
  htmlUrl: string;
  commentsUrl: string;
  author: AuthorChild;
  committer: CommitterChild;
  parents: ParentChildren[];
}
