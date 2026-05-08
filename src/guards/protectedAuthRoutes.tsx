import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function ProtectedAuthRoutes({ children }: { children: React.ReactNode }) {
  const { token } = useContext(AuthContext) as { token: string | null };
  return <>{token ? <Navigate to="/" replace /> : children}</>;
}
