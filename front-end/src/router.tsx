import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
