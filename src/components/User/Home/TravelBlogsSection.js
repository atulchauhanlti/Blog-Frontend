import React from 'react'

const TravelBlogsSection = () => {
  return (
    <div className="section bg-light">
        <div className="container">

            <div className="row mb-4">
                <div className="col-sm-6">
                    <h2 className="posts-entry-title">Travel</h2>
                </div>
                <div className="col-sm-6 text-sm-end"><a href="category.html" className="read-more">View All</a></div>
            </div>

            <div className="row align-items-stretch retro-layout-alt">

                <div className="col-md-5 order-md-2">
                    <a href="single.html" className="hentry img-1 h-100 gradient">
                        <div className="featured-img" style={{ backgroundImage: "url('../../assets/images/img_2_vertical.jpg')"}}></div>
                        <div className="text">
                            <span>February 12, 2019</span>
                            <h2>Meta unveils fees on metaverse sales</h2>
                        </div>
                    </a>
                </div>

                <div className="col-md-7">

                    <a href="single.html" className="hentry img-2 v-height mb30 gradient">
                        <div className="featured-img" style={{ backgroundImage: "url('../../assets/images/img_1_horizontal.jpg')"}}></div>
                        <div className="text text-sm">
                            <span>February 12, 2019</span>
                            <h2>AI can now kill those annoying cookie pop-ups</h2>
                        </div>
                    </a>

                    <div className="two-col d-block d-md-flex justify-content-between">
                        <a href="single.html" className="hentry v-height img-2 gradient">
                            <div className="featured-img" style={{ backgroundImage: "url('../../assets/images/img_2_sq.jpg')"}}></div>
                            <div className="text text-sm">
                                <span>February 12, 2019</span>
                                <h2>Don’t assume your user data in the cloud is safe</h2>
                            </div>
                        </a>
                        <a href="single.html" className="hentry v-height img-2 ms-auto float-end gradient">
                            <div className="featured-img" style={{ backgroundImage: "url('../../assets/images/img_3_sq.jpg')"}}></div>
                            <div className="text text-sm">
                                <span>February 12, 2019</span>
                                <h2>Startup vs corporate: What job suits you best?</h2>
                            </div>
                        </a>
                    </div>  

                </div>
            </div>

        </div>
    </div>
  )
}

export default TravelBlogsSection