import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "../pages/Login";
import NavBar from "./NavBar";
import Error from "../pages/Error";
import "./App.css";
import Cart from "../CartComponents/Cart";
import Home from "../pages/Home";
import Sneakers from "../pages/Sneakers";
import Checkout from "./checkout/Checkout";
import SneakerDetails from "../pages/SneakerDetails";
function App() {
  const [user, setUser] = useState(null);
  const [cartLength, setCartLength] = useState("");

  // useEffect(() => {
  //   fetch("/me").then((r) => {
  //     if (r.ok) {
  //       r.json().then((user) => setUser(user));
  //     }
  //   });
  // }, []);
  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user);
          fetchCartLength(user);
        });
      }
    });
  }, []);

  const fetchCartLength = (user) => {
    fetch(`/carts/${user.id}`)
      .then((r) => r.json())
      .then((data) => {
        console.log(data.length);
        setCartLength(data.length);
      });
  };

  //add to cart function
  const handleAddCart = (sneaker_id) => {
    console.log(user.id);
    let newObj = {
      user_id: user.id,
      sneaker_id: sneaker_id,
    };

    fetch("/carts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newObj),
    }).then((r) => {
      if (r.ok) {
        r.json().then((obj) => {
          console.log(obj);

          alert("sneaker added to cart!", {
            position: "top-center",
            autoClose: 500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          fetchCartLength(user);
        });
      } else {
        r.json().then((err) => {
          console.log(err);
          alert("limited to one sneaker per user!", {
            position: "top-center",
            autoClose: 500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });
      }
    });
  };

  if (!user)
    return <Login onLogin={setUser} fetchCartLength={fetchCartLength} />;

  return (
    <>
      <NavBar user={user} setUser={setUser} cartLength={cartLength} />
      <main>
        <Routes>
          <Route
            path="/sneakers"
            element={<Sneakers user={user} handleAddCart={handleAddCart} />}
          />
          <Route path="/" element={<Home user={user} />} />
          <Route
            path="/sneakers/:sneaker_id"
            element={<SneakerDetails handleAddCart={handleAddCart} />}
          />
          <Route
            path="cart"
            element={<Cart user={user} setCartLength={setCartLength} />}
          />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
