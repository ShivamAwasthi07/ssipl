import React, { Suspense, useState } from "react";
import AppHeader from "./header";
import AppSidebar from "./sidebar";
import AppLoader from "../suspense-loader";
import { Toolbar, Box } from "@mui/material";
import { drawerWidth, headHeight } from "../../constants/numConstant";

const AppLayout = ({ children, headerTitle = "" }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
      <Box sx={{ display: "flex" }}>
        <AppHeader
          headerTitle={headerTitle}
          handleDrawerToggle={handleDrawerToggle}
          drawerWidth={drawerWidth}
          headHeight={headHeight}
        />
        <AppSidebar
          handleDrawerToggle={handleDrawerToggle}
          drawerWidth={drawerWidth}
          mobileOpen={mobileOpen}
          headHeight={headHeight}
        />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <Suspense fallback={<AppLoader />}>{children}</Suspense>
        </Box>
      </Box>
  );
};

export default AppLayout;
