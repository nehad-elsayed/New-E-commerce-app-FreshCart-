import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { toast } from "react-toastify";

export default function ProtectedAuthRoutes({ children }: { children: React.ReactNode }) {
  const { token } = useContext(AuthContext) as { token: string | null };
  useEffect(() => {
    if (!token) {
      toast.error("Please sign in first!", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  }, [token]);
  return <>{token ? <Navigate to="/" replace /> : children}</>;
}
