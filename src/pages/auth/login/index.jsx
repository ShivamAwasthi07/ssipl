import React, { lazy, Suspense } from "react";
import AppLoader from "../../../components/suspense-loader";

const LoginScreen = lazy(() =>
  import("../../../screen-components/auth/login/index")
);

const Login = () => {
  return (
    <Suspense fallback={<AppLoader />}>
      <LoginScreen />
    </Suspense>
  );
};

export default Login;
