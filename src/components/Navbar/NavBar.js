import React from "react";
import AppBar from "@mui/material/AppBar";
import { Typography } from "@mui/material";

function NavBar() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "green",
        display: { md: "flex", justifyContent: "center", alignItems : 'center' },
      }}
    >
      <Typography
        variant="h3"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
          ":hover" : {
            color : 'white'
          }
        }}
      >
        MyReads
      </Typography>
    </AppBar>
  );
}

export default NavBar;
