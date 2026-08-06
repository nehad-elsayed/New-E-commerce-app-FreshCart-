import axios from "axios";
import { getLocalStorageToken } from "../utils/LocalStorage";
import type { ShippingAddress } from "../types/types";

export interface CheckoutSessionResponse {
  status: string;
  session: {
    url: string;
    success_url: string;
    cancel_url: string;
  };
}

export async function createCheckoutSession(
  cartId: string,
  shippingAddress: ShippingAddress,
): Promise<CheckoutSessionResponse> {
  const { data } = await axios.post<CheckoutSessionResponse>(
    `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}`,
    { shippingAddress },
    {
      headers: {
        token: getLocalStorageToken(),
      },
      params: {
        url: window.location.origin,
      },
    },
  );
  return data;
}
