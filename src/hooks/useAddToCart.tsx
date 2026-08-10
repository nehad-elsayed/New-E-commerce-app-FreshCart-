import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AddToCart } from "../APi/AddToCart";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function useAddToCart() {
  const queryClient = useQueryClient();
const navigate = useNavigate()

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
      toast.error("Failed to add product, please login frist and  try again!", {
        position: "top-center",
        autoClose: 4000,
      
      });

      navigate("/login")

    },

  });

}







