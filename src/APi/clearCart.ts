import axios from "axios";
import { getLocalStorageToken } from "../utils/LocalStorage";

export async function clearCart(): Promise<{ message: string }> {
  const { data } = await axios.delete<{ message: string }>(
    `https://ecommerce.routemisr.com/api/v1/cart`,
    {
      headers: {
        token: getLocalStorageToken(),
      },
    },
  );
  return data;
}
