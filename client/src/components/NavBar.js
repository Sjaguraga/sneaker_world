import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";
import "./NavBar.css";

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
      <AppBar position="static" sx={{ bgcolor: "#1b1b1b" }}>
        <Toolbar>
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            as={Link}
            to="/"
          >
            <div className="nav-titles">H O M E</div>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <IconButton
              className="blink-1"
              size="small"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              as={Link}
              to="/sneakers"
            >
              <div className="nav-titles">S N E A K E R S</div>
            </IconButton>
          </Typography>
          <Typography>
            <IconButton
              className="blink-1"
              size="small"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              as={Link}
              to="/checkout"
            >
              <div className="nav-titles">C H E C K O U T</div>
            </IconButton>
          </Typography>
          <IconButton color="inherit" onClick={handleLogoutClick}>
            <PersonSharpIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default NavBar;
