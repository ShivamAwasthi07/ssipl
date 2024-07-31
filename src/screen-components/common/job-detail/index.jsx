import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import { styled } from "@mui/system"
import ClientDetail from "./report-elements/ClientDetail";
import OutwardReport from "./report-elements/OutwardReport";
import InwardReport from "./report-elements/InwardReport";
import { COLORS } from "../../../assets/colors";

const components = [<ClientDetail />, <InwardReport />, <OutwardReport />];

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  color: COLORS.theme,
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 40,
    width: "100%",
    backgroundColor: COLORS.theme,
  },
});

const JobDetail = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box>
      <StyledTabs
        value={selectedTab}
        onChange={handleChange}
        aria-label="job detail tabs"
      >
        <Tab sx={{color: 'red'}} label="Details" id="tab-0" aria-controls="tabpanel-0" />
        <Tab label="Inward" id="tab-1" aria-controls="tabpanel-1" />
        <Tab label="Outward" id="tab-2" aria-controls="tabpanel-2" />
      </StyledTabs>
      <Box p={2}>{components[selectedTab]}</Box>
    </Box>
  );
};

export default JobDetail;
