import { useMutation } from "@tanstack/react-query";
import { signUp } from "../APi/register";
import { useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";

export default function useRegister() {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: signUp,
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      navigate("/");
      toast.success("success", {
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
