import React from 'react'
import PrivateRouter from '../privateRoutes/PrivateRouter';
import PublicRouter from '../publicRoutes/PublicRouter';

const AuthGuard = () => {
    // const isAuth = useAuthStore(state=>state.isAuth);
    const isAuth = false;
    return isAuth ? <PrivateRouter /> : <PublicRouter />
}

export default AuthGuard