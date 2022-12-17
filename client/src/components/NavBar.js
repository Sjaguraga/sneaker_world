// import * as React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ShoppingBagSharpIcon from "@mui/icons-material/ShoppingBagSharp";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";
// import "./NavBar.css";

// function NavBar({ setUser, cartLength }) {
//   const navigate = useNavigate();
//   function handleLogoutClick() {
//     fetch("/logout", { method: "DELETE" }).then((r) => {
//       if (r.ok) {
//         setUser(null);
//       }
//     });
//   }
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static" sx={{ bgcolor: "#1b1b1b" }}>
//         <Toolbar>
//           <IconButton
//             size="small"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 60 }}
//             as={Link}
//             to="/"
//           >
//             <Typography sx={{ fontSize: 25, fontFamily: "Astro World" }}>
//               S N E A K E R W O R L D
//             </Typography>
//           </IconButton>
//           <IconButton
//             size="small"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ ml: -10 }}
//             as={Link}
//             to="/"
//           >
//             <Typography sx={{ fontSize: 12 }}>H O M E</Typography>
//           </IconButton>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             <IconButton
//               className="blink-1"
//               size="small"
//               edge="start"
//               color="inherit"
//               aria-label="menu"
//               sx={{ mr: 2 }}
//               as={Link}
//               to="/sneakers"
//             >
//               <Typography sx={{ fontSize: 12 }}>S N E A K E R S</Typography>
//             </IconButton>
//           </Typography>
//           <Typography>
//             <IconButton
//               size="small"
//               edge="start"
//               color="inherit"
//               aria-label="menu"
//               sx={{ mr: 2 }}
//               onClick={() => {
//                 navigate("cart");
//               }}
//             >
// <Badge color="primary" badgeContent={cartLength}>
//   <ShoppingBagSharpIcon />
// </Badge>
//             </IconButton>
//           </Typography>
//           <IconButton color="inherit" onClick={handleLogoutClick}>
//             <PersonSharpIcon />
//           </IconButton>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }
// export default NavBar;

import React from "react";

import { useNavigate } from "react-router-dom";

import "./NavBar.css";

const NavBar = ({ setUser, cartLength }) => {
  const navigate = useNavigate();
  const handleLogoutClick = () => {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  };

  return (
    <header className="main-header">
      <h1>SneakerWorld</h1>
      <nav className="nav">
        <ul>
          <li>
            <a href="/">H O M E</a>
          </li>
          <li>
            <a href="/sneakers">S N E A K E R S</a>
          </li>
          <li>
            <a href="">
              <IconButton
                size="small"
                edge="start"
                color="inherit"
                aria-label="menu"
                // sx={{ mr: 10 }}
                onClick={() => {
                  navigate("cart");
                }}
              >
                <Badge color="primary" badgeContent={cartLength}>
                  <ShoppingBagSharpIcon />
                </Badge>
              </IconButton>
            </a>
          </li>
          <li>
            <a href="">
              <PersonSharpIcon onClick={handleLogoutClick} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
