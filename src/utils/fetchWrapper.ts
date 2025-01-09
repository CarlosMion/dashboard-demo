import { isServerError } from "./errorUtils";

const fetcher = async <T>(
  info: RequestInfo | URL,
  init?: RequestInit
): Promise<T> => {
  let result;
  try {
    const injectedHeaders: Record<string, string> = {};
    if (typeof window === "undefined") {
      const headers = await import("next/headers");
      (await headers.headers()).forEach((value, key) => {
        injectedHeaders[key] = value;
      });
    }

    const buildHeaders: Record<string, string> = {};
    let url = info;
    if (typeof info === "string") {
      url = `${process.env.NEXT_PUBLIC_WEBAPP_API_URL}/${info}`;
    }
    const reqHeaders = {
      "Content-Type": "application/json",
      ...init?.headers,
      ...injectedHeaders,
      ...buildHeaders,
    };
    result = await fetch(url, {
      ...init,
      headers: reqHeaders,
    });
    if (!result.ok) {
      throw new Error("Failed to fetch");
    }
    let parsedResult;
    try {
      parsedResult = await result.json();
    } catch (error) {
      console.log("Failed to parse response, probably not JSON", result, error);
      return result as T;
    }
    if (isServerError(parsedResult)) {
      throw new Error(parsedResult.error);
    }
    return parsedResult as T;
  } catch (error) {
    throw error;
  }
};

export default fetcher;
