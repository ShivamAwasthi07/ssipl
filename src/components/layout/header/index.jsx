import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React, { Fragment, useState } from "react";

import SettingPopup from "./SettingPopup";
import { ICONS } from "../../../assets/icons";
import { COLORS } from "../../../assets/colors";

const AppHeader = ({ drawerWidth, headerTitle, handleDrawerToggle, headHeight }) => {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const handleSettingsOpen = () => {
    setSettingsOpen(true);
  };

  const handleSettingsClose = () => {
    setSettingsOpen(false);
  };

  const userName = "Krishna";

  return (
    <Fragment>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          minHeight: headHeight,
          backgroundColor: 'rgba(235, 119, 58, 0.08)',
          boxShadow: 'none'
        }}
      >
        <Toolbar>
          <IconButton
            color="black"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            {ICONS.hamburger}
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, color: COLORS.heading }}>
            Hi, {userName}
          </Typography>
          <IconButton color="black" edge="end" onClick={handleSettingsOpen} className="settings-button">
            {ICONS.settings}
          </IconButton>
        </Toolbar>
      </AppBar>
      <SettingPopup onClose={handleSettingsClose} open={settingsOpen} />
    </Fragment>
  );
};

export default AppHeader;
