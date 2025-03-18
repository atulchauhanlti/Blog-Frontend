import React, { useEffect } from 'react';
import './styles/App.css';
import Router from "./routes/Router";
import Auth from "./utils/auth";

function App() {
  const isLoggedOut = Auth.isUserAuthenticated();
  useEffect(() => {
    if (!isLoggedOut) localStorage.clear();
  }, [isLoggedOut]);

  return <Router />;
}

export default App;
