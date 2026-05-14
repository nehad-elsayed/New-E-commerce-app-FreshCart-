import { useSuspenseQuery } from "@tanstack/react-query";
import { getAllProducts } from "../APi/getAllProducts";
import type { ApiError, Product } from "../types/types";
import type { AxiosError } from "axios";

export default function useProducts() {
  return useSuspenseQuery<Product[], AxiosError<ApiError>>({
    queryKey: ["allProducts"],
    queryFn: getAllProducts,
    staleTime: 1000000,
     refetchInterval: 10000000,
  });
}
