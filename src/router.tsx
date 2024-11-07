import { createBrowserRouter } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import About from "./pages/About";
import Partners from "./pages/Partners";
import Admin from "./pages/Admin";



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
    },
    {
        path: "/parceiros",
        element: <Partners />
    },
    {
        path: "/admin",
        element: <Admin />
    }
])

export default router;