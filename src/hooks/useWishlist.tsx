import { useSuspenseQuery } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { getWishlist } from "../APi/wishlist";
import type { ApiError, WishlistResponse } from "../types/types";

export default function useWishlist() {
  return useSuspenseQuery<WishlistResponse, AxiosError<ApiError>>({
    queryKey: ["wishlist"],
    queryFn: getWishlist,
    staleTime: 60_000,
  });
}
