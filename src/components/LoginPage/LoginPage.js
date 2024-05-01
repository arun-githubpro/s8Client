import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

const LoginPage = ({ setIsAuthenticated, notifyLoginSuccess }) => {
  const [isSignup, setIsSignup] = useState(false);
  return (
    <>
      {!isSignup ? (
        <Login
          setIsAuthenticated={setIsAuthenticated}
          notifyLoginSuccess={notifyLoginSuccess}
          setIsSignup={setIsSignup}
        />
      ) : (
        <Signup
          setIsAuthenticated={setIsAuthenticated}
          notifyLoginSuccess={notifyLoginSuccess}
          setIsSignup={setIsSignup}
        />
      )}
    </>
  );
};

export default LoginPage;
