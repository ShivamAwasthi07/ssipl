import React, { lazy } from "react";
import AppLayout from "../../../components/layout";

const ClientManagementScreen = lazy(() =>
  import("../../../screen-components/admin/client-management/index")
);

const ClientManagement = () => {
  return (
    <AppLayout searchable={true}>
      <ClientManagementScreen />
    </AppLayout>
  );
};

export default ClientManagement;
