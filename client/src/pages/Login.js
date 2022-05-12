import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";

function Login({ onLogin, getCart }) {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <div className="login">
      <div className="split left">
        <div className="centered">
          {/* <h1 className="login-title">S N E A K E R W O R L D</h1> */}
          {showLogin ? (
            <>
              <LoginForm
                onLogin={onLogin}
                showLogin={showLogin}
                setShowLogin={setShowLogin}
                getCart={getCart}
              />
            </>
          ) : (
            <>
              <SignUpForm
                onLogin={onLogin}
                showLogin={showLogin}
                setShowLogin={setShowLogin}
              />
            </>
          )}
        </div>
      </div>
      <div className="split right">
        <div className="centered"></div>
      </div>
    </div>
  );
}

export default Login;
