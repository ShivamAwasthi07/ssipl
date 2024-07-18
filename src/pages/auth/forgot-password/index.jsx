import React, { lazy } from "react";
import AppLayout from "../../../components/layout";

const ForgotPasswordScreen = lazy(() =>
  import("../../../screen-components/auth/forgot-password/index")
);

const ForgotPassword = () => {
  return (
    <AppLayout>
      <ForgotPasswordScreen />
    </AppLayout>
  );
};

export default ForgotPassword;
