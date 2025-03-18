import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import PrivateLayout from './PrivateLayout'
import AdminDashboard from '../../pages/Admin/AdminDashboard'
import CategoryLists from '../../pages/Admin/Categories/CategoryLists'
import CreateCategory from '../../pages/Admin/Categories/CreateCategory'
import TagLists from '../../pages/Admin/Tags/TagLists'
import CreateTag from '../../pages/Admin/Tags/CreateTag'
import PostLists from '../../pages/Admin/Posts/PostLists'
import CreatePosts from '../../pages/Admin/Posts/CreatePosts'

const PrivateRouter = () => {
  return (
    <Routes>
      <Route element={<PrivateLayout />}>
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/categories" element={<CategoryLists />} />
        <Route path="/categories/create" element={<CreateCategory />} />
        <Route path="/tags" element={<TagLists />} />
        <Route path="/tags/create" element={<CreateTag />} />
        <Route path="/posts" element={<PostLists />} />
        <Route path="/posts/create" element={<CreatePosts />} />
        <Route path='/*' element={<Navigate to={"/dashboard"} />} />
      </Route>
    </Routes>
  )
}

export default PrivateRouter