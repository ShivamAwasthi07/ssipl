import React from "react";
import { Routes, Route } from "react-router-dom";
import NoPageFound from "../components/NoPageFound";
import ROUTES from "../constants/RouterConst";
import Login from "../pages/auth/login";
import ForgotPassword from "../pages/auth/forgot-password";
import ClientManagement from "../pages/admin/client-management";
import WarehouseManagement from "../pages/admin/warehouse-management";
import UserManagement from "../pages/admin/user-management";

const Router = () => {
  return (
    <Routes>
      <Route path={`/${ROUTES.LOGIN}`} element={<Login />} />
      <Route path={`/${ROUTES.FORGOT_PASSWORD}`} element={<ForgotPassword />} />

      {/* Admin Routes */}
      <Route
        path={`/${ROUTES.CLIENT_MANAGEMENT}`}
        element={<ClientManagement />}
      />
      <Route path={`/${ROUTES.USER_MANAGEMENT}`} element={<UserManagement />} />
      <Route
        path={`/${ROUTES.WAREHOUSE_MANAGEMENT}`}
        element={<WarehouseManagement />}
      />

      <Route path="*" element={<NoPageFound />} />
    </Routes>
  );
};

export default Router;
