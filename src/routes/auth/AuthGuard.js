import React from "react";
import PrivateRouter from "../privateRoutes/PrivateRouter";
import PublicRouter from "../publicRoutes/PublicRouter";
import { useSelector } from "react-redux";

const AuthGuard = () => {
  // Access `isAuth` state from Redux store
  const isAuth = useSelector((state) => !!state.auth.token);

  return isAuth ? <PrivateRouter /> : <PublicRouter />;
};

export default AuthGuard;
