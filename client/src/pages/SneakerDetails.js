import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

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

function SneakerDetails() {
  const { sneaker_id } = useParams();
  const [sneaker, setSneaker] = useState("");
  useEffect(() => {
    fetch(`/sneakers/${sneaker_id}`)
      .then((r) => r.json())
      .then((sneaker) => {
        console.log(sneaker);
        setSneaker(sneaker);
      });
  }, []);

  return (
    <div className="sneaker-container">
      <CssBaseline />
      <main>
        <div className="glass">
          <Container sx={{ py: 6 }} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={2}>
              <Grid item key={sneaker.id}>
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
                      <Typography sx={{ mr: 40 }}>
                        <div className="sneaker-price">{sneaker.brand}</div>
                      </Typography>
                    </Grid>
                    <Grid xs={6} item container>
                      <Typography sx={{ ml: 46 }}>
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
                    <Typography>
                      <div className="description-font">
                        {sneaker.description}
                      </div>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </div>
      </main>
      {/* Footer */}
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
      {/* End footer */}
    </div>
  );
}

export default SneakerDetails;
