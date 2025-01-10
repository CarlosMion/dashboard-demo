import { CreditCard } from "@/types";
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

export const getCreditCards = async (): Promise<CreditCard[]> => {
  try {
    const result = await fetcher<CreditCard[]>("creditCards", {
      method: "GET",
    });
    return result;
  } catch (error) {
    console.error("Failed to fetch credit cards", error);
    throw new Error(
      `Failed to fetch credit cards with error ${(error as Error)?.message}`
    );
  }
};

export const useGetCreditCards = (
  options?: BaseMutationOptions<CreditCard[], Variables>
): BaseUseMutationResult<CreditCard[], Variables> =>
  useBaseMutation<CreditCard[], Variables>(getCreditCards, options);

export const useGetCreditCardsQuery = (
  variables: Variables,
  options?: BaseQueryOptions<CreditCard[], Variables>
): BaseUseQueryResult<CreditCard[]> =>
  useBaseQuery<CreditCard[], Variables>(
    apiKeys.cards(),
    getCreditCards,
    variables,
    {
      ...options,
    }
  );
