import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Error from "../../pages/Error/Error";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import AvailableFoods from "../../pages/AvailableFoods/AvailableFoods";
import AddFood from "../../pages/AddFood/AddFood";
import FoodDetails from "../../pages/FoodDetails/FoodDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/availableFoods",
        element: <AvailableFoods></AvailableFoods>,
        loader: ()=>fetch('http://localhost:5000/food')
        },
      {
        path: "/addFood",
        element: <AddFood></AddFood>
      },
      {
        path:"/food/:id",
        element: <FoodDetails></FoodDetails>,
      loader: ({params})=>fetch(`http://localhost:5000/food/${params.id}`)
      },
      // {
      //   path:"/",
      //   element: 
      // },
    ]
  },
]);



export default router;