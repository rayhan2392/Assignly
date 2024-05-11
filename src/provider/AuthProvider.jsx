/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import auth from "../firbase/firebase.config";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const createUser = (email,password)=>{
      return  createUserWithEmailAndPassword(auth,email,password);
    }
  const AuthInfo ={
    createUser,
  }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;