import { createBrowserRouter } from "react-router-dom";
import Root from "../../layouts/Root";
import Home from "../../pages/Home";
import Assignments from "../../pages/Assignments";
import CreateAssignments from "../../pages/CreateAssignments";
import PendingAssignments from "../../pages/PendingAssignments";
import Register from "../../pages/Register";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path: '/',
            element:<Home></Home>
        },
        {
            path: '/assignments',
            element: <Assignments></Assignments>
        },
        {
            path:'/createAssignment',
            element:<CreateAssignments></CreateAssignments>
        },
        {
            path:'/pendingAssignments',
            element:<PendingAssignments></PendingAssignments>
        },
        {
          path:'/register',
          element: <Register></Register>
        }
      ]
    },
  ]);