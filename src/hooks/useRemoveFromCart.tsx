import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeFromCart } from "../APi/removeFromCart";
import { toast } from "react-toastify";

export default function useRemoveFromCart() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["removeFromCart"],
    mutationFn: (productId: string) => removeFromCart(productId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cartProducts"] });
      toast.success("Product removed from cart", {
        position: "bottom-right",
        autoClose: 2000,
      });
    },
    onError: () => {
      toast.error("Failed to remove product", {
        position: "bottom-right",
        autoClose: 2000,
      });
    },
  });
}
