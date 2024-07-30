import React, { lazy } from "react";
import AppLayout from "../../../components/layout";

const JobDetailScreen = lazy(() =>
  import("../../../screen-components/common/job-detail/index")
);

const JobDetailReport = () => {
  return (
    <AppLayout>
      <JobDetailScreen />
    </AppLayout>
  );
};

export default JobDetailReport;
