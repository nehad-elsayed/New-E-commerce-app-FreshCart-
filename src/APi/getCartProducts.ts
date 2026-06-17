import axios from "axios";
import { getLocalStorageToken } from "../utils/LocalStorage";
import type { Root } from "../types/types";

export async function getCartProducts(): Promise<Root> {
  const { data } = await axios.get<Root>(`https://ecommerce.routemisr.com/api/v1/cart`, {
    headers: {
      token: getLocalStorageToken(),
    },
  });
  return data;
}
