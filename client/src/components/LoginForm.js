// import React from "react";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import CssBaseline from "@mui/material/CssBaseline";
// import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
// import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
import LoginSharpIcon from "@mui/icons-material/LoginSharp";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import "./LoginForm.css";

// function Copyright(props) {
//   return (
//     <Typography
//       variant="body2"
//       color="text.secondary"
//       align="center"
//       {...props}
//     >
//       {"Copyright © "}
//       <Link color="inherit" href="https://mui.com/">
//         S N E A K E R W O R L D
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

// const theme = createTheme();

// function LoginForm({ onLogin, showLogin, setShowLogin, getCart }) {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);

//     let username = data.get("username");
//     let password = data.get("password");
//     console.log(username, password);
//     fetch("/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ username, password }),
//     }).then((r) => {
//       if (r.ok) {
//         r.json().then((user) => {
//           onLogin(user);
//           getCart();
//         });
//       } else {
//         r.json().then((err) => console.log(err.errors));
//       }
//     });
//   };

//   return (
//     <div className="login-container">
//       <div className="glass-login">
//         <ThemeProvider theme={theme}>
//           <Container component="main" maxWidth="xs">
//             <CssBaseline />
//             <Box
//               sx={{
//                 marginTop: 8,
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//               }}
//             >
//               <Avatar sx={{ m: 1, bgcolor: "info.main" }}>
//                 <LoginSharpIcon />
//               </Avatar>
//               <Typography component="h1" variant="h5">
//                 Sign in
//               </Typography>
//               <Box
//                 component="form"
//                 onSubmit={handleSubmit}
//                 noValidate
//                 sx={{ mt: 1 }}
//               >
//                 <TextField
//                   sx={{ bgcolor: "white" }}
//                   margin="normal"
//                   required
//                   fullWidth
//                   id="username"
//                   label="username"
//                   name="username"
//                   autoComplete="username"
//                   autoFocus
//                 />
//                 <TextField
//                   sx={{ bgcolor: "white" }}
//                   margin="normal"
//                   required
//                   fullWidth
//                   name="password"
//                   label="Password"
//                   type="password"
//                   id="password"
//                   autoComplete="current-password"
//                 />
//                 <FormControlLabel
//                   control={<Checkbox value="remember" color="primary" />}
//                   label="Remember me"
//                 />
//                 <Button
//                   type="submit"
//                   fullWidth
//                   variant="contained"
//                   sx={{ mt: 3, mb: 2 }}
//                 >
//                   Sign In
//                 </Button>
//                 <Grid container>
//                   <Grid item xs></Grid>
//                   <Grid item>
//                     <Link
//                       href="#"
//                       variant="body2"
//                       onClick={() => {
//                         setShowLogin(!showLogin);
//                       }}
//                     >
//                       {"Don't have an account? Sign Up"}
//                     </Link>
//                   </Grid>
//                 </Grid>
//               </Box>
//             </Box>
//             <Copyright sx={{ mt: 8, mb: 25 }} />
//           </Container>
//         </ThemeProvider>
//       </div>
//     </div>
//   );
// }

// export default LoginForm;

import React from "react";

import { BsPersonCircle } from "react-icons/bs";
import { BiLock } from "react-icons/bi";

import classes from "./LoginForm.module.css";

const Login = ({ onLogin, showLogin, setShowLogin, getCart }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    let username = data.get("username");
    let password = data.get("password");
    console.log(username, password);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          onLogin(user);
          getCart();
        });
      } else {
        r.json().then((err) => console.log(err.errors));
      }
    });
  };

  return (
    <div className={classes.login}>
      <div className={classes.avatar}>
        <img
          src="https://i.pinimg.com/originals/79/b7/e6/79b7e6d289c04d7664d3b1163fcb0d2b.jpg"
          alt="dog"
        />
      </div>
      <h2>Login</h2>
      <h3>Welcome back</h3>
      <form onSubmit={handleSubmit} className={classes["login-form"]}>
        <div className={classes.textbox}>
          <input
            type="text"
            placeholder="Username"
            name="username"
            id="username"
          />
          <span>
            <BsPersonCircle />
          </span>
        </div>
        <div className={classes.textbox}>
          <input
            type="password"
            placeholder="Password"
            name="password"
            id="password"
          />
          <span>
            <BiLock />
          </span>
        </div>
        <button type="submit">LOGIN</button>
        <a href="#" onClick={() => setShowLogin(!showLogin)}>
          Dont have an account? Sign up!
        </a>
      </form>
    </div>
  );
};

export default Login;
