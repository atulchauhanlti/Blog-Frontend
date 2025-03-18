import React from 'react'
import { Link } from 'react-router-dom'

const AdminHeader = () => {
  return (
    <nav className="app-header navbar navbar-expand bg-body">
        <div className="container-fluid">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item dropdown user-menu">
              <Link to="/dashboard" className="nav-link dropdown-toggle">
                <span className="d-none d-md-inline">Logout</span>
              </Link>
            </li>
          </ul>
        </div>
    </nav>
  )
}

export default AdminHeader