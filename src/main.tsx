import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-quill/dist/quill.snow.css";
import router from "./router";
import AuthContextProvider from "./contexts/AuthContext";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <AuthContextProvider>
            <RouterProvider router={router} />
            <ToastContainer />
        </AuthContextProvider>
    </StrictMode>,
);
