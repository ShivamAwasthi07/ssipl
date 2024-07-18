import React, { lazy } from "react";
import AppLayout from "../../../components/layout";

const WarehouseManagementScreen = lazy(() =>
  import("../../../screen-components/admin/warehouse-management/index")
);

const WarehouseManagement = () => {
  return (
    <AppLayout>
      <WarehouseManagementScreen />
    </AppLayout>
  );
};

export default WarehouseManagement;
