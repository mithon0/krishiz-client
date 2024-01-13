import {createBrowserRouter} from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Products from "../Pages/Products/Products";
import Carts from "../Pages/Carts/Carts";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:"about",
          element:<About/>
        },
        {
          path:"products",
          element:<Products/>
        },
        {
          path:"carts",
          element:<Carts/>
        }
      ]
    },
  ]);