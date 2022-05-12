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
  const [cart, setCart] = useState([]);
  const [cartLength, setCartLength] = useState(0);
  const [checkoutSum, setCheckoutSum] = useState("");

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user);
          getCart(user);
        });
      }
    });
  }, []);

  function getCart(user) {
    fetch(`/shoppingcarts/${user.id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCart(data);
      });
  }
  useEffect(() => {
    setCartLength(cart.length);
  }, [cart]);

  console.log(cartLength);
  function handleAddCart(sneaker_id) {
    let newSneakerObj = { sneaker_id: sneaker_id, user_id: user.id };

    fetch("/carts/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSneakerObj),
    }).then((r) => {
      if (r.ok) {
        r.json().then((obj) => {
          console.log("Success:", obj);
          setCart([...cart, obj]);
        });
      } else {
        r.json().then((err) => {
          alert(err.errors);
        });
      }
    });
  }

  console.log(cart);
  function deleteItem(cart_id) {
    fetch(`/carts/${cart_id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        setCart(cart.filter((item) => item.id !== data.id));
      });
  }

  function checkoutHandler(cartTotal) {
    setCheckoutSum(cartTotal);
  }

  if (!user) return <Login onLogin={setUser} getCart={getCart} />;

  return (
    <div>
      <NavBar user={user} setUser={setUser} cartLength={cartLength} />
      <main>
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route
            path="/sneakers"
            element={<Sneakers user={user} handleAddCart={handleAddCart} />}
          />
          <Route path="/sneakers/:sneaker_id" element={<SneakerDetails />} />
          <Route
            path="/cart"
            element={
              <Cart
                checkoutHandler={checkoutHandler}
                user={user}
                setCartLength={setCartLength}
                cart={cart}
                deleteItem={deleteItem}
              />
            }
          />

          <Route
            path="checkout"
            element={
              <Checkout
                user={user}
                checkoutSum={checkoutSum}
                cart={cart}
                setCartLength={setCartLength}
                setCart={setCart}
              />
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
