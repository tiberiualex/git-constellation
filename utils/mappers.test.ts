import { ApiStar, Star } from "types";
import { mapApiStar, createQueryString } from "./mappers";

describe("utils", () => {
  describe("createQueryString", () => {
    it("should return empty string for null object", () => {
      expect(createQueryString(null)).toEqual("");
    });

    it("should return empty string for empty object", () => {
      expect(createQueryString({})).toEqual("");
    });

    it("should create query string", () => {
      const queryObject = {
        page: 1,
        per_page: 20,
      };

      const expectedQueryString = "?page=1&per_page=20";

      expect(createQueryString(queryObject)).toEqual(expectedQueryString);
    });
  });

  describe("mapApiStar", () => {
    it("should map API response object correctly", () => {
      const apiObject: ApiStar = {
        name: "Name",
        full_name: "Full Name",
        disabled: false,
        archived: false,
        topics: ["topic 1", "topic 2"],
        stargazers_count: 55,
        watchers_count: 56,
        forks_count: 3,
        open_issues_count: 7,
      };

      const expectedObject: Star = {
        name: "Name",
        fullName: "Full Name",
        disabled: false,
        archived: false,
        topics: ["topic 1", "topic 2"],
        stargazersCount: 55,
        watchersCount: 56,
        forksCount: 3,
        openIssuesCount: 7,
      };

      expect(mapApiStar(apiObject)).toEqual(expectedObject);
    });
  });
});
