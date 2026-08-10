import axios from "axios";
import type { LoginResponse, UserInfo } from "../types/types";


export async function login(userData: UserInfo): Promise<LoginResponse> {
  const { data } = await axios.post<LoginResponse>(
    "https://ecommerce.routemisr.com/api/v1/auth/signin",
    userData,);
  return data;
}

