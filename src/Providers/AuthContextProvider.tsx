import { useState } from "react";
import {
  getLocalStorageToken,
  removeLocalStorageToken,
  setLocalStorageToken,
} from "../utils/LocalStorage";
import { AuthContext } from "../contexts/AuthContext";
export default function AuthContextProvider({ children }: { children: React.ReactNode }) {
  const [token, setTokenState] = useState<string | null>(getLocalStorageToken());


  function setToken(newToken: string | null) {
    setTokenState(newToken);
    if (newToken) {
      setLocalStorageToken(newToken);
    } else {
      removeLocalStorageToken();
    }
  }

  return <AuthContext.Provider value={{ token, setToken }}>{children}</AuthContext.Provider>;
}
