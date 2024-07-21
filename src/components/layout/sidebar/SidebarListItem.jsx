import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const SidebarListItem = ({ route }) => {
  const location = useLocation();
  return (
    <ListItem
      component={Link}
      to={route.route}
      className={location.pathname === route.route ? "theme-gradient" : ""}
      sx={{
        width: "90%",
        margin: "auto",
        borderRadius: "5px",
        marginBottom: "3px",
      }}
    >
      <ListItemIcon>{route.icon}</ListItemIcon>
      <ListItemText
        primary={route.name}
        sx={{
          color: location.pathname === route.route ? "#fafafa" : "#626262",
          "& .MuiTypography-root": {
            fontSize: "14px",
          },
        }}
      />
    </ListItem>
  );
};

export default SidebarListItem;
