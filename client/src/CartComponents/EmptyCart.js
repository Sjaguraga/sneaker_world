import * as React from "react";
import Container from "@mui/material/Container";
import ProductionQuantityLimitsOutlinedIcon from "@mui/icons-material/ProductionQuantityLimitsOutlined";
import "./EmptyCart.css";

function EmptyCart() {
  return (
    <Container sx={{ maxWidth: 345, height: 150, my: 5, color: "red" }}>
      <h3>Your Cart Is Empty</h3>
      <ProductionQuantityLimitsOutlinedIcon className="empty-cart-icon" />
    </Container>
  );
}

export default EmptyCart;
