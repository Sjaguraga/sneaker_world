import * as React from "react";
import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";

export default function Review({
  checkoutSum,
  cart,
  firstName,
  lastName,
  address1,
  address2,
  city,
  state,
  zip,
  country,
  cardName,
  cardNumber,
  expiration,
  cvv,
}) {
  // const [] = useState

  const addresses = [`${address1}  ${address2}`, state, city, zip, country];
  const payments = [
    { name: "Card type", detail: "Visa" },
    { name: "Card holder", detail: cardName },
    { name: "Card number", detail: `xxxx-xxxx-xxxx-${cardNumber.slice(-4)}` },
    { name: "Expiry date", detail: expiration },
  ];

  const products = cart;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.sneaker.name} sx={{ py: 1, px: 0 }}>
            <ListItemText
              primary={product.sneaker.name}
              // secondary={product.sneaker.description}
            />
            <Typography variant="body2">${product.sneaker.price}.00</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            ${checkoutSum}.00
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>{`${firstName} ${lastName}`}</Typography>
          <Typography gutterBottom>{addresses.join(", ")}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
