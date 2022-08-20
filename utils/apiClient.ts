import axios, { AxiosResponse, AxiosError } from "axios";
import { ApiError } from "types";

const client = axios.create({
  headers: {
    "Accept": "application/vnd.github+json"
  },
});

const getUrl = (username: string): string => `https://api.github.com/users/${username}`

const handleError = (error: Error) => {
  const axiosError = error as AxiosError<ApiError>;
  const apiError = axiosError.response?.data;

  if (apiError) {
    throw new Error(apiError.message);
  }

  throw new Error("API call has failed");
};
