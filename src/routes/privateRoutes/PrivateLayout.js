import React, { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom"; 
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSlice"; 
import '../../styles/Admin.css';
import AdminHeader from "../../components/Admin/AdminHeader";
import Sidebar from "../../components/Admin/Sidebar";
import AdminFooter from "../../components/Admin/AdminFooter";
import Auth from "../../utils/auth";

const PrivateLayout = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector((state) => !!state.auth.token);

    useEffect(() => {
        if (!Auth.isUserAuthenticated()) {
        dispatch(logout()); 
        }
    }, [dispatch]);

    if (!isAuth) {
        return <Navigate to="/" />;
    }

    return (
        <div className="layout-fixed sidebar-expand-lg bg-body-tertiary">
            <div className="app-wrapper">
                <AdminHeader />

                <Sidebar />

                <main className="app-main">
                    <div className="app-content-header">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h3 className="mb-0">Dashboard</h3>
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-end">
                                        <li className="breadcrumb-item">
                                            <a href="#">Home</a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            Dashboard
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="app-content">
                        <div className="container-fluid">
                            <Outlet /> 
                        </div>
                    </div>
                </main>

                <AdminFooter />
            </div>
        </div>
    );
};

export default PrivateLayout;
