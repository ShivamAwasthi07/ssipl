import React, { lazy } from "react";
import AppLayout from "../../../components/layout";

const LoginScreen = lazy(() =>
  import("../../../screen-components/auth/forgot-password/index")
);

const Login = () => {
  return (
    <AppLayout>
      <LoginScreen />
    </AppLayout>
  );
};

export default Login;
