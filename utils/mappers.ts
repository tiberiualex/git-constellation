import { ApiStar, Star } from "types";

export const mapApiStar = (apiStar: ApiStar): Star => ({
  name: apiStar.name,
  fullName: apiStar.full_name,
  disabled: apiStar.disabled,
  archived: apiStar.disabled,
  topics: apiStar.topics,
  stargazersCount: apiStar.stargazers_count,
  forksCount: apiStar.forks_count,
  watchersCount: apiStar.watchers_count,
  openIssuesCount: apiStar.open_issues_count
})
