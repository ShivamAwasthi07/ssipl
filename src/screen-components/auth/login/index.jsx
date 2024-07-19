import React, { Fragment } from "react";
// import { useNavigate } from "react-router-dom";
// import ROUTES from "./../../../constants/RouterConst";
import { useDispatch } from "react-redux";
import { loginAction } from "../../../services/action/auth";

const LoginScreen = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const onLogin = () => {
  //   let userType = "admin";

  //   let login_route;
  //   if (userType === "admin")
  //     login_route = `/${userType}/${ROUTES.CLIENT_MANAGEMENT}`;
  //   else if (userType === "client") login_route = ``;
  //   localStorage.setItem("userDet", userType);
  //   navigate(login_route);
  // };

  const onLogin = () => {
    dispatch(loginAction({}));
  }
  return (
    <Fragment>
      <div onClick={onLogin}>LoginScreen</div>
    </Fragment>
  );
};

export default LoginScreen;
