import {
  MutationFunction,
  useMutation,
  UseMutationOptions,
  UseMutationResult,
  useQueryClient,
} from '@tanstack/react-query';

import { disableGlobalErrorMeta } from '../../config/meta';

export type BaseMutationOptions<Data, Variables> = Omit<
  UseMutationOptions<Data, unknown, Variables>,
  'mutationFn'
> & {
  cancelRefetch?: boolean;
  disableGlobalError?: boolean;
  invalidateQueriesKeysFn?: (data: Data, variables: Variables) => unknown[][];
  invalidateQueriesKeysAsyncFn?: (
    data: Data,
    variables: Variables
  ) => Promise<unknown[][]>;
};

export type BaseUseMutationResult<Data, Variables> = UseMutationResult<
  Data,
  unknown,
  Variables
>;

export const useBaseMutation = <Data, Variables>(
  mutationFn: MutationFunction<Data, Variables>,
  options?: BaseMutationOptions<Data, Variables>
): BaseUseMutationResult<Data, Variables> => {
  const queryClient = useQueryClient();

  return useMutation<Data, unknown, Variables>({
    mutationFn,
    ...options,
    meta: {
      ...options?.meta,
      ...(options?.disableGlobalError ? disableGlobalErrorMeta : undefined),
    },
    onSuccess: async (data, variables, context) => {
      options?.onSuccess?.(data, variables, context);
      if (options?.invalidateQueriesKeysFn) {
        const keys = options.invalidateQueriesKeysFn(data, variables);
        for (const key of keys) {
          queryClient.invalidateQueries(
            {
              queryKey: key,
            },
            { cancelRefetch: options?.cancelRefetch }
          );
        }
      }

      if (options?.invalidateQueriesKeysAsyncFn) {
        options.invalidateQueriesKeysAsyncFn(data, variables).then((keys) => {
          for (const key of keys) {
            queryClient.invalidateQueries(
              {
                queryKey: key,
              },
              { cancelRefetch: options?.cancelRefetch }
            );
          }
        });
      }
    },
  });
};
