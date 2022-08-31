import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ImageListItem from "@mui/material/ImageListItem";
//import Typography from "@mui/material/Typography";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#2A303F" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <ImageListItem sx={{ height: "50px !important", mb: "10px" }}>
              <img
                style={{ borderRadius: "20px 20px 0 0" }}
                alt="A"
                src="/images/white-logo.svg"
              />
            </ImageListItem>
            {/* <Typography
              variant="p"
              color={"#fff"}
              sx={{
                fontWeight: "bold",
                fontSize: "20px",
                ml: "20px"
              }}
            >
              DP
            </Typography> */}
          </IconButton>

          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
