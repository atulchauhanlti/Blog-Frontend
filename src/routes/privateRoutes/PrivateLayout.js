import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import '../../styles/Admin.css'
import AdminHeader from "../../components/Admin/AdminHeader";
import Sidebar from "../../components/Admin/Sidebar";
import AdminFooter from "../../components/Admin/AdminFooter";

const PrivateLayout = () => {
  return (
    <>
      <div class="layout-fixed sidebar-expand-lg bg-body-tertiary">
        <div class="app-wrapper">
          <AdminHeader />

          <Sidebar />

          <main class="app-main">
            <div class="app-content-header">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-sm-6"><h3 class="mb-0">Dashboard</h3></div>
                  <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-end">
                      <li class="breadcrumb-item"><a href="#">Home</a></li>
                      <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div class="app-content">
              <div class="container-fluid">
                <Outlet />
              </div>
            </div>
          </main>

          <AdminFooter />
        </div>
      </div>
    </>
  );
};

export default PrivateLayout;