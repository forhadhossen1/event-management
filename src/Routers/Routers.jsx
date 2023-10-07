import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Layouts/Layouts";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Layouts></Layouts>,
      children : [
        {
            path : '/',
            element :<Home></Home>,
            loader : () => fetch('/data.json')
        },
        {
          path : '/login',
          element : <Login></Login>
        },
        {
          path : '/signUp',
          element : <SignUp></SignUp>
        }
      ]
    },
  ]);

  export default router;