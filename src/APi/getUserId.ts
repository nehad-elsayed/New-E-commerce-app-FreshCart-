import axios from "axios";
import { getLocalStorageToken } from "../utils/LocalStorage";

export async function getUserId(): Promise<string> {
  const { data } = await axios.get(
    `https://ecommerce.routemisr.com/api/v1/auth/verifyToken`,
    {
      headers: {
        token: getLocalStorageToken(),
      },
    },
  );
  return data?.decoded?.id;
}
