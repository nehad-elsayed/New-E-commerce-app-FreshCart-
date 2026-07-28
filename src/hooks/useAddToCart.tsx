import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AddToCart } from "../APi/AddToCart";
import { toast } from "react-toastify";

export default function useAddToCart() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["addToCart"],
    mutationFn: (productId: string) => AddToCart(productId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cartProducts"] });
      toast.success("Product added to cart!", {
        position: "bottom-right",
        autoClose: 2000,
      });
    },
    onError: () => {
      toast.error("Failed to add product, please try again!", {
        position: "top-center",
        autoClose: 2000,
      });
    },
  });
}
