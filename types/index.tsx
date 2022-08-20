export type ErrorCodes =
  | 400
  | 401
  | 403
  | 404
  | 405
  | 415
  | 429
  | 500
  | 502
  | 503
  | 504;

export type ApiError = {
  message: string;
};

export type GenericQueryParameters = {
  [key: string]: string | number;
};

export type QueryParameters = {
  page?: number;
  per_page?: number;
  direction?: "asc" | "desc";
  sort?: "created" | "updated";
};

export type ApiStar = {
  name: string;
  full_name: string;
  disabled: boolean;
  archived: boolean;
  topics: Array<string>;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  open_issues_count: number;
};

export type Star = {
  name: string;
  fullName: string;
  disabled: boolean;
  archived: boolean;
  topics: Array<string>;
  stargazersCount: number;
  forksCount: number;
  watchersCount: number;
  openIssuesCount: number;
};
