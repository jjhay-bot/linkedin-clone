import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Tab } from "@mui/material";

export default function TextFieldSizes() {
  return (
    <>
      <Tab icon={<LinkedInIcon />} label="logo" />

      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <ManageSearchIcon />
                </InputAdornment>
              ),
            }}
            label="Search"
            id="outlined-size-small"
            defaultValue="Small"
            // size="small"
            // variant="filled"
          />
        </div>
      </Box>
    </>
  );
}
