import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import AddAJob from "../Pages/AddAJob";
import PrivetRoute from "./PrivetRoute";
import Details from "../Pages/Details";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/details/:id',
                element: <PrivetRoute><Details></Details></PrivetRoute>,
                loader: ({ params }) => fetch(`https://tech-and-electronics-server-2q0uuz4tq-jahid-hossans-projects.vercel.app/products/${params.id}`)
            },
            {
                path: '/add-a-job',
                element: <AddAJob />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    }
])

export default router;