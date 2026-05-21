import { useSuspenseQuery } from "@tanstack/react-query";
import { getProductDetails } from "../APi/getProductDetails";
import { useParams } from "react-router-dom";

export default function useProductDetails() {
  const { id } = useParams<{ id: string }>();

  return useSuspenseQuery({
    queryKey: ["productDetails", id],
    queryFn: () => getProductDetails(id!),
  });
}
