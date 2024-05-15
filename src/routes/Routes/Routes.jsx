import { createBrowserRouter } from "react-router-dom";
import Root from "../../layouts/Root";
import Home from "../../pages/Home";
import Assignments from "../../pages/Assignments";
import CreateAssignments from "../../pages/CreateAssignments";
import PendingAssignments from "../../pages/PendingAssignments";
import Register from "../../pages/Register";
import Login from "../../pages/Login";
import UpdateAssignment from "../../pages/UpdateAssignment";
import AssignmentDetails from "../../pages/AssignmentDetails";
import SubmitAssignment from "../../pages/SubmitAssignment";
import Assess from "../../pages/Assess";
import MyAssignments from "../../pages/MyAssignments";
import PrivateRoute from "../PrivateRoute";
import ErrorPage from "../../pages/ErrorPage";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
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
            element:<PrivateRoute><CreateAssignments></CreateAssignments></PrivateRoute>
        },
        {
            path:'/pendingAssignments',
            element:<PrivateRoute><PendingAssignments></PendingAssignments></PrivateRoute>,
            loader:()=>fetch('https://assign-ly-server.vercel.app/submittedAssignments')
        },
        {
          path:'/myAssignments',
          element:<PrivateRoute><MyAssignments></MyAssignments></PrivateRoute>,
          loader:()=>fetch('https://assign-ly-server.vercel.app/submittedAssignments')
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
          element:<PrivateRoute><UpdateAssignment></UpdateAssignment></PrivateRoute>,
          loader:({params})=>fetch(`https://assign-ly-server.vercel.app/assignments/${params.id}`)
        },
        {
          path:'/assignmentsDetails/:id',
          element:<PrivateRoute><AssignmentDetails></AssignmentDetails></PrivateRoute>,
          loader:({params})=>fetch(`https://assign-ly-server.vercel.app/assignments/${params.id}`)

        },
        {
          path:'/submitAssignment/:id',
          element:<SubmitAssignment></SubmitAssignment>,
          loader:({params})=>fetch(`https://assign-ly-server.vercel.app/assignments/${params.id}`)
        },
        {
          path:'/asses/:id',
          element:<Assess></Assess>,
          loader:({params})=>fetch(`https://assign-ly-server.vercel.app/submittedAssignments/${params.id}`)
        }
      ]
    },
  ]);