import React, { Fragment, Suspense } from "react";
// import React, { Fragment, Suspense, useEffect } from "react";
import AppHeader from "./header";
import AppSidebar from "./sidebar";
import AppLoader from "../suspense-loader";
// import { useNavigate } from "react-router-dom";
// import ROUTES from "../../constants/RouterConst";

const AppLayout = ({ children }) => {
  // const navigate = useNavigate();
  // const checkAuth = () => {
  //   let key = localStorage.getItem("user");
  //   if (!key) {
  //     localStorage.clear();
  //     navigate(`/${ROUTES.LOGIN}`);
  //   }
  // };

  // useEffect(() => {
  //   checkAuth();
  // }, [checkAuth]);
  return (
    <Fragment>
      <AppHeader />
      <Suspense fallback={<AppLoader />}>{children}</Suspense>
      <AppSidebar />
    </Fragment>
  );
};

export default AppLayout;
