import { ApiStar, GenericQueryParameters, Star } from "types";

export const mapApiStar = (apiStar: ApiStar): Star => ({
  name: apiStar.name,
  fullName: apiStar.full_name,
  disabled: apiStar.disabled,
  archived: apiStar.disabled,
  topics: apiStar.topics,
  stargazersCount: apiStar.stargazers_count,
  forksCount: apiStar.forks_count,
  watchersCount: apiStar.watchers_count,
  openIssuesCount: apiStar.open_issues_count,
});

export const createQueryString = (
  queryObject: GenericQueryParameters | null
): string => {
  if (!queryObject || !Object.keys(queryObject).length) return "";

  return Object.entries(queryObject).reduce((str, [key, value]) => {
    if (str === "?") return `${str}${key}=${value}`;
    return `${str}&${key}=${value}`;
  }, "?");
};
