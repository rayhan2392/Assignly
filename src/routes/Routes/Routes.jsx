import { createBrowserRouter } from "react-router-dom";
import Root from "../../layouts/Root";
import Home from "../../pages/Home";
import Assignments from "../../pages/Assignments";
import CreateAssignments from "../../pages/CreateAssignments";
import PendingAssignments from "../../pages/PendingAssignments";
import Register from "../../pages/Register";
import Login from "../../pages/Login";
import UpdateAssignment from "../../pages/UpdateAssignment";


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
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/updateAssignment/:id',
          element:<UpdateAssignment></UpdateAssignment>,
          loader:({params})=>fetch(`http://localhost:5000/assignments/${params.id}`)
        }
      ]
    },
  ]);