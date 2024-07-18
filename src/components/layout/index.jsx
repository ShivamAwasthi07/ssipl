import React, { Fragment, Suspense } from "react";
import AppHeader from "./header";
import AppSidebar from "./sidebar";
import AppLoader from "../suspense-loader";

const AppLayout = ({ children }) => {
  return (
    <Fragment>
      <AppHeader />
      <Suspense fallback={<AppLoader />}>{children}</Suspense>
      <AppSidebar />
    </Fragment>
  );
};

export default AppLayout;
