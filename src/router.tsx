import { createBrowserRouter } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import About from "./pages/About";
import Partners from "./pages/Partners";
import Compostagem from "./pages/Compostagem";
import Mav from "./pages/Mav"



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
        path: "/compostagem",
        element: <Compostagem/>
    },
    {
        path: "/mav",
        element: <Mav/>
    }
])

export default router;