import React from 'react'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    //get user info from sessionstorage
    const userJson = sessionStorage.getItem("user");
    const userObj = JSON.parse(userJson)

    //checking auth
    const auth = userObj?._id;
    
  return auth ? children : <Navigate to ="/"/>
}

export default PrivateRoute
