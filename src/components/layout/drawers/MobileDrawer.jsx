import { Drawer } from "@mui/material";
import React from "react";

const MobileDrawer = ({ open, toggle, drawer, width }) => {
  return (
    <Drawer
      variant="temporary"
      open={open}
      onClose={toggle}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        display: { xs: "block", sm: "none" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: width,
        },
      }}
    >
      {drawer}
    </Drawer>
  );
};

export default MobileDrawer;
