import axios from "axios";
import type { Product } from "../types/types";
const API_URL = "https://ecommerce.routemisr.com/api/v1/products";

export async function getAllProducts(): Promise<Product[]> {
  const { data } = await axios.get(API_URL);
  console.log(data.data);
  return data.data;
}
