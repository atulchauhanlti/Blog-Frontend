import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import PublicLayout from './PublicLayout'
import HomePage from '../../pages/User/HomePage'
import RegisterPage from '../../pages/Auth/RegisterPage'
import LoginPage from '../../pages/Auth/LoginPage'
import AboutPage from '../../pages/User/AboutPage'
import ContactPage from '../../pages/User/ContactPage'
import BlogListPage from '../../pages/User/BlogListPage'
import BlogDetailsPage from '../../pages/User/BlogDetailsPage'


const PublicRouter = () => {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog/category/:category" element={<BlogListPage />} />
          <Route path="/blog/:slug" element={<BlogDetailsPage />} />
          <Route path='/*' element={<Navigate to={"/"} />} />
      </Route>
    </Routes>
  )
}

export default PublicRouter