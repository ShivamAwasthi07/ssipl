import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { COLORS } from "../../../assets/colors";
import { listItemStyles } from "./styles";

const SidebarListItem = ({ route, navClass = "" }) => {
  const location = useLocation();
  return (
    <ListItem
      component={Link}
      to={route.route}
      className={`${navClass} ${
        location.pathname === route.route ? "theme-gradient" : ""
      }`}
      sx={listItemStyles}
    >
      <ListItemIcon>{route.icon}</ListItemIcon>
      <ListItemText
        primary={route.name}
        sx={{
          color:
            COLORS[location.pathname === route.route ? "white_text" : "text"],
          "& .MuiTypography-root": {
            fontSize: "14px",
          },
        }}
      />
    </ListItem>
  );
};

export default SidebarListItem;
