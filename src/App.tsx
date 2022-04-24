import React, { useState, useEffect } from "react";
import { AuthProvider } from "./auth/Auth";

import "./App.scss";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <header className="App-header">{}</header>
        <body></body>
        <footer></footer>
      </div>
    </AuthProvider>
  );
}

export default App;
