/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { useState,useEffect } from "react";
import {auth} from '../../firebase/firebase.js'
import { onAuthStateChanged } from "firebase/auth";

const AuthContext=React.createContext();

export function useAuth(){
    return useContext(AuthContext)
}

export const AuthProvider=({children})=>{
  const[currentUser,setCurrentUser]=useState(null);
  const [userLoggedIn,setUserLoggedIn]=useState(null);
  const [loading,setLoading]=useState(false);

useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,initializeUser);
    return unsubscribe;
})
 
async function initializeUser(user){
    setLoading(true)
    if(user){
    setCurrentUser({...user})
    setUserLoggedIn(true)    
}
else{
    setCurrentUser(null)
    setUserLoggedIn(false)
}
setLoading(false)
}
const value={
    currentUser,
    userLoggedIn,
    loading
}
return (
    <AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>
)
}