import React from 'react'
import { useNavigate } from 'react-router-dom'
import ROUTES from "./../../../constants/RouterConst"

const LoginScreen = () => {
  const navigate = useNavigate();
  const onLogin = () => {
    let userType = 'admin';
    // let userType = 'client';

    let login_route;
    if(userType === 'admin') login_route = `/${userType}/${ROUTES.CLIENT_MANAGEMENT}`;
    else if(userType === 'client') login_route = `/admin/${ROUTES.USER_MANAGEMENT}`;
    localStorage.setItem("userDet", userType);
    navigate(login_route);
  }
  return (
    <div onClick={onLogin}>LoginScreen</div>
  )
}

export default LoginScreen