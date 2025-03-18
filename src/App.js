import React, { useEffect } from "react";
import "./styles/App.css";
import Router from "./routes/Router";
import { useDispatch } from "react-redux";
import Auth from "./utils/auth";
import { setToken, logout } from "./features/auth/authSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = Auth.getToken();

    if (token && Auth.isUserAuthenticated()) {
      // Use the setToken action to sync the token with Redux
      dispatch(setToken({ token, user: null })); // Replace `user: null` with user data if available
    } else {
      // If no valid token, log out the user
      dispatch(logout());
    }
  }, [dispatch]);

  return <Router />;
}

export default App;
