import { useMutation } from "@tanstack/react-query";
import type { ApiError, LoginResponse, UserInfo } from "../types/types";
import type { AxiosError } from "axios";
import { login } from "../APi/login";
import { useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";
import { setLocalStorageToken } from "../utils/LocalStorage";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function useLogin() {
  const navigate = useNavigate();
  const { setToken } = useContext(AuthContext);
  return useMutation<LoginResponse, AxiosError<ApiError>, UserInfo>({
    mutationFn: login,
    onSuccess: (data) => {
      setLocalStorageToken(data.token);
      setToken(data.token);

      navigate("/");
      toast.success(`${data.message}`, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    },
    onError: (error) => {
      toast.error(`${error.message}`, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    },
  });
}
