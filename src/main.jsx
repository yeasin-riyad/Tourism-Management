import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import 'dotenv/config'
import { RouterProvider } from "react-router-dom";
import router from "./components/router.jsx";
import FirebaseProvider from "./components/ContextApi/FirebaseProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirebaseProvider>
      <RouterProvider router={router} />
    </FirebaseProvider>
  </React.StrictMode>
);
