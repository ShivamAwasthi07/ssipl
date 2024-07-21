import { Box, Divider, List, Toolbar } from "@mui/material";
import React, { Fragment } from "react";
import MobileDrawer from "../drawers/MobileDrawer";
import DesktopDrawer from "../drawers/DesktopDrawer";
import SidebarListItem from "./SidebarListItem";
import SITE_LOGO from "../../../assets/logos/logo.png";
import { ADMIN_ROUTES } from "../../../routes/paths/adminRoutes";

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
          height={headHeight}
          style={{ margin: "auto" }}
          alt="LOGO"
        />
      </Toolbar>
      <Divider />
      <List>
        {ADMIN_ROUTES.map((route) => (
          <SidebarListItem route={route} key={route.route}/>
        ))}
      </List>
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
