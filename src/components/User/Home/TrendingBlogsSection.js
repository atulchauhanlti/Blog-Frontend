import React from 'react'

const TrendingBlogsSection = () => {
  return (
    <section className="section posts-entry posts-entry-sm bg-light">
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-lg-3">
                    <div className="blog-entry">
                        <a href="single.html" className="img-link">
                            <img src="../../assets/images/img_1_horizontal.jpg" alt="Image" className="img-fluid" />
                        </a>
                        <span className="date">Apr. 14th, 2022</span>
                        <h2><a href="single.html">Thought you loved Python? Wait until you meet Rust</a></h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p><a href="#" className="read-more">Continue Reading</a></p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="blog-entry">
                        <a href="single.html" className="img-link">
                            <img src="../../assets/images/img_2_horizontal.jpg" alt="Image" className="img-fluid" />
                        </a>
                        <span className="date">Apr. 14th, 2022</span>
                        <h2><a href="single.html">Startup vs corporate: What job suits you best?</a></h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p><a href="#" className="read-more">Continue Reading</a></p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="blog-entry">
                        <a href="single.html" className="img-link">
                            <img src="../../assets/images/img_3_horizontal.jpg" alt="Image" className="img-fluid" />
                        </a>
                        <span className="date">Apr. 14th, 2022</span>
                        <h2><a href="single.html">UK sees highest inflation in 30 years</a></h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p><a href="#" className="read-more">Continue Reading</a></p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="blog-entry">
                        <a href="single.html" className="img-link">
                            <img src="../../assets/images/img_4_horizontal.jpg" alt="Image" className="img-fluid" />
                        </a>
                        <span className="date">Apr. 14th, 2022</span>
                        <h2><a href="single.html">Don’t assume your user data in the cloud is safe</a></h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p><a href="#" className="read-more">Continue Reading</a></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TrendingBlogsSection