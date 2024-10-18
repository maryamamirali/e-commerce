import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Dashboard from "../screens/dashboard";
import Detail from "../screens/detail";
import SignUp from "../screens/signup";
import SignIn from "../screens/signin";
import AddProduct from "../screens/product";


const router = createBrowserRouter([
    {
    path: "/",
    element:<Dashboard />,
    },
    {
    path: "detail/:id",
    element: <Detail />,
    },
    {
    path: "signup",
    element: <SignUp />,
    },
    {
    path: "signin",
    element: <SignIn />,
    },
    {
    path: "product",
    element: <AddProduct />,
    },

]);

export default function Route () {
    return  <RouterProvider router={router} />
}