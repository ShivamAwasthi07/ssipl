import {
  AppBar,
  Avatar,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { Fragment, useState } from "react";

import SettingPopup from "./SettingPopup";
import { ICONS } from "../../../assets/icons";
import { COLORS } from "../../../assets/colors";
import SearchBar from "../../searchbar";

const AppHeader = ({
  drawerWidth,
  headerTitle,
  handleDrawerToggle,
  headHeight,
  isSearchable = false,
}) => {
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
          backgroundColor: "transparent",
          boxShadow: "none",
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
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, color: COLORS.heading }}
          >
            Hi, {userName}
          </Typography>
          <Stack direction="row" spacing={2.5}>
            {isSearchable && <SearchBar onChange={(value) => console.log(value)}/>}
            <Avatar
              className="avatar"
              variant="rounded"
              style={{
                color: COLORS.warning,
                backgroundColor: COLORS.warning_secondary,
              }}
            >
              {ICONS.notification}
            </Avatar>
            <Avatar
              className="avatar"
              onClick={handleSettingsOpen}
              variant="rounded"
              src={"https://www.w3schools.com/howto/img_avatar.png"}
            >
              SA
            </Avatar>
          </Stack>
        </Toolbar>
      </AppBar>
      <SettingPopup onClose={handleSettingsClose} open={settingsOpen} />
    </Fragment>
  );
};

export default AppHeader;
