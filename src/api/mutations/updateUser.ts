import { User } from "@/types";
import { apiKeys } from "../config/apiKeys";
import {
  BaseMutationOptions,
  BaseUseMutationResult,
  useBaseMutation,
} from "@/api/requests/base/useBaseMutation";
import { fetcher } from "@/utils";

export type UpdateUserVariables = {
  userId: string;
  data: Partial<User>;
};

export const updateUser = async ({
  userId,
  data,
}: UpdateUserVariables): Promise<User> => {
  const result = await fetcher<User>(`users/${userId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return result;
};

export const useUpdateUser = (
  options?: BaseMutationOptions<User, UpdateUserVariables>
): BaseUseMutationResult<User, UpdateUserVariables> =>
  useBaseMutation<User, UpdateUserVariables>(updateUser, {
    ...options,
    disableGlobalError: true,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    invalidateQueriesKeysFn: (_data, _variables) => [apiKeys.users()],
  });
