import { ExpenseStatistic } from "@/types";
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

export const getExpenseStatistics = async (): Promise<ExpenseStatistic[]> => {
  try {
    const result = await fetcher<ExpenseStatistic[]>("expenseStatistics", {
      method: "GET",
    });
    return result;
  } catch (error) {
    console.error("Failed to fetch expenses", error);
    throw new Error(
      `Failed to fetch expenses with error ${(error as Error)?.message}`
    );
  }
};

export const useGetExpenseStatistics = (
  options?: BaseMutationOptions<ExpenseStatistic[], Variables>
): BaseUseMutationResult<ExpenseStatistic[], Variables> =>
  useBaseMutation<ExpenseStatistic[], Variables>(getExpenseStatistics, options);

export const useGetExpenseStatisticsQuery = (
  variables: Variables,
  options?: BaseQueryOptions<ExpenseStatistic[], Variables>
): BaseUseQueryResult<ExpenseStatistic[]> =>
  useBaseQuery<ExpenseStatistic[], Variables>(
    apiKeys.expenses(),
    getExpenseStatistics,
    variables,
    {
      ...options,
    }
  );
