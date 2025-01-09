import {
  Mutation,
  Query,
  QueryKey,
  useQueryClient,
} from "@tanstack/react-query";
import { useCallback, useEffect, useState } from "react";

import { getErrorMessage } from "@/utils";

export interface ApiErrorData {
  error: Error;
  query?: Query<unknown, unknown, unknown, QueryKey>;
  mutation?: Mutation<unknown, unknown, unknown, unknown>;
}

export default function ApiErrorManager() {
  const queryClient = useQueryClient();

  const [apiErrorData, setApiErrorData] = useState<ApiErrorData | undefined>(
    undefined
  );

  useEffect(() => {
    queryClient.getQueryCache().config.onError = (error, query) => {
      // If this query has a no global error meta, skip error
      if (query.options.meta?.disableGlobalError) return;

      setApiErrorData({ error, query });
    };
    queryClient.getMutationCache().config.onError = (
      error,
      _variables,
      _context,
      mutation
    ) => {
      // If this mutation has a no global error meta, skip error
      if (mutation.options.meta?.disableGlobalError) return;

      setApiErrorData({ error, mutation });
    };
  }, []);

  const notificationHandler = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (apiErrorData: ApiErrorData) => {
      let errorMessage = apiErrorData?.error.message;
      try {
        errorMessage =
          // @ts-expect-error error is not a string
          apiErrorData?.error?.response?.data?.message ||
          // @ts-expect-error error is not a string
          apiErrorData?.error?.response?.data?.errors?.join(", ") ||
          getErrorMessage(apiErrorData);
      } catch (e) {
        console.error(`error: ${errorMessage}`, e);
      }
      //
    },
    []
  );

  useEffect(() => {
    if (apiErrorData) {
      notificationHandler(apiErrorData);
      setApiErrorData(undefined);
    }
  }, [apiErrorData, notificationHandler]);

  return null;
}
