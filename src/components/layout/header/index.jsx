import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React, { Fragment, useState } from "react";
import {
  Menu as MenuIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material";
import SettingPopup from "./SettingPopup";

const AppHeader = ({ drawerWidth, headerTitle, handleDrawerToggle, headHeight }) => {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const handleSettingsOpen = () => {
    setSettingsOpen(true);
  };

  const handleSettingsClose = () => {
    setSettingsOpen(false);
  };
  return (
    <Fragment>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          minHeight: headHeight
        }}
        className="theme-gradient"
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            {headerTitle}
          </Typography>
          <IconButton color="inherit" edge="end" onClick={handleSettingsOpen}>
            <SettingsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <SettingPopup onClose={handleSettingsClose} open={settingsOpen} />
    </Fragment>
  );
};

export default AppHeader;
