import { useState, useEffect } from "react";
import News from "../pages/News";
import "./Home.css";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Home = (props) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {loading ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      ) : (
        <div className="home">
          <h1 className="title">Welcome {props.user.username}</h1>
          <News />
        </div>
      )}
    </>
  );
};

export default Home;
