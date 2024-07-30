import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import ClientDetail from "./report-elements/ClientDetail";
import OutwardReport from "./report-elements/OutwardReport";
import InwardReport from "./report-elements/InwardReport";

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

const JobDetail = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box>
      <Tabs
        value={selectedTab}
        onChange={handleChange}
        aria-label="job detail tabs"
      >
        <Tab label="Details" id="tab-0" aria-controls="tabpanel-0" />
        <Tab label="Inward" id="tab-1" aria-controls="tabpanel-1" />
        <Tab label="Outward" id="tab-2" aria-controls="tabpanel-2" />
      </Tabs>
      <TabPanel value={selectedTab} index={0}>
        <ClientDetail />
      </TabPanel>
      <TabPanel value={selectedTab} index={1}>
        <InwardReport />
      </TabPanel>
      <TabPanel value={selectedTab} index={2}>
        <OutwardReport />
      </TabPanel>
    </Box>
  );
};

export default JobDetail;
