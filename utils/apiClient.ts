import axios, { AxiosResponse, AxiosError } from "axios";
import { ApiError, QueryParameters } from "types";
import { ApiStar } from "types";
import { createQueryString } from "./mappers";

const client = axios.create({
  headers: {
    Accept: "application/vnd.github+json",
  },
});

const getUrl = (username: string, query: QueryParameters | null): string =>
  `https://api.github.com/users/${username}/starred${createQueryString(query)}`;

const handleError = (error: Error) => {
  const axiosError = error as AxiosError<ApiError>;
  const apiError = axiosError.response?.data;

  if (apiError) {
    throw new Error(apiError.message);
  }

  throw new Error("API call has failed");
};

export const getStarsForUser = async (
  username: string,
  query: QueryParameters | null = null
): Promise<ApiStar[]> => {
  try {
    const { data } = await client.get(getUrl(username, query));

    return data;
  } catch (error) {
    return handleError(error as Error);
  }
};
