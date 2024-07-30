import React, { lazy } from "react";
import AppLayout from "../../../components/layout";

const AllJobsScreen = lazy(() =>
  import("../../../screen-components/common/all-jobs/index")
);

const AllJobs = () => {
  return (
    <AppLayout searchable={true}>
      <AllJobsScreen />
    </AppLayout>
  );
};

export default AllJobs;
