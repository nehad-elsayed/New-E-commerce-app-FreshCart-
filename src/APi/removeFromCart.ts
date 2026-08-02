import axios from "axios";
import { getLocalStorageToken } from "../utils/LocalStorage";
import type { Root } from "../types/types";

export async function removeFromCart(productId: string): Promise<Root> {
  const { data } = await axios.delete<Root>(
    `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
    {
      headers: {
        token: getLocalStorageToken(),
      },
    },
  );
  return data;
}
