import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
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

function Copyright() {
  return (
    <Typography variant="body2" color="background.paper" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        S N E A K E R W O R L D
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

function Sneakers({ user, handleAddCart }) {
  const [sneakersList, setSneakersList] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("/sneakers")
      .then((r) => r.json())
      .then((sneakers) => {
        console.log(sneakers);
        setSneakersList(sneakers);
      });
  }, []);

  const clickCardHandler = (sneakerId) => {
    console.log(sneakerId);
    navigate(`/sneakers/${sneakerId}`);
  };

  return (
    <div className="sneaker-container">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <main>
          <div className="glass">
            <h1
              className="sneaker-title"
              style={{
                color: "white",
                fontFamily: "Life Is Okay",
                textShadow: "2px 2px rgb(80,80,80)",
              }}
            >
              W E L C O M E, {user.username}!
            </h1>
            <Container sx={{ py: 8 }} maxWidth="md">
              {/* End hero unit */}
              <Grid container spacing={2}>
                {sneakersList.map((sneaker) => (
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
                            <div className="sneaker-price">
                              ${sneaker.price}
                            </div>
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
                          size="small"
                          onClick={() => {
                            handleAddCart(sneaker.id);
                          }}
                        >
                          <Typography sx={{ mr: 8 }}>Add to Cart</Typography>
                        </Button>
                        <Button
                          size="small"
                          onClick={() => {
                            clickCardHandler(sneaker.id);
                          }}
                        >
                          {" "}
                          <Typography>Detail</Typography>
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </div>
        </main>
        <Box sx={{ bgcolor: "#1b1b1b", p: 2 }} component="footer">
          <Typography variant="h6" align="center" gutterBottom></Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="p"
          ></Typography>
          <Copyright />
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default Sneakers;
