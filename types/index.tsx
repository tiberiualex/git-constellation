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
  status: {
    message: string;
    status_code: ErrorCodes;
  };
};
