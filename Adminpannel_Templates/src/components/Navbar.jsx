import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Admin Panel</Typography>
        <Typography sx={{ color: "black" }}>Wooden Chair</Typography>
        <Typography sx={{ color: "black", textAlign: "center" }}>
  Product Name
</Typography>


      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

