import React, { useEffect, useContext } from "react";
import { login } from "../methods/firebaseMethods";
import { AuthContext } from "../auth/Auth";

export default function MenuSignIn() {
  const { currentUser } = useContext(AuthContext);

  // for right now, have the app automatically signing in to an account
  useEffect(() => {
    if (!currentUser) {
      login("john@john.com", "johnjohn");
      console.log(currentUser);
    }
  }, []);

  return <div className="signIn">MenuSignIn</div>;
}
