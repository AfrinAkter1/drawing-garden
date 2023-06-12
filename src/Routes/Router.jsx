import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Error from "../Error";
import Dashboard from "../Pages/Dashboard/Dashboard";
import MyClass from "../Pages/Dashboard/MyClass";
import AllUsers from "../Pages/Dashboard/AllUsers";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path: '/register',
          element:<Register></Register>
        }
      ]
    },
    {
      path: 'dashboard',
      element:<Dashboard></Dashboard>,
      children:[
        {
          path: 'myclass',
          element:<MyClass></MyClass>
        },
        {
          path: 'allusers',
          element:<AllUsers></AllUsers>
        }
      ]
    }
  ]);
  export default router