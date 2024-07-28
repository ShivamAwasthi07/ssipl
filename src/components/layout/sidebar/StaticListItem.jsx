import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { listItemStyles } from "./styles";
import { Link } from "react-router-dom";
import { COLORS } from "../../../assets/colors";

const StaticListItem = ({ route, onClick }) => {
  return (
    <ListItem component={Link} sx={listItemStyles} onClick={onClick} className={route?.class}>
      <ListItemIcon>{route.icon}</ListItemIcon>
      <ListItemText
        primary={route.name}
        sx={{
          color: COLORS.text,
          "& .MuiTypography-root": {
            fontSize: "14px",
          },
        }}
      />
    </ListItem>
  );
};

export default StaticListItem;
