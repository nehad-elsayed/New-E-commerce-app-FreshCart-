import { useSuspenseQuery } from "@tanstack/react-query";
import { getCartProducts } from "../APi/getCartProducts";
import type { AxiosError } from "axios";
import type { ApiError, Root } from "../types/types";

export default function useCartProducts() {
  return useSuspenseQuery<Root, AxiosError<ApiError>>({
    queryKey: ["cartProducts"],
    queryFn: getCartProducts,
    staleTime: 100000,
    refetchOnWindowFocus: true,
    refetchOnMount: true,
    refetchOnReconnect: true,
    refetchInterval: 10000,
    refetchIntervalInBackground: true,
  });
}