import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <div className="site-mobile-menu site-navbar-target">
            <div className="site-mobile-menu-header">
                <div className="site-mobile-menu-close">
                    <span className="icofont-close js-menu-toggle"></span>
                </div>
            </div>
            <div className="site-mobile-menu-body"></div>
        </div>

        <nav className="site-nav">
            <div className="container">
                <div className="menu-bg-wrap">
                    <div className="site-navigation">
                        <div className="row g-0 align-items-center">
                            <div className="col-2">
                                <Link to="/" className="logo m-0 float-start">LTI Blogs<span className="text-primary">.</span></Link>
                            </div>
                            <div className="col-8 text-center">
                                <ul className="js-clone-nav d-none d-lg-inline-block text-start site-menu mx-auto">
                                    <li className="active"><Link to="/">Home</Link></li>
                                    <li><Link to="/blog/category/Fresh">Fresh</Link></li>
                                    <li><Link to="/blog/category/Business">Business</Link></li>
                                    <li><Link to="/blog/category/Politics">Politics</Link></li>
                                    <li><Link to="/blog/category/Travel">Travel</Link></li>
                                </ul>
                            </div>
                            <div className="col-2 text-end">
                                <ul className="js-clone-nav d-none d-lg-inline-block text-start site-menu mx-auto">
                                    <li><Link to="/login">Login</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Header