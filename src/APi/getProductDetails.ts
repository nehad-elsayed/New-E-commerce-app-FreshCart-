import axios from "axios";

export async function getProductDetails(id: string) {
  const { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
  return data.data;
}
