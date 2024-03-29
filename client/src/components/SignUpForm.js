// import * as React from "react";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import CssBaseline from "@mui/material/CssBaseline";
// import TextField from "@mui/material/TextField";
// import Link from "@mui/material/Link";
// import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
// import LoginSharpIcon from "@mui/icons-material/LoginSharp";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import { createTheme, ThemeProvider } from "@mui/material/styles";

// function Copyright(props) {
//   return (
//     <Typography
//       variant="body2"
//       color="text.secondary"
//       align="center"
//       {...props}
//     >
//       {"Copyright © "}
//       <Link color="inherit">S N E A K E R W O R L D</Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

// const theme = createTheme({
//   typography: {
//     fontFamily: ["Press Start 2P", "cursive"].join(","),
//   },
// });

// function SignUpForm({ onLogin, showLogin, setShowLogin }) {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     let username = data.get("username");
//     let password = data.get("password");
//     let passwordConfirmation = data.get("passwordConfirmation");
//     let email = data.get("email");
//     let name = data.get("name");

//     console.log(name, username, password, passwordConfirmation, email);
//     fetch("/signup", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         username: username,
//         password: password,
//         password_confirmation: passwordConfirmation,
//         email: email,
//         name: name,
//       }),
//     }).then((r) => {
//       if (r.ok) {
//         r.json().then((user) => {
//           alert("success");
//           setShowLogin(true);
//         });
//       } else {
//         r.json().then((err) => {});
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
//                 Sign up
//               </Typography>
//               <Box
//                 component="form"
//                 noValidate
//                 onSubmit={handleSubmit}
//                 sx={{ mt: 3 }}
//               >
//                 <Grid container spacing={2}>
//                   <Grid item xs={12} sm={6}>
//                     <TextField
//                       sx={{ bgcolor: "white" }}
//                       autoComplete="name"
//                       name="name"
//                       required
//                       fullWidth
//                       id="name"
//                       label="name"
//                       autoFocus
//                     />
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     <TextField
//                       sx={{ bgcolor: "white" }}
//                       required
//                       fullWidth
//                       id="email"
//                       label="email"
//                       name="email"
//                       autoComplete="email"
//                     />
//                   </Grid>
//                   <Grid item xs={12}>
//                     <TextField
//                       sx={{ bgcolor: "white" }}
//                       required
//                       fullWidth
//                       id="username"
//                       label="username"
//                       name="username"
//                       autoComplete="username"
//                     />
//                   </Grid>
//                   <Grid item xs={12}>
//                     <TextField
//                       sx={{ bgcolor: "white" }}
//                       required
//                       fullWidth
//                       name="password"
//                       label="Password"
//                       type="password"
//                       id="password"
//                       autoComplete="new-password"
//                     />
//                   </Grid>
//                   <Grid item xs={12}>
//                     <TextField
//                       sx={{ bgcolor: "white" }}
//                       required
//                       fullWidth
//                       name="passwordConfirmation"
//                       label="Password Confirmation"
//                       type="password"
//                       id="passwordConfirmation"
//                       autoComplete="new-password"
//                     />
//                   </Grid>
//                 </Grid>
//                 <Button
//                   type="submit"
//                   fullWidth
//                   variant="contained"
//                   sx={{ mt: 3, mb: 2 }}
//                 >
//                   Sign Up
//                 </Button>
//                 <Grid container justifyContent="flex-end">
//                   <Grid item>
//                     <Link
//                       href="#"
//                       variant="body2"
//                       onClick={() => {
//                         setShowLogin(!showLogin);
//                       }}
//                     >
//                       Already have an account? Sign in
//                     </Link>
//                   </Grid>
//                 </Grid>
//               </Box>
//             </Box>
//             <Copyright sx={{ mt: 8, mb: 35 }} />
//           </Container>
//         </ThemeProvider>
//       </div>
//     </div>
//   );
// }
// export default SignUpForm;

import React from "react";

import { BsPersonCircle } from "react-icons/bs";
import { BiLock } from "react-icons/bi";

import classes from "./SignUpForm.module.css";

const SignUpForm = ({ onLogin, showLogin, setShowLogin }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let username = data.get("username");
    let password = data.get("password");
    let passwordConfirmation = data.get("passwordConfirmation");
    let email = data.get("email");
    let name = data.get("name");

    console.log(name, username, password, passwordConfirmation, email);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
        password_confirmation: passwordConfirmation,
        email: email,
        name: name,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          alert("success");
          setShowLogin(true);
        });
      } else {
        r.json().then((err) => {});
      }
    });
  };

  return (
    <div className={classes.signup}>
      <div className={classes.avatar}>
        <img
          src="https://i.pinimg.com/originals/79/b7/e6/79b7e6d289c04d7664d3b1163fcb0d2b.jpg"
          alt="dog"
        />
      </div>
      <h2>Sign Up</h2>
      <h3>It’s quick and easy.</h3>
      <form onSubmit={handleSubmit} className={classes["signup-form"]}>
        <div className={classes.textbox}>
          <input type="text" placeholder="Name" name="name" id="name" />
          <span>
            <BsPersonCircle />
          </span>
        </div>
        <div className={classes.textbox}>
          <input type="text" placeholder="Email" name="username" id="email" />
          <span>
            <BsPersonCircle />
          </span>
        </div>
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
        <div className={classes.textbox}>
          <input
            type="password"
            placeholder="Password Confirmation"
            name="passwordConfirmation"
            id="passwordConfirmation"
          />
          <span>
            <BiLock />
          </span>
        </div>
        <button type="submit">SIGNUP</button>
        <a href="#" onClick={() => setShowLogin(!showLogin)}>
          Already have an account? Sign in!
        </a>
      </form>
    </div>
  );
};

export default SignUpForm;
