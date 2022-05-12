import * as React from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
const theme = createTheme();

export default function Cart({
  user,
  cart,
  setCartLength,
  deleteItem,
  checkoutHandler,
}) {
  const [cartTotal, setCartTotal] = React.useState(0);
  const navigate = useNavigate();

  let cartList = cart.map((item) => {
    return (
      <ListItem>
        <ListItemAvatar>
          <Avatar src={item.sneaker.image} />
        </ListItemAvatar>
        <ListItemText primary={item.sneaker.name} />
        <ListItemText align="right" secondary={`$${item.sneaker.price}.00`} />
        <IconButton
          onClick={() => {
            deleteItem(item.id);
          }}
        >
          <DeleteIcon />
        </IconButton>
      </ListItem>
    );
  });
  //update cart total when cart changes
  React.useEffect(() => {
    setCartTotal(getSum(cart));
    setCartLength(cart.length);
  }, [cart]);

  //get total of cart items fxn
  const getSum = (arr) => {
    let newArr = [];
    arr.map((el) => newArr.push(el.sneaker.price));
    const sum = newArr.reduce((b, a) => b + a, 0);
    return sum;
  };

  return (
    <div className="checkout-container">
      <div className="glass-checkout">
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
            <Typography>C A R T </Typography>
            <Paper
              variant="outlined"
              sx={{ my: { xs: 3, md: 3 }, p: { xs: 2, md: 3 } }}
            >
              <List>{cartList}</List>
              <Typography>Total: ${cartTotal}.00</Typography>
              <Button
                sx={{ mt: 1 }}
                variant="contained"
                onClick={() => {
                  checkoutHandler(cartTotal);
                  navigate("/checkout");
                }}
              >
                Checkout!
              </Button>
            </Paper>
          </Container>
        </ThemeProvider>
      </div>
    </div>
  );
}
