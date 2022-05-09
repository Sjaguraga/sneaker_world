import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "../pages/Login";
import NavBar from "./NavBar";
import Error from "../pages/Error";
import "./App.css";
import Home from "../pages/Home";
import Sneakers from "../pages/Sneakers";
import Checkout from "./checkout/Checkout";
import SneakerDetails from "../pages/SneakerDetails";
function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Routes>
          <Route path="/sneakers" element={<Sneakers user={user} />} />
          <Route path="/" element={<Home user={user} />} />
          <Route path="/sneakers/:sneaker_id" element={<SneakerDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
