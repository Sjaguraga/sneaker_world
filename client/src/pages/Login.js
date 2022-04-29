import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";

function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <div>
      <div className="split left">
        <div className="centered">
          <h1 className="login-title">S N E A K E R C I T Y</h1>
          {showLogin ? (
            <>
              <LoginForm
                onLogin={onLogin}
                showLogin={showLogin}
                setShowLogin={setShowLogin}
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
