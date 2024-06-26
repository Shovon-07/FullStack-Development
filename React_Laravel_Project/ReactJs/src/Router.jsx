import { Navigate, createBrowserRouter } from "react-router-dom";

//___ Pages ___//
import DefaultLayout from "./Components/DefaultLayout";
import GuestLayout from "./Components/GuestLayout";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Dashboard from "./Pages/Dashboard";
import User from "./Pages/User";
import ErrorPage from "./Pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            { path: "/", element: <Navigate to={"/user"} /> },
            { path: "/dashboard", element: <Dashboard /> },
            { path: "/user", element: <User /> },
        ],
    },
    {
        path: "/",
        element: <GuestLayout />,
        children: [
            { path: "/login", element: <Login /> },
            { path: "/sign-up", element: <SignUp /> },
        ],
    },
    { path: "*", element: <ErrorPage /> },
]);

export default router;
