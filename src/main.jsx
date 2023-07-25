import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./components/Admin";
import User from "./components/User";
import HomePage from "./components/Home";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/user" element={<User />}></Route>
        </Route>
      </Routes> 
    </BrowserRouter>
  </React.StrictMode>
);
