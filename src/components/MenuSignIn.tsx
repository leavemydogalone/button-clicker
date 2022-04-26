import React, { useEffect } from "react";
import { login } from "../methods/firebaseMethods";

export default function MenuSignIn() {
  // for right now, have the app automatically signing in to an account
  useEffect(() => {
    login("john@john.com", "johnjohn");
  }, []);

  return <div className="signIn">MenuSignIn</div>;
}
