import { Box, List, Toolbar } from "@mui/material";
import React, { Fragment } from "react";
import MobileDrawer from "../drawers/MobileDrawer";
import DesktopDrawer from "../drawers/DesktopDrawer";
import SidebarListItem from "./SidebarListItem";
import SITE_LOGO from "../../../assets/logos/logo.png";
import { ADMIN_ROUTES } from "../../../routes/paths/adminRoutes";
import StaticButtons from "./StaticButtons";

const AppSidebar = ({
  drawerWidth,
  handleDrawerToggle,
  mobileOpen,
  headHeight,
}) => {
  const drawer = (
    <div>
      <Toolbar>
        <img
          src={SITE_LOGO}
          height={120}
          style={{ margin: "auto" }}
          alt="LOGO"
        />
      </Toolbar>
      <List sx={{ height: "60vh", overflow: "scroll" }}>
        {ADMIN_ROUTES.map((route, index) => (
          <SidebarListItem route={route} key={route.route} navClass={`side-${index}`}/>
        ))}
      </List>
      <StaticButtons />
    </div>
  );
  return (
    <Fragment>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <MobileDrawer
          drawer={drawer}
          width={drawerWidth}
          open={mobileOpen}
          toggle={handleDrawerToggle}
        />
        <DesktopDrawer width={drawerWidth} drawer={drawer} />
      </Box>
    </Fragment>
  );
};

export default AppSidebar;
