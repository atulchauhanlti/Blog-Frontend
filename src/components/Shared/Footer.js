import React from 'react'

const Footer = () => {
  return (
    <footer className="site-footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <div className="widget">
                        <h3 className="mb-4">About</h3>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                    <div className="widget">
                        <h3>Social</h3>
                        <ul className="list-unstyled social">
                            <li><a href="#"><span className="bi bi-instagram"></span></a></li>
                            <li><a href="#" className='ml-2'><span className="bi bi-twitter"></span></a></li>
                            <li><a href="#"><span className="bi bi-facebook"></span></a></li>
                            <li><a href="#"><span className="bi bi-linkedin"></span></a></li>
                            <li><a href="#"><span className="bi bi-pinterest"></span></a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4 ps-lg-5">
                    <div className="widget">
                        <h3 className="mb-4">LTI Blogs</h3>
                        <ul className="list-unstyled float-start links">
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#">Terms</a></li>
                            <li><a href="#">Privacy</a></li>
                        </ul>
                    </div> 
                </div>
                <div className="col-lg-4">
                    <div className="widget">
                        <h3 className="mb-4">Recent Post Entry</h3>
                        <div className="post-entry-footer">
                            <ul>
                                <li>
                                    <a href="">
                                        <img src="../../assets/images/img_1_sq.jpg" alt="Image placeholder" className="me-4 rounded" />
                                        <div className="text">
                                            <h4>There’s a Cool New Way for Men to Wear Socks and Sandals</h4>
                                            <div className="post-meta">
                                                <span className="mr-2">March 15, 2018 </span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <img src="../../assets/images/img_2_sq.jpg" alt="Image placeholder" className="me-4 rounded" />
                                        <div className="text">
                                            <h4>There’s a Cool New Way for Men to Wear Socks and Sandals</h4>
                                            <div className="post-meta">
                                                <span className="mr-2">March 15, 2018 </span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>


                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12 text-center">
            <p>Copyright &copy;LTIBlogs. All Rights Reserved.</p>
            </div>
        </div>
        </div>
    </footer>
  )
}

export default Footer