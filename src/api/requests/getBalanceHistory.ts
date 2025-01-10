import { BalanceHistory } from "@/types";
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

export const getBalanceHistory = async (): Promise<BalanceHistory[]> => {
  try {
    const result = await fetcher<BalanceHistory[]>("balanceHistory", {
      method: "GET",
    });
    return result;
  } catch (error) {
    console.error("Failed to fetch balance histories", error);
    throw new Error(
      `Failed to fetch balance histories with error ${
        (error as Error)?.message
      }`
    );
  }
};

export const useGetBalanceHistory = (
  options?: BaseMutationOptions<BalanceHistory[], Variables>
): BaseUseMutationResult<BalanceHistory[], Variables> =>
  useBaseMutation<BalanceHistory[], Variables>(getBalanceHistory, options);

export const useGetBalanceHistoryQuery = (
  variables: Variables,
  options?: BaseQueryOptions<BalanceHistory[], Variables>
): BaseUseQueryResult<BalanceHistory[]> =>
  useBaseQuery<BalanceHistory[], Variables>(
    apiKeys.balanceHistory(),
    getBalanceHistory,
    variables,
    {
      ...options,
    }
  );
