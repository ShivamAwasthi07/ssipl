import { Box, Tab, Tabs } from "@mui/material";
import { styled } from "@mui/system";
import React, { useState } from "react";
import { COLORS } from "../../assets/colors";

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
    backgroundColor: COLORS.transparent,
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 40,
    width: "100%",
    backgroundColor: COLORS.theme,
  },
});

const CustomTab = styled(Tab)(({ theme }) => ({
  "&.Mui-selected": {
    color: COLORS.theme,
  },
  "&": {
    color: "black",
  },
  "&:hover": {
    backgroundColor: COLORS.white_text,
    borderRadius: "5px",
  },
}));

const CustomTabGroup = ({ components = [], tabNames = [] }) => {
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
        {tabNames?.map((tabName) => (
          <CustomTab label={tabName} id="tab-0" aria-controls="tabpanel-0" />
        ))}
      </StyledTabs>
      <Box p={2}>{components[selectedTab]}</Box>
    </Box>
  );
};

export default CustomTabGroup;
