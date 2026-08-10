import axios from "axios";
import { getLocalStorageToken } from "../utils/LocalStorage";
import type { WishlistResponse } from "../types/types";

export async function getWishlist(): Promise<WishlistResponse> {
  const { data } = await axios.get<WishlistResponse>(
    "https://ecommerce.routemisr.com/api/v1/wishlist",
    {
      headers: {
        token: getLocalStorageToken(),
      },
    },
  );

  return {
    status: data.status,
    count: data.count ?? data.data?.length ?? 0,
    data: data.data ?? [],
  };
}

export async function addToWishlist(productId: string): Promise<WishlistResponse> {
  const { data } = await axios.post<WishlistResponse>(
    "https://ecommerce.routemisr.com/api/v1/wishlist",
    { productId },
    {
      headers: {
        token: getLocalStorageToken(),
      },
    },
  );

  return {
    status: data.status,
    count: data.count ?? data.data?.length ?? 0,
    data: data.data ?? [],
  };
}

export async function removeFromWishlist(productId: string): Promise<WishlistResponse> {
  const { data } = await axios.delete<WishlistResponse>(
    `https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,
    {
      headers: {
        token: getLocalStorageToken(),
      },
    },
  );

  return {
    status: data.status,
    count: data.count ?? data.data?.length ?? 0,
    data: data.data ?? [],
  };
}
