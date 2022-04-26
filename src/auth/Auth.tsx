import React, { useState, useEffect } from "react";
import { auth } from "../firebase-config";
import Spinner from "../components/Spinner";

interface IUser {
  currentUser: {} | null;
}

export const AuthContext = React.createContext<IUser>({} as IUser);

// should rename to make it more generic and have the name work with votes as well
export const AuthProvider = ({ children }: any) => {
  const [currentUser, setCurrentUser] = useState<{} | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
