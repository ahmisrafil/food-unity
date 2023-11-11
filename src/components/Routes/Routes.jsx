import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Error from "../../pages/Error/Error";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import AvailableFoods from "../../pages/AvailableFoods/AvailableFoods";
import AddFood from "../../pages/AddFood/AddFood";


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
        {
          path:"/availableFoods",
          element: <AvailableFoods></AvailableFoods>
        },
        {
          path:"/addfood",
          element: <AddFood></AddFood>
        },
        // {
        //   path:"/",
        //   element: 
        // },
        // {
        //   path:"/",
        //   element: 
        // },
      ]
    },
  ]);



  export default router;