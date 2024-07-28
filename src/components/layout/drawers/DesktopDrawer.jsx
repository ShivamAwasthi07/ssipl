import { Drawer } from "@mui/material";
import React from "react";

const DesktopDrawer = ({ width, drawer }) => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: "none", sm: "block" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: width,
          border: 'none'
        },
      }}
      open
    >
      {drawer}
    </Drawer>
  );
};

export default DesktopDrawer;
