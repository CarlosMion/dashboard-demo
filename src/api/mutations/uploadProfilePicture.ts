import { apiKeys } from "../config/apiKeys";
import {
  BaseMutationOptions,
  BaseUseMutationResult,
  useBaseMutation,
} from "@/api/requests/base/useBaseMutation";

export type UploadProfilePictureVariables = {
  file: File;
};

export const uploadProfilePicture =
  async ({}: UploadProfilePictureVariables): Promise<string> => {
    return "success";
  };

export const useUploadProfilePicture = (
  options?: BaseMutationOptions<string, UploadProfilePictureVariables>
): BaseUseMutationResult<string, UploadProfilePictureVariables> =>
  useBaseMutation<string, UploadProfilePictureVariables>(uploadProfilePicture, {
    ...options,
    disableGlobalError: true,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    invalidateQueriesKeysFn: (_data, _variables) => [apiKeys.users()],
  });
