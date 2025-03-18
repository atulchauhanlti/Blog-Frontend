import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { logout } from '../../features/auth/authSlice';

const AdminHeader = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="app-header navbar navbar-expand bg-body">
        <div className="container-fluid">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item dropdown user-menu">
              <Link to="/dashboard" className="nav-link dropdown-toggle" onClick={handleLogout}>
                <span className="d-none d-md-inline">Logout</span>
              </Link>
            </li>
          </ul>
        </div>
    </nav>
  )
}

export default AdminHeader