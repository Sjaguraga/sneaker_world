import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";

function Login({ onLogin, getCart }) {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <div className="login">
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
  );
}

export default Login;
