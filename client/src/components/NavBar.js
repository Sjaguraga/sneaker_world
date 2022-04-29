import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

function NavBar({ setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            as={Link}
            to="/"
          >
            <HomeOutlinedIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <IconButton
              className="blink-1"
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              as={Link}
              to="/market"
            >
              <ShoppingBagIcon />
            </IconButton>
          </Typography>
          <IconButton color="inherit">
            <ShoppingCartOutlinedIcon />
          </IconButton>
          <IconButton color="inherit" onClick={handleLogoutClick}>
            <LogoutOutlinedIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default NavBar;
