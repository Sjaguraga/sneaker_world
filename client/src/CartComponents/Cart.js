import React from "react";
import { useState, useEffect } from "react";

import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DataList from "./DataList";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { useNavigate } from "react-router-dom";
const theme = createTheme({
  typography: {
    fontFamily: ["Press Start 2P", "cursive"].join(","),
  },
});

function Cart({ user, onCheckOutClick, setCartLength }) {
  const [cartItems, setCartItems] = useState([]);
  const [cartSum, setCartSum] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`/cart/${user.id}`)
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        setCartItems(data);
      });
  }, []);

  useEffect(() => {
    setCartSum(getCartTotal(cartItems));
    setCartLength(cartItems.length);
  }, [cartItems]);

  const handleDeleteCartItem = (sneaker_id) => {
    fetch(`/user_items/${sneaker_id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCartItems(cartItems.filter((el) => el.id !== data.id));
        alert("sneaker removed!", {
          position: "top-center",
          autoClose: 600,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  function getCartTotal(arr) {
    let Arr = [];
    arr.map((el) => Arr.push(el.sneaker.price));
    const sum = Arr.reduce((partialSum, a) => partialSum + a, 0);
    return sum;
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />

      <Container
        disableGutters
        maxWidth="large"
        component="main"
        sx={{ pt: 4, pb: 4 }}
      >
        <Typography
          component="h2"
          variant="h3"
          align="center"
          color="#3794ff"
          gutterbottom
        >
          Sneakers
        </Typography>
        <Grid align="center" sx={{ mt: 9 }}>
          <DataList
            sneakerCartList={cartItems}
            handleDeleteCartItem={handleDeleteCartItem}
          />
        </Grid>
      </Container>

      <Container maxWidth="large" component="main"></Container>
      {/* Footer */}
      <Container
        maxWidth="large"
        component="footer"
        sx={{
          py: [3, 6],
        }}
      >
        <Grid container item justifyContent="center">
          Total: ${cartSum}
        </Grid>
        <Grid container item justifyContent="center" sx={{ mt: 2 }}>
          <Button onClick={() => {}} variant="contained">
            Checkout
          </Button>
        </Grid>
      </Container>
      <Container
        sx={{
          mt: 22,
        }}
      ></Container>
      {/* End footer */}
    </ThemeProvider>
  );
}
export default Cart;
