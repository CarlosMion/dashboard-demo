export type ServerError = {
  error: string;
  statusCode?: number;
};

export const isServerErrorWithStatusCode = (
  result: object
): result is ServerError => {
  return "error" in result && "statusCode" in result;
};

export const isServerError = (result: unknown): result is ServerError => {
  return typeof result === "object" && result !== null && "error" in result;
};

type ErrorWithMessage = {
  message: string;
};

export const isErrorWithMessage = (
  error: unknown
): error is ErrorWithMessage => {
  return (
    typeof error === "object" &&
    error !== null &&
    "message" in error &&
    typeof (error as Record<string, unknown>).message === "string"
  );
};

export const toErrorWithMessage = (maybeError: unknown): ErrorWithMessage => {
  if (isErrorWithMessage(maybeError)) return maybeError;

  try {
    return new Error(JSON.stringify(maybeError));
  } catch {
    // fallback in case there's an error stringifying the maybeError
    // like with circular references for example.
    return new Error(String(maybeError));
  }
};

export const getErrorMessage = (error: unknown): string => {
  return toErrorWithMessage(error).message;
};

export class ApiError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.name = "ApiError";
    this.statusCode = statusCode || 500;
  }
}
