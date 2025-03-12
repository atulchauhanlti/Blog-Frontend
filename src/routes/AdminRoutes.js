import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminLogin from '../pages/Admin/AdminLogin';
import AdminDashboard from '../pages/Admin/AdminDashboard';
import BlogManagement from '../components/Admin/BlogManagement';
import NotFound from '../components/Shared/NotFound';

function AdminRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<AdminLogin />} />
      <Route path="/dashboard" element={<AdminDashboard />} />
      <Route path="/manage-blogs" element={<BlogManagement />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AdminRoutes;
