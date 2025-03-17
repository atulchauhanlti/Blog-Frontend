import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/User/HomePage';
import NotFound from '../components/Shared/NotFound';
import Header from '../components/Shared/Header';
import Footer from '../components/Shared/Footer';
import BlogDetailsPage from '../pages/User/BlogDetailsPage';
import BlogListPage from '../pages/User/BlogListPage';
import RegisterPage from '../pages/Auth/RegisterPage';
import LoginPage from '../pages/Auth/LoginPage';
import AboutPage from '../pages/User/AboutPage';
import ContactPage from '../pages/User/ContactPage';

function UserRoutes() {
  return (
    <>
      <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog/category/:category" element={<BlogListPage />} />
          <Route path="/blog/:slug" element={<BlogDetailsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      <Footer />
    </>
  );
}

export default UserRoutes;
