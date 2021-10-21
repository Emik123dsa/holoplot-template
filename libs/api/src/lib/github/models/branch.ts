export interface Branch {
  name: string;
  commit: CommitBranch;
  protected: boolean;
}

export interface CommitBranch {
  sha: string;
  url: string;
}
