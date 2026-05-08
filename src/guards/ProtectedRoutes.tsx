import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoutes({ children }: { children: React.ReactNode }) {
const { token } = useContext(AuthContext) as { token: string | null };
return <>
{token ? children : <Navigate to="/login" replace />}
 </>;
}
