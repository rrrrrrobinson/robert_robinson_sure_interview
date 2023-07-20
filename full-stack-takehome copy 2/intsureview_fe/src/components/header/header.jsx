import React from "react";

import { AppBar, Typography, Toolbar } from "@mui/material";

export default function Header() {
  return (
    <AppBar position="fixed">
      <Toolbar>
        {/* add a nice burger icon to the header */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/1725/1725669.png"
          style={{ height: "50px" }}
          alt="a black burger outline icon with no background"
        ></img>
        <Typography style={{ marginLeft: "20px" }}>
          The Burger Business
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
