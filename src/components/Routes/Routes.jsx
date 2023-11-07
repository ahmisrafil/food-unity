import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Error from "../../pages/Error/Error";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <Error></Error>,
      children: [
        {
          path:"/",
          element: <Home></Home>
        },
        {
          path:"/login",
          element: <Login></Login>
        },
        {
          path:"/register",
          element: <Register></Register>
        },
        // {
        //   path:"/",
        //   element: 
        // },
      ]
    },
  ]);



  export default router;