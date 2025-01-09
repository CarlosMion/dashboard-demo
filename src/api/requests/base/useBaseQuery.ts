import {
  QueryKey,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import { useMemo } from "react";

import { disableGlobalErrorMeta } from "../../config/meta";

/* eslint-disable @typescript-eslint/no-unused-vars */
export type BaseQueryOptions<Data, Variables> = Omit<
  UseQueryOptions<Data, unknown, Data>,
  "queryKey" | "queryFn"
> & {
  disableGlobalError?: boolean;
};

export type BaseUseQueryResult<Data> = UseQueryResult<Data, unknown>;

export const useBaseQuery = <Data, Variables>(
  queryKey: QueryKey,
  queryFn: (variables: Variables) => Promise<Data>,
  variables: Variables,
  options?: BaseQueryOptions<Data, Variables>
): BaseUseQueryResult<Data> => {
  const queryFnInternal = useMemo<() => Promise<Data>>(
    () => () => queryFn(variables),
    [queryFn, variables]
  );

  return useQuery<Data, unknown, Data>({
    refetchOnWindowFocus: false,
    ...options,
    meta: {
      ...options?.meta,
      ...(options?.disableGlobalError ? disableGlobalErrorMeta : undefined),
    },
    queryKey,
    queryFn: queryFnInternal,
  });
};
