import { Friend } from "@/types";
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

export const getFriends = async (): Promise<Friend[]> => {
  try {
    const result = await fetcher<Friend[]>("friends", {
      method: "GET",
    });
    return result;
  } catch (error) {
    console.error("Failed to fetch friends", error);
    throw new Error(
      `Failed to fetch friends with error ${(error as Error)?.message}`
    );
  }
};

export const useGetFriends = (
  options?: BaseMutationOptions<Friend[], Variables>
): BaseUseMutationResult<Friend[], Variables> =>
  useBaseMutation<Friend[], Variables>(getFriends, options);

export const useGetFriendsQuery = (
  variables: Variables,
  options?: BaseQueryOptions<Friend[], Variables>
): BaseUseQueryResult<Friend[]> =>
  useBaseQuery<Friend[], Variables>(apiKeys.friends(), getFriends, variables, {
    ...options,
  });
