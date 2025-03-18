import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AuthGuard from './auth/AuthGuard'

const Router = () => {
  return (
    <BrowserRouter>
      <AuthGuard />
    </BrowserRouter>
  )
}

export default Router