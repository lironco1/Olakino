import React, { useCallback, useEffect, useState } from "react";

let logoutTimer;

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

// Calculate remaining time until auth token expires
const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  return expirationTime - currentTime;
};

// Persist user authentication status (after refresh for example) with browser storage.
const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("token");
  const storedExpirationDate = localStorage.getItem("expirationTime");

  const remainingTime = calculateRemainingTime(storedExpirationDate);

  if (remainingTime <= 3600) {
    // Auto logout when token expires
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    return null;
  }

  return {
    token: storedToken,
    duration: remainingTime,
  };
};

export const AuthContextProvider = (props) => {
  const tokenData = retrieveStoredToken();

  let initialToken;
  if (tokenData) {
    initialToken = tokenData.token;
  }

  const [token, setToken] = useState(initialToken);

  let userIsLoggedIn = !!token;
  const WEEK_IN_MS = 604_800 * 1000;

  const logoutHandler = useCallback(() => {
    // Wrapped in useCallback to prevent a new instance in every re-render
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  const loginHandler = (token) => {
    setToken(token);
    const expirationTime = new Date().getTime() + WEEK_IN_MS; // Next week time
    localStorage.setItem("token", token);
    localStorage.setItem("expirationTime", expirationTime.toString());
    logoutTimer = setTimeout(logoutHandler, WEEK_IN_MS);
  };

  useEffect(() => {
    if (tokenData) {
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  }, [tokenData, logoutHandler]);

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
