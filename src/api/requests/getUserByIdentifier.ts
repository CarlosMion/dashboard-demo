import { User } from "@/types";
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

type Variables = {
  userId: string;
};

export const getUserById = async ({ userId }: Variables): Promise<User> => {
  try {
    const result = await fetcher<User[]>(`users?id=${userId}`, {
      method: "GET",
    });
    return result[0];
  } catch (error) {
    console.error("Failed to fetch user by ID", error);
    throw new Error(
      `Failed to fetch user by ID (${userId}) with error ${
        (error as Error)?.message
      }`
    );
  }
};

export const useGetUserById = (
  options?: BaseMutationOptions<User, Variables>
): BaseUseMutationResult<User, Variables> =>
  useBaseMutation<User, Variables>(getUserById, options);

export const useGetUserByIdQuery = (
  variables: Variables,
  options?: BaseQueryOptions<User, Variables>
): BaseUseQueryResult<User> =>
  useBaseQuery<User, Variables>(
    apiKeys.userById(variables.userId),
    getUserById,
    variables,
    {
      ...options,
      enabled: !!variables.userId,
    }
  );
