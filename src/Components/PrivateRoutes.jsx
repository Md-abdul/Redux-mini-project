import React from "react";

import { useSelector } from "react-redux";
import {Login} from '../Pages/Login'
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoutes = ({children}) => {

  const auth = useSelector((store) => store.authReducer.isAuth);
  const location = useLocation()
  // console.log(location)

  return  auth ? children : <Navigate state={location.pathname} to={'/login'}/>
};


// !auth?<Login/>:children