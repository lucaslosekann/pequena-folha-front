import { createBrowserRouter } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import About from "./pages/About";
import Partners from "./pages/Partners";
import Compostagem from "./pages/Compostagem";
import Mav from "./pages/Mav";
import Admin from "./pages/Admin";
import Formulary from "./pages/Formulary";
import AuthMiddleware, { AuthType } from "./components/AuthMiddleware";
import Agenda from "./pages/Agenda";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <AuthMiddleware type={AuthType.PUBLIC}>
                <Index />
            </AuthMiddleware>
        ),
    },
    {
        path: "/entrar",
        element: (
            <AuthMiddleware type={AuthType.PUBLIC}>
                <Login />
            </AuthMiddleware>
        ),
    },
    {
        path: "/sobre",
        element: (
            <AuthMiddleware type={AuthType.PUBLIC}>
                <About />
            </AuthMiddleware>
        ),
    },
    {
        path: "/parceiros",
        element: (
            <AuthMiddleware type={AuthType.PUBLIC}>
                <Partners />
            </AuthMiddleware>
        ),
    },
    {
        path: "/compostagem",
        element: (
            <AuthMiddleware type={AuthType.PUBLIC}>
                <Compostagem />
            </AuthMiddleware>
        ),
    },
    {
        path: "/mav",
        element: (
            <AuthMiddleware type={AuthType.PUBLIC}>
                <Mav />
            </AuthMiddleware>
        ),
    },
    {
        path: "/admin",
        element: (
            <AuthMiddleware type={AuthType.ADMIN}>
                <Admin />
            </AuthMiddleware>
        ),
    },
    {
        path: "/formulario",
        element: (
            <AuthMiddleware type={AuthType.PRIVATE}>
                <Formulary />
            </AuthMiddleware>
        ),
    },
    {
        path: "/agenda",
        element: <Agenda />,
    },
]);

export default router;
