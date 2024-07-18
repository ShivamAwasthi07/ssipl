import React, { lazy } from "react";
import ROUTES from "../../../constants/RouterConst";
import AppLayout from "../../../components/layout";

const ClientManagementScreen = lazy(() =>
  import("../../../screen-components/admin/client-management/index")
);

const ClientManagement = () => {
  return (
    <AppLayout>
      <ClientManagementScreen />
    </AppLayout>
  );
};

export default ClientManagement;
