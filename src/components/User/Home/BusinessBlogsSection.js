import React from 'react'

const BusinessBlogsSection = () => {
  return (
    <section className="section posts-entry">
      <div className="container">
          <div className="row mb-4">
              <div className="col-sm-6">
                  <h2 className="posts-entry-title">Business</h2>
              </div>
              <div className="col-sm-6 text-sm-end"><a href="category.html" className="read-more">View All</a></div>
          </div>
          <div className="row g-3">
              <div className="col-md-9">
                  <div className="row g-3">
                      <div className="col-md-6">
                          <div className="blog-entry">
                              <a href="single.html" className="img-link">
                                  <img src="../../assets/images/img_1_sq.jpg" alt="Image" className="img-fluid" />
                              </a>
                              <span className="date">Apr. 14th, 2022</span>
                              <h2><a href="single.html">Thought you loved Python? Wait until you meet Rust</a></h2>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis ea quis inventore vel voluptas.</p>
                              <p><a href="single.html" className="btn btn-sm btn-outline-primary">Read More</a></p>
                          </div>
                      </div>
                      <div className="col-md-6">
                          <div className="blog-entry">
                              <a href="single.html" className="img-link">
                                  <img src="../../assets/images/img_2_sq.jpg" alt="Image" className="img-fluid" />
                              </a>
                              <span className="date">Apr. 14th, 2022</span>
                              <h2><a href="single.html">Startup vs corporate: What job suits you best?</a></h2>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis ea quis inventore vel voluptas.</p>
                              <p><a href="single.html" className="btn btn-sm btn-outline-primary">Read More</a></p>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="col-md-3">
                  <ul className="list-unstyled blog-entry-sm">
                      <li>
                          <span className="date">Apr. 14th, 2022</span>
                          <h3><a href="single.html">Don’t assume your user data in the cloud is safe</a></h3>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis ea quis inventore vel voluptas.</p>
                          <p><a href="#" className="read-more">Continue Reading</a></p>
                      </li>

                      <li>
                          <span className="date">Apr. 14th, 2022</span>
                          <h3><a href="single.html">Meta unveils fees on metaverse sales</a></h3>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis ea quis inventore vel voluptas.</p>
                          <p><a href="#" className="read-more">Continue Reading</a></p>
                      </li>

                      <li>
                          <span className="date">Apr. 14th, 2022</span>
                          <h3><a href="single.html">UK sees highest inflation in 30 years</a></h3>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis ea quis inventore vel voluptas.</p>
                          <p><a href="#" className="read-more">Continue Reading</a></p>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
  </section>
  )
}

export default BusinessBlogsSection