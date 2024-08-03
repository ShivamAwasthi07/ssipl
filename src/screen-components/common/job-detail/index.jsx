import React from "react";
import ClientDetail from "./report-elements/ClientDetail";
import OutwardReport from "./report-elements/OutwardReport";
import InwardReport from "./report-elements/InwardReport";
import CustomTabGroup from "../../../components/tabs-group";


const JobDetail = () => {
  
  const components = [<ClientDetail />, <InwardReport />, <OutwardReport />];
  const tabNames = ["Details", "Inward", "Outward"];
  
  return <CustomTabGroup components={components} tabNames={tabNames} />;
};

export default JobDetail;
