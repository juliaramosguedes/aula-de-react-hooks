import { createContext, useState, useEffect, useContext } from "react";

import { api, auth } from "@/services";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storagedUser = localStorage.getItem("user");
    const storagedToken = localStorage.getItem("token");

    if (storagedUser && storagedToken) {
      setUser(JSON.parse(storagedUser));
      api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
    }

    setTimeout(() => setLoading(false), 1000);
  }, []);

  const signIn = async () => {
    const response = await auth.signIn();
    setUser(response?.user);

    api.defaults.headers.Authorization = `Bearer ${response?.token}`;

    localStorage.setItem("user", JSON.stringify(response?.user));
    localStorage.setItem("token", response?.token);
    setTimeout(() => setLoading(false), 1000);
  };

  const signOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider.");
  }

  return context;
};
