import axios from "axios";
import { getLocalStorageToken } from "../utils/LocalStorage";
import type { Root } from "../types/types";

export async function updateCartQuantity(
  productId: string,
  count: number,
): Promise<Root> {
  const { data } = await axios.put<Root>(
    `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
    { count },
    {
      headers: {
        token: getLocalStorageToken(),
      },
    },
  );
  return data;
}
