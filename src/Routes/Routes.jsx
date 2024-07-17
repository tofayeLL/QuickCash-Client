import { createBrowserRouter } from "react-router-dom";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";







export const router = createBrowserRouter([

    /* { path: '/login', element: <Login> </Login> },
    { path: '/signup', element: <SignUp></SignUp> }, */





    {
      path: "/",
      element: <SignUp></SignUp>,
    },
    {
      path: "/login",
      element: <Login></Login>
    },



  ]);