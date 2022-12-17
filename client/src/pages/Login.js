import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";

const Login = ({ onLogin, getCart }) => {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <>
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
    </>
  );
};

export default Login;
