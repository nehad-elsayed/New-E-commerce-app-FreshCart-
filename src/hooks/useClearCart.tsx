import { useMutation, useQueryClient } from "@tanstack/react-query";
import { clearCart } from "../APi/clearCart";
import { toast } from "react-toastify";

export default function useClearCart() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["clearCart"],
    mutationFn: () => clearCart(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cartProducts"] });
      toast.success("Cart cleared", {
        position: "bottom-right",
        autoClose: 2000,
      });
    },
    onError: () => {
      toast.error("Failed to clear cart", {
        position: "bottom-right",
        autoClose: 2000,
      });
    },
  });
}
