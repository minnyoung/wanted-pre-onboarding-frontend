import React from "react";
import Router from "./router";
import { GlobalStyle } from "./styles/GlobalStyle";
import GlobalProvider from "./provider/GlobalProvider";

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <GlobalStyle />
        <Router />
      </GlobalProvider>
    </div>
  );
}

export default App;
