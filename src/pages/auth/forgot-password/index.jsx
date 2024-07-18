import React, { lazy, Suspense } from "react";
import AppLoader from "../../../components/suspense-loader";

const ForgotPasswordScreen = lazy(() =>
  import("../../../screen-components/auth/forgot-password/index")
);

const ForgotPassword = () => {
  return (
    <Suspense fallback={<AppLoader />}>
      <ForgotPasswordScreen />
    </Suspense>
  );
};

export default ForgotPassword;
