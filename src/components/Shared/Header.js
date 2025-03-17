import React from 'react'

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
                                <a href="/" className="logo m-0 float-start">LTI Blogs<span className="text-primary">.</span></a>
                            </div>
                            <div className="col-8 text-center">
                                <ul className="js-clone-nav d-none d-lg-inline-block text-start site-menu mx-auto">
                                    <li className="active"><a href="/">Home</a></li>
                                    <li><a href="/blog/category/culture">Culture</a></li>
                                    <li><a href="/blog/category/business">Business</a></li>
                                    <li><a href="/blog/category/politics">Politics</a></li>
                                    <li><a href="/blog/category/travel">Travel</a></li>
                                </ul>
                            </div>
                            <div className="col-2 text-end">
                                <a href="#" className="burger ms-auto float-end site-menu-toggle js-menu-toggle d-inline-block d-lg-none light">
                                    <span></span>
                                </a>
                                <ul className="js-clone-nav d-none d-lg-inline-block text-start site-menu mx-auto">
                                    <li><a href="/login">Login</a></li>
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