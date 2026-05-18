import { useSuspenseQuery } from "@tanstack/react-query";
import type { Brand } from "../types/types";
import { getBrands } from "../APi/getALlBrands";

export default function useBrands() {
  return useSuspenseQuery<Brand[]>({
    queryKey: ["brands"],
    queryFn: getBrands,
  });
}
