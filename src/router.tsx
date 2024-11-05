import { createBrowserRouter } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Index />
    },
    {
        path: "/entrar",
        element: <Login />
    }
])

export default router;