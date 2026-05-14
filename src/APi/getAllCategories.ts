import axios from "axios";
import type { Category } from "../types/types";

export async function getCategories() {
  const { data } = await axios.get("https://ecommerce.routemisr.com/api/v1/categories");
  return data.data as Category[];
}
