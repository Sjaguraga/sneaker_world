import React from "react";
import News from "../pages/News";
import "./Home.css";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

// import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import BoxThree from "../pages/BoxThree";

import Box from "@mui/material/Box";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Home() {
  return (
    <div className="home-container">
      <News />
      {/* <Canvas className="canvas">
        <BoxThree />
        <ambientLight intensity={1} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <OrbitControls enableZoom={false} autoRotate={true} />
      </Canvas> */}
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </div>
  );
}

export default Home;
