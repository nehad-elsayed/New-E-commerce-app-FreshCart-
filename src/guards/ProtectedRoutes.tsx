import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function ProtectedRoutes({ children }: { children: React.ReactNode }) {
  const { token } = useContext(AuthContext) as { token: string | null };

  if (!token) {
    toast.error("Please sign in first!", {
      toastId: "auth-required",
      position: "top-center",
      autoClose: 3000,
    });
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}
