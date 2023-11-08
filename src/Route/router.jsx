import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import AddAJob from "../Pages/AddAJob";
import PrivetRoute from "./PrivetRoute";
import Details from "../Pages/Details";
import AllJobs from "../Pages/AllJobs";
import PrivetRouterJobs from "./PrivetRouterJobs";
import AppliedJobs from "../Pages/AppliedJobs";
import MyJobs from "../Pages/MyJobs";
import UpdateJob from "../Pages/UpdateJob";


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
                element: <PrivetRouterJobs><Details></Details></PrivetRouterJobs>,
                loader: ({ params }) => fetch(`http://localhost:5000/listedJobs/${params.id}`)
            },
            {
                path: '/all-jobs',
                element: <AllJobs />
            },
            {
                path: '/applied-jobs',
                element: <PrivetRoute><AppliedJobs></AppliedJobs></PrivetRoute>
            },
            {
                path: '/add-a-job',
                element: <PrivetRoute><AddAJob /></PrivetRoute>
            },
            {
                path: '/my-jobs',
                element: <PrivetRoute><MyJobs></MyJobs></PrivetRoute>
            },
            {
                path: '/my-jobs/:id',
                element: <PrivetRoute><UpdateJob></UpdateJob></PrivetRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/listedJobs/${params.id}`)
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