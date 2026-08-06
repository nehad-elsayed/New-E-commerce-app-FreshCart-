import { useSuspenseQuery } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { getUserOrders } from "../APi/getUserOrders";
import type { ApiError, UserOrder } from "../types/types";

export default function useUserOrders() {
  return useSuspenseQuery<UserOrder[], AxiosError<ApiError>>({
    queryKey: ["userOrders"],
    queryFn: getUserOrders,
    staleTime: 60_000,
  });
}
