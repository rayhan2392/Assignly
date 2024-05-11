/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import auth from "../firbase/firebase.config";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    //create a new user with firbase authentication
    const createUser = (email,password)=>{
      return  createUserWithEmailAndPassword(auth,email,password);
    }
    //login an existing user with firebase authentication
    const logInUser =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
  const AuthInfo ={
    createUser,
    logInUser
  }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;