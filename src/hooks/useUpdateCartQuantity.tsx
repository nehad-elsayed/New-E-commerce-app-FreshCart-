import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCartQuantity } from "../APi/updateCartQuantity";
import { toast } from "react-toastify";

export default function useUpdateCartQuantity() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["updateCartQuantity"],
    mutationFn: ({ productId, count }: { productId: string; count: number }) =>
      updateCartQuantity(productId, count),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cartProducts"] });
    },
    onError: () => {
      toast.error("Failed to update quantity", {
        position: "bottom-right",
        autoClose: 2000,
      });
    },
  });
}
