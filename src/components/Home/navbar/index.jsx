import { Grid } from "@mui/material";
import { useState } from "react";
import IconTab from "./Icontab";
import Search from "./Search";
const Navbar = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Grid
        container
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Grid container spacing={2} justifyContent="flex-start">
                <Search />
              </Grid>
            </Grid>

            <Grid item xs={8}>
              <Grid container spacing={2} justifyContent="flex-end">
                <IconTab />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Navbar;
