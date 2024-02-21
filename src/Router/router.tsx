import {createBrowserRouter} from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Products from "../Pages/Products/Products";
import Carts from "../Pages/Carts/Carts";
import Login from "../Pages/LoginSignUp/Login";
import SignUp from "../Pages/LoginSignUp/SignUp";
import AdminLayout from "../LayOut/AdminLayout";
import AddProduct from "../Pages/AdminPages/AddProduct";
import UserManagement from "../Pages/AdminPages/UserManagement";
import ProductManagement from "../Pages/AdminPages/ProductManagement";

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
        },
        {
          path:'/login',
          element:<Login/>
        },
        {
          path:"signup",
          element:<SignUp/>
        }
      ]
    },
    {
      path:"/admin",
      element:<AdminLayout/>,
      children:[
        {
          path:"user-management",
          element:<UserManagement/>
        },
        {
          path:"add-product",
          element:<AddProduct/>
        },
        {
          path:"product-management",
          element:<ProductManagement/>
        },
      ]
    }
  ]);