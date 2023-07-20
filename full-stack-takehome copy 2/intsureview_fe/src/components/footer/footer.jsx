import React from "react";
import { Container, Typography } from "@mui/material";
import "./footer.css";

export default function Footer() {
  return (
    <footer>
      <Container maxWidth="lg" className="footer">
        <Typography color="textPrimary">
          Created by Robert Robinson using MaterialUI
        </Typography>
      </Container>
    </footer>
  );
}
