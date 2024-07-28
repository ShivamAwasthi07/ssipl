import { List } from "@mui/material";
import React from "react";
import StaticListItem from "./StaticListItem";
import { ICONS } from "../../../assets/icons";

const logoutObj = {
  icon: ICONS.logout,
  name: "Logout",
  class: "logout-button"
};

const helpObj = {
  icon: ICONS.help,
  name: "Help",
  class: "help-button"
};

const StaticButtons = () => {
  return (
    <List>
      <StaticListItem route={helpObj} key={helpObj.name}/>
      <StaticListItem route={logoutObj} key={logoutObj.name} />
    </List>
  );
};

export default StaticButtons;
