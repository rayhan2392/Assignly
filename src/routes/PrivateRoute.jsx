/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { Navigate, useLocation } from "react-router";
import useAuth from "../customHooks/useAuth";


const PrivateRoute = ({children}) => {
    const {user} = useAuth();
    const location = useLocation();
    if(user){
        return <div>{children}</div>
    }
    return  <Navigate to='/login'  state={location?.pathname || '/'} ></Navigate>
};

export default PrivateRoute;