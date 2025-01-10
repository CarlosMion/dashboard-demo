import { RecentTransaction } from "@/types";
import {
  BaseMutationOptions,
  BaseUseMutationResult,
  useBaseMutation,
} from "./base/useBaseMutation";
import {
  BaseQueryOptions,
  BaseUseQueryResult,
  useBaseQuery,
} from "./base/useBaseQuery";
import { fetcher } from "@/utils";
import { apiKeys } from "@/api/config/apiKeys";

type Variables = object;

export const getRecentTransactions = async (): Promise<RecentTransaction[]> => {
  try {
    const result = await fetcher<RecentTransaction[]>("recentTransactions", {
      method: "GET",
    });
    return result;
  } catch (error) {
    console.error("Failed to fetch recent transactions", error);
    throw new Error(
      `Failed to fetch recent transactions with error ${
        (error as Error)?.message
      }`
    );
  }
};

export const useGetRecentTransactions = (
  options?: BaseMutationOptions<RecentTransaction[], Variables>
): BaseUseMutationResult<RecentTransaction[], Variables> =>
  useBaseMutation<RecentTransaction[], Variables>(
    getRecentTransactions,
    options
  );

export const useGetRecentTransactionsQuery = (
  variables: Variables,
  options?: BaseQueryOptions<RecentTransaction[], Variables>
): BaseUseQueryResult<RecentTransaction[]> =>
  useBaseQuery<RecentTransaction[], Variables>(
    apiKeys.recentTransactions(),
    getRecentTransactions,
    variables,
    {
      ...options,
    }
  );
