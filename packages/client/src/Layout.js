import { Container, Grid } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import { Navigation } from "./components/Navigation";

export const Layout = () => (
  <Container>
    <Grid container direction="column">
      <Grid item>
        <Navigation />
      </Grid>
      <Grid item style={{ padding: "16" }}>
        <Outlet />
      </Grid>
    </Grid>
  </Container>
);
