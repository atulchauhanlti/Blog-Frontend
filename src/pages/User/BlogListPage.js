import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CategoryPostList from '../../components/User/Post/CategoryPostList';

const BlogListPage = () => {
  const { category } = useParams(); 

  return (
    <div className="section search-result-wrap">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="heading">Category: {category}</div>
          </div>
        </div>
        <div className="row posts-entry">
          <div className="col-lg-8">
		  	<CategoryPostList category={category} type="" />
          </div>

          <div className="col-lg-4 sidebar">
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
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogListPage;
