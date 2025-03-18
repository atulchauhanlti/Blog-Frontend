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
      dispatch(setToken({ token, user: null })); 
    } else {
      dispatch(logout());
    }
  }, [dispatch]);

  return <Router />;
}

export default App;
