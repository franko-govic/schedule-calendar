import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [toggleAuth, setToggleAuth] = useState(false);
  return (
    <AuthContext.Provider value={{ user, setUser, toggleAuth, setToggleAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
