import { WeeklyActivity } from "@/types";
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

export const getWeeklyActivity = async (): Promise<WeeklyActivity[]> => {
  try {
    const result = await fetcher<WeeklyActivity[]>("weeklyActivity", {
      method: "GET",
    });
    return result;
  } catch (error) {
    console.error("Failed to fetch Weekly Activity", error);
    throw new Error(
      `Failed to fetch Weekly Activity with error ${(error as Error)?.message}`
    );
  }
};

export const useGetWeeklyActivity = (
  options?: BaseMutationOptions<WeeklyActivity[], Variables>
): BaseUseMutationResult<WeeklyActivity[], Variables> =>
  useBaseMutation<WeeklyActivity[], Variables>(getWeeklyActivity, options);

export const useGetWeeklyActivityQuery = (
  variables: Variables,
  options?: BaseQueryOptions<WeeklyActivity[], Variables>
): BaseUseQueryResult<WeeklyActivity[]> =>
  useBaseQuery<WeeklyActivity[], Variables>(
    apiKeys.weeklyActivity(),
    getWeeklyActivity,
    variables,
    {
      ...options,
    }
  );
