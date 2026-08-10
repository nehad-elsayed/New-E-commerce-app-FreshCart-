import axios from "axios";
import { getLocalStorageToken } from "../utils/LocalStorage";
import { getUserId } from "./getUserId";
import type { UserOrder } from "../types/types";

export async function getUserOrders(): Promise<UserOrder[]> {
  const userId = await getUserId();
  if (!userId) {
    throw new Error("User ID not found");
  }

  const { data } = await axios.get<UserOrder[]>(
    `https://ecommerce.routemisr.com/api/v1/orders/user/${userId}`,
    {
      headers: {
        token: getLocalStorageToken(),
      },
    },
  );

  const orders = Array.isArray(data) ? data : [];
  return [...orders].reverse();
}
