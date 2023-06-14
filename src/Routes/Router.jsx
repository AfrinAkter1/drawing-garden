import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Error from "../Error";
import Dashboard from "../Pages/Dashboard/Dashboard";
import MyClass from "../Pages/Dashboard/MyClass";
import AllUsers from "../Pages/Dashboard/AllUsers";
import AddClass from "../Pages/Dashboard/AddClass";
import InstractorRoute from "../PrivetRoute/InstractorRoute";

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
        },
        {
          path:'addClass',
          element:<InstractorRoute><AddClass></AddClass></InstractorRoute>
        }
      ]
    }
  ]);
  export default router


  // comment
//   mport {
//     createBrowserRouter,
//   } from "react-router-dom";
//   import Main from "../LayOut/Main";
//   import Home from "../pages/Home/Home/Home";
//   import Login from "../pages/Login/Login";
//   import Register from "../pages/Register/Register";
//   import Instructors from "../pages/Instructors/Instructors";

//   import DashboardLayout from "../LayOut/Dashboard";
// //   import MySelectedClass from "../pages/Dashboard/MySelectedClass/MySelectedClass";
//   import ManageClasses from "../pages/Dashboard/ManageClasses/ManageClasses";
//   import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
//   import MyEnrolledClasses from "../pages/Dashboard/MyEnrolledClasses/MyEnrolledClasses";
//   import AddClass from "../pages/Dashboard/AddClass/AddClass";
//   import MyClass from "../pages/Dashboard/MyClass/MyClass";
//   import AdminRoute from "../PrivateRoute/AdminRoute";
//   import InstructorRoute from "../PrivateRoute/InstructorRoute";
//   import Payment from "../pages/Dashboard/Payment/Payment";
//   import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
//   import NotFound from "../Shared/NotFound/NotFound";
// import MySelectedClass from "../pages/Dashboard/MySelectClass/MySelectClass";
// import AllClasses from "../pages/AllClasses/AllClasses";
//   // import Payment from "../pages/Dashboard/Payment/Payment";
  
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Main></Main>,
//       errorElement: <NotFound></NotFound>,
//       children: [
//         {
//           path: '/',
//           element: <Home></Home>
//         },
//         {
//           path: 'login',
//           element: <Login></Login>
//         },
//         {
//           path: 'register',
//           element: <Register></Register>
//         },
//         {
//           path: 'instructors',
//           element: <Instructors></Instructors>
//         },
//         {
//           path: 'allClasses',
//           element: <AllClasses></AllClasses>
//         },
//         {
//           path: '*',
//           element: <NotFound></NotFound>
//         }
//       ]
//     },
//     {
//       path: '/dashboard',
//       element: <DashboardLayout></DashboardLayout>,
//       errorElement: <NotFound></NotFound>,
//       children: [
//         // student users
//         {
//           path: 'mySelectClass',
//           element: <MySelectedClass></MySelectedClass>
//         },
//         {
//           path: 'myEnrolledClass',
//           element: <MyEnrolledClasses></MyEnrolledClasses>
//         },
  
//         {
//           path: "payment/:id",
//           element: <Payment></Payment>,
//           loader: ({ params }) =>
//             fetch(https://assignment12-server-murex.vercel.app/selectClass/${params.id}),
//         },
  
//         {
//           path: 'paymentHistory',
//           element: <PaymentHistory></PaymentHistory>
//         },
//         // Instructors Route
//         {
//           path: 'addClass',
//           element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
//         },
//         {
//           path: 'myClass',
//           element: <InstructorRoute> <MyClass></MyClass></InstructorRoute>
//         },
//         // Admin Route
//         {
//           path: 'manageClasses',
//           element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
//         },
//         {
//           path: 'manageUsers',
//           element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
//         },
  
//       ]
//     }
//   ]);
  
//   export default router;