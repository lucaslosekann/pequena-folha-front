import { createBrowserRouter } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import About from "./pages/About";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Index />
    },
    {
        path: "/entrar",
        element: <Login />
    },
    {
        path: "/sobre",
        element: <About />
    }
])

export default router;