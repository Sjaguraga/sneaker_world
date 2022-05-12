import React from "react";
import News from "../pages/News";
import "./Home.css";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import BoxThree from "../pages/BoxThree";

function Home() {
  return (
    <div className="home-container">
      <div className="home-glass">
        <News />

        {/* <Canvas className="canvas">
            <BoxThree />
            <ambientLight intensity={1} />
            <directionalLight position={[-2, 5, 2]} intensity={1} />
            <OrbitControls enableZoom={false} autoRotate={true} />
          </Canvas> */}
      </div>
    </div>
  );
}

export default Home;
