import { createBrowserRouter } from "react-router-dom";
import Teste from "./pages/Teste";


const router = createBrowserRouter([
    {
        path: "/teste",
        element: <Teste />
    }
])

export default router;