import axios, { AxiosResponse, AxiosError } from "axios";
import React, { useEffect } from "react";
import { ApiError } from "types";
import { Summoner, League } from "../types/index";

const client = axios.create({
  headers: {
    "Accept-Language": "en-US,en;q=0.9",
  },
});

const handleError = (error: Error) => {
  const axiosError = error as AxiosError<ApiError>;
  const apiError = axiosError.response?.data;

  if (apiError) {
    throw new Error(apiError.status.message);
  }

  throw new Error("API call has failed");
};
