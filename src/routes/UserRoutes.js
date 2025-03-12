import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/User/HomePage';
import BlogPage from '../pages/User/BlogPage';
import UserLogin from '../pages/User/UserLogin';
import NotFound from '../components/Shared/NotFound';

function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<UserLogin />} />
      <Route path="/blog/:id" element={<BlogPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default UserRoutes;
