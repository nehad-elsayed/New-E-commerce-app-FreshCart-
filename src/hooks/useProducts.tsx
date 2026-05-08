import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../APi/getAllProducts";
import type { Product } from "../types/types";

export default function useProducts() {
  return useQuery<Product[], Error>({
    queryKey: ["allProducts"],
    queryFn: getAllProducts,
    staleTime: 1000000,
  });
}
