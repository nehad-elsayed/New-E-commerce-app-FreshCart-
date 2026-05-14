import { useSuspenseQuery } from "@tanstack/react-query";
import type { Category } from "../types/types";
import { getCategories } from "../APi/getAllCategories";

export default function useCategories() {
  return useSuspenseQuery<Category[]>({
    queryKey: ["categories"],
    queryFn: getCategories,
    refetchInterval: 10000000,
  });
}
