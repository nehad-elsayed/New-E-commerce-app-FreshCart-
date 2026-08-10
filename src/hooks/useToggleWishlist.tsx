import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addToWishlist, getWishlist, removeFromWishlist } from "../APi/wishlist";
import { AuthContext } from "../contexts/AuthContext";

export function useWishlistProducts() {
  const { token } = useContext(AuthContext);

  return useQuery({
    queryKey: ["wishlist"],
    queryFn: getWishlist,
    enabled: !!token,
    staleTime: 60_000,
  });
}

export function useToggleWishlist(productId: string) {
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { data: wishlist } = useWishlistProducts();

  const isInWishlist = wishlist?.data?.some(
    (product) => product._id === productId || product.id === productId,
  );

  const addMutation = useMutation({
    mutationFn: () => addToWishlist(productId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["wishlist"] });
      toast.success("Added to wishlist!", {
        position: "bottom-right",
        autoClose: 2000,
      });
    },
    onError: () => {
      toast.error("Failed to add to wishlist.", {
        toastId: "wishlist-add-error",
        position: "bottom-right",
        autoClose: 2000,
      });
    },
  });

  const removeMutation = useMutation({
    mutationFn: () => removeFromWishlist(productId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["wishlist"] });
      toast.success("Removed from wishlist.", {
        position: "bottom-right",
        autoClose: 2000,
      });
    },
    onError: () => {
      toast.error("Failed to remove from wishlist.", {
        toastId: "wishlist-remove-error",
        position: "bottom-right",
        autoClose: 2000,
      });
    },
  });

  const isPending = addMutation.isPending || removeMutation.isPending;

  function toggleWishlist() {
    if (!token) {
      toast.error("Please sign in first!", {
        toastId: "auth-required",
        position: "top-center",
        autoClose: 3000,
      });
      navigate("/login");
      return;
    }

    if (isInWishlist) {
      removeMutation.mutate();
      return;
    }

    addMutation.mutate();
  }

  return { isInWishlist, isPending, toggleWishlist };
}
