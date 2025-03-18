import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside className="app-sidebar bg-body-secondary shadow" data-bs-theme="dark">
        <div className="sidebar-brand">
          <Link to="/dashboard" className="brand-link">
            <span className="brand-text fw-light">LTI Dashboard</span>
          </Link>
        </div>
        <div className="sidebar-wrapper">
          <nav className="mt-2">
            <ul
              className="nav sidebar-menu flex-column"
              data-lte-toggle="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item menu-open">
                <Link to="/dashboard" className="nav-link active">
                  <i className="nav-icon bi bi-speedometer"></i>
                  <p>
                    Dashboard
                  </p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/categories" className="nav-link">
                  <i className="nav-icon bi bi-circle text-danger"></i>
                  <p>Category</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/tags" className="nav-link">
                  <i className="nav-icon bi bi-circle text-danger"></i>
                  <p>Tags</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/posts" className="nav-link">
                  <i className="nav-icon bi bi-circle text-info"></i>
                  <p>Manage Posts</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/profile" className="nav-link">
                  <i className="nav-icon bi bi-circle text-info"></i>
                  <p>Profile</p>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
  )
}

export default Sidebar