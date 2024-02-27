import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";

import Home from "../Pages/Home/Home";
import Course from "../Pages/Course/Course";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login";
import CourseDetails from "../components/Courses/CourseDetails";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";




const router = createBrowserRouter([
   {
    path:"/",
    element:<Root></Root>,
    children: [
        {
            path:"/",
            element:<Home></Home>,
            loader: () => fetch('/course.json')
        },
        {
            path:"/course",
            element: <PrivateRoute><Course></Course></PrivateRoute>,
            
        },
        {
            path:"/blog",
            element:<PrivateRoute><Blog></Blog></PrivateRoute>,
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
            path:"/coursedetails/:id",
            element: <PrivateRoute><CourseDetails></CourseDetails></PrivateRoute>,
            loader: () => fetch('/course.json')
        }
    ]
   }
])

export default router