import axios from "axios";
import type { RegisterFormData } from "../pages/Register";

const API_URL = "https://ecommerce.routemisr.com/api/v1/auth/signup";

export async function signUp(userData: RegisterFormData) {
  const { data } = await axios.post(API_URL, userData);
  return data;
}
