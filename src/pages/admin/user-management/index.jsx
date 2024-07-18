import React, { lazy } from "react";
import AppLayout from "../../../components/layout";

const UserManagementScreen = lazy(() =>
  import("../../../screen-components/admin/user-management/index")
);

const UserManagement = () => {
  return (
    <AppLayout>
      <UserManagementScreen />
    </AppLayout>
  );
};

export default UserManagement;
