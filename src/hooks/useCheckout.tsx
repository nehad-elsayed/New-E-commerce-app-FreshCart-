import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { createCheckoutSession } from "../APi/createCheckoutSession";
import type { ShippingAddress } from "../types/types";

export default function useCheckout() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["checkoutSession"],
    mutationFn: ({
      cartId,
      shippingAddress,
    }: {
      cartId: string;
      shippingAddress: ShippingAddress;
    }) => createCheckoutSession(cartId, shippingAddress),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["cartProducts"] });
      const payUrl = data?.session?.url;
      if (payUrl) {
        window.location.href = payUrl;
        return;
      }
      toast.error("Payment page is unavailable. Please try again.", {
        toastId: "checkout-unavailable",
        position: "bottom-right",
        autoClose: 2000,
      });
    },
    onError: () => {
      toast.error("Checkout failed, please try again.", {
        toastId: "checkout-error",
        position: "bottom-right",
        autoClose: 2000,
      });
    },
  });
}
