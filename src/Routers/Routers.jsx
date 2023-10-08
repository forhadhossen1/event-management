import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Layouts/Layouts";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Details from "../Pages/Details/Details";
import PrivetRouts from "./PrivetRouts";
import Contact from "../Pages/Contact/Contact";
import About from "../Pages/About/About";
import Clients from "../Pages/Clients/Clients";

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
          path : '/clients',
          element : <PrivetRouts><Clients></Clients></PrivetRouts>
        },
        {
          path: '/services/:id',
          element : <PrivetRouts><Details></Details>,</PrivetRouts>,
          loader : () => fetch('/data.json')
        },
        {
          path : '/login',
          element :<Login></Login>
        },
        {
          path : '/signUp',
          element : <SignUp></SignUp>
        },
        {
          path : '/contact',
          element : <PrivetRouts><Contact></Contact></PrivetRouts>
        },
        {
          path : '/about',
          element : <About></About>
        }
      ]
    },
  ]);

  export default router;