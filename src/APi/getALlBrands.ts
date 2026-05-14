import axios from "axios";
import type { Brand } from "../types/types";

export async function getBrands() {
  const { data } = await axios.get("https://ecommerce.routemisr.com/api/v1/brands");
  return data.data as Brand[];
}
