import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import "./Sneakers.css";

import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

const Sneakers = ({ handleAddCart }) => {
  const [sneakers, setSneakers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/sneakers")
      .then((r) => r.json())
      .then((sneakers) => {
        setSneakers(sneakers);
      });
  }, []);

  const clickCardHandler = (sneakerId) => {
    console.log(sneakerId);
    navigate(`/sneakers/${sneakerId}`);
  };

  return (
    <div className="sneakers">
      <main>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={2}>
            {sneakers.map((sneaker) => (
              <Grid item key={sneaker.id} xs={12} sm={6} md={4}>
                <Card
                  className="fancy_card"
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Grid container>
                    <Grid xs={6} item>
                      <Typography sx={{ mr: 6 }}>
                        <div className="sneaker-price">{sneaker.brand}</div>
                      </Typography>
                    </Grid>
                    <Grid xs={6} item container>
                      <Typography sx={{ ml: 10 }}>
                        <div className="sneaker-price">${sneaker.price}</div>
                      </Typography>
                    </Grid>
                  </Grid>
                  <CardMedia
                    component="img"
                    image={sneaker.image}
                    alt={sneaker.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      align="center"
                    >
                      <div className="name-font">{sneaker.name}</div>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      sx={{ mr: 14 }}
                      variant="contained"
                      color="success"
                      size="small"
                      onClick={() => {
                        handleAddCart(sneaker.id);
                      }}
                    >
                      <Typography>Add</Typography>
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      onClick={() => {
                        clickCardHandler(sneaker.id);
                      }}
                    >
                      <Typography>Detail</Typography>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </div>
  );
};

export default Sneakers;
