import React from 'react'

const BlogListPage = () => {
  return (
    <div className="section search-result-wrap">
		<div className="container">
			<div className="row">
				<div className="col-12">
					<div className="heading">Category: Business</div>
				</div>
			</div>
			<div className="row posts-entry">
				<div className="col-lg-8">
					<div className="blog-entry d-flex blog-entry-search-item">
						<a href="single.html" className="img-link me-4">
							<img src="images/img_1_sq.jpg" alt="Image" className="img-fluid" />
						</a>
						<div>
							<span className="date">Apr. 14th, 2022 &bullet; <a href="#">Business</a></span>
							<h2><a href="single.html">Thought you loved Python? Wait until you meet Rust</a></h2>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis ea quis inventore vel voluptas.</p>
							<p><a href="single.html" className="btn btn-sm btn-outline-primary">Read More</a></p>
						</div>
					</div>

					<div className="blog-entry d-flex blog-entry-search-item">
						<a href="single.html" className="img-link me-4">
							<img src="images/img_2_sq.jpg" alt="Image" className="img-fluid" />
						</a>
						<div>
							<span className="date">Apr. 14th, 2022 &bullet; <a href="#">Business</a></span>
							<h2><a href="single.html">Thought you loved Python? Wait until you meet Rust</a></h2>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis ea quis inventore vel voluptas.</p>
							<p><a href="single.html" className="btn btn-sm btn-outline-primary">Read More</a></p>
						</div>
					</div>

					<div className="blog-entry d-flex blog-entry-search-item">
						<a href="single.html" className="img-link me-4">
							<img src="images/img_3_sq.jpg" alt="Image" className="img-fluid" />
						</a>
						<div>
							<span className="date">Apr. 14th, 2022 &bullet; <a href="#">Business</a></span>
							<h2><a href="single.html">Thought you loved Python? Wait until you meet Rust</a></h2>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis ea quis inventore vel voluptas.</p>
							<p><a href="single.html" className="btn btn-sm btn-outline-primary">Read More</a></p>
						</div>
					</div>

					<div className="blog-entry d-flex blog-entry-search-item">
						<a href="single.html" className="img-link me-4">
							<img src="images/img_4_sq.jpg" alt="Image" className="img-fluid" />
						</a>
						<div>
							<span className="date">Apr. 14th, 2022 &bullet; <a href="#">Business</a></span>
							<h2><a href="single.html">Thought you loved Python? Wait until you meet Rust</a></h2>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis ea quis inventore vel voluptas.</p>
							<p><a href="single.html" className="btn btn-sm btn-outline-primary">Read More</a></p>
						</div>
					</div>

					<div className="blog-entry d-flex blog-entry-search-item">
						<a href="single.html" className="img-link me-4">
							<img src="images/img_5_sq.jpg" alt="Image" className="img-fluid" />
						</a>
						<div>
							<span className="date">Apr. 14th, 2022 &bullet; <a href="#">Business</a></span>
							<h2><a href="single.html">Thought you loved Python? Wait until you meet Rust</a></h2>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis ea quis inventore vel voluptas.</p>
							<p><a href="single.html" className="btn btn-sm btn-outline-primary">Read More</a></p>
						</div>
					</div>

					<div className="row text-start pt-5 border-top">
						<div className="col-md-12">
							<div className="custom-pagination">
								<span>1</span>
								<a href="#">2</a>
								<a href="#">3</a>
								<a href="#">4</a>
								<span>...</span>
								<a href="#">15</a>
							</div>
						</div>
					</div>

				</div>

				<div className="col-lg-4 sidebar">
					
					<div className="sidebar-box search-form-wrap mb-4">
						<form action="#" className="sidebar-search-form">
							<span className="bi-search"></span>
							<input type="text" className="form-control" id="s" placeholder="Type a keyword and hit enter" />
						</form>
					</div>
					<div className="sidebar-box">
						<h3 className="heading">Popular Posts</h3>
						<div className="post-entry-sidebar">
							<ul>
								<li>
									<a href="">
										<img src="images/img_1_sq.jpg" alt="Image placeholder" className="me-4 rounded" />
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
										<img src="images/img_2_sq.jpg" alt="Image placeholder" className="me-4 rounded" />
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
										<img src="images/img_3_sq.jpg" alt="Image placeholder" className="me-4 rounded" />
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

					<div className="sidebar-box">
						<h3 className="heading">Categories</h3>
						<ul className="categories">
							<li><a href="#">Food <span>(12)</span></a></li>
							<li><a href="#">Travel <span>(22)</span></a></li>
							<li><a href="#">Lifestyle <span>(37)</span></a></li>
							<li><a href="#">Business <span>(42)</span></a></li>
							<li><a href="#">Adventure <span>(14)</span></a></li>
						</ul>
					</div>

					<div className="sidebar-box">
						<h3 className="heading">Tags</h3>
						<ul className="tags">
							<li><a href="#">Travel</a></li>
							<li><a href="#">Adventure</a></li>
							<li><a href="#">Food</a></li>
							<li><a href="#">Lifestyle</a></li>
							<li><a href="#">Business</a></li>
							<li><a href="#">Freelancing</a></li>
							<li><a href="#">Travel</a></li>
							<li><a href="#">Adventure</a></li>
							<li><a href="#">Food</a></li>
							<li><a href="#">Lifestyle</a></li>
							<li><a href="#">Business</a></li>
							<li><a href="#">Freelancing</a></li>
						</ul>
					</div>

				</div>
			</div>
		</div>
	</div>
  )
}

export default BlogListPage