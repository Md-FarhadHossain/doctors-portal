import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "react-day-picker/dist/style.css";
import { Toaster } from "react-hot-toast";
import AuthContext from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContext>
      <App />
      <Toaster />
    </AuthContext>
  </React.StrictMode>
);
