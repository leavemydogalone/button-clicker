import React, { useState, useEffect, useContext } from "react";
import "./App.scss";
import Header from "./components/Header";
import Menu from "./components/Menu";

import { AuthContext } from "./auth/Auth";

function App() {
  const { currentUser } = useContext(AuthContext);

  // console.log(currentUser);

  return (
    <div className="App">
      <Header />
      <Menu />
    </div>
  );
}

export default App;
