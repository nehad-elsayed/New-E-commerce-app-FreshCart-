import { useMutation } from "@tanstack/react-query";
import type { ApiError, LoginResponse, UserInfo } from "../types/types";
import type { AxiosError } from "axios";
import { login } from "../APi/login";
import { useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";



export default function useLogin() {
  const navigate = useNavigate();

  return useMutation<LoginResponse, AxiosError<ApiError>, UserInfo>({
    mutationFn: login,
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
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
      onError: (error)=>{
  toast.error(`${error.message}`,{
            position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
     })
    }
  });
}
