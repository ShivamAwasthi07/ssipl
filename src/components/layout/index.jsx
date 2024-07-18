import React, { Fragment } from "react";
import AppHeader from "./header";
import AppSidebar from "./sidebar";

const AppLayout = ({ children }) => {
  return (
    <Fragment>
      <AppHeader />
      {children}
      <AppSidebar />
    </Fragment>
  );
};

export default AppLayout;
