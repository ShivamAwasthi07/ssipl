import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import NoPageFound from "../components/NoPageFound";
import ROUTES from "../constants/RouterConst";

const SignupScreen = lazy(() => import("../pages/auth/signup/index"));
const LoginScreen = lazy(() => import("../pages/auth/login/index"));
const ForgotPassword = lazy(() =>
  import("../pages/auth/forgot-password/index")
);
const ClientManagement = lazy(() =>
  import("../pages/admin/client-management/index")
);
const WareHouseManagement = lazy(() =>
  import("../pages/admin/warehouse-management/index")
);

const Router = () => {

  return (
    <Suspense fallback={<div>Loading.....</div>}>
      <Routes>
        <Route path={`/${ROUTES.LOGIN}`} element={<LoginScreen />} />
        <Route
          path={`/${ROUTES.FORGOT_PASSWORD}`}
          element={<ForgotPassword />}
        />
        <Route path={`/${ROUTES.SIGNUP}`} element={<SignupScreen />} />

        {/* Admin Routes */}
        <Route
          path={`/${ROUTES.CLIENT_MANAGEMENT}`}
          element={<ClientManagement />}
        />
        <Route
          path={`/${ROUTES.WAREHOUSE_MANAGEMENT}`}
          element={<WareHouseManagement />}
        />

        <Route path="*" element={<NoPageFound />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
