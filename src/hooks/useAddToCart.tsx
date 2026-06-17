import { useMutation } from "@tanstack/react-query";
import { AddToCart } from "../APi/AddToCart";
import { toast } from "react-toastify";

export default function useAddToCart() {
  return useMutation({
    mutationKey: ["addToCart"],
    mutationFn: (productId: string) => AddToCart(productId),
    onSuccess: () => {
      toast.success("Product added to cart!", {
        position: "top-right",
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
