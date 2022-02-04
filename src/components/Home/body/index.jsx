import React from "react";
// import LeftSideBar from "./leftsidebar/index";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const Body = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item sx={{ width: "225px" }}>
          <div style={{ border: "1px solid red" }}>left</div>
        </Grid>
        <Grid item xs={12} md={8} sm={11}>
          <div style={{ border: "1px solid red" }}>center</div>
        </Grid>
        <Grid item sx={{ width: "300px" }}>
          <div style={{ border: "1px solid red" }}>right</div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Body;
