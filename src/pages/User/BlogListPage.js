import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CategoryPostList from '../../components/User/Post/CategoryPostList';
import PostSidebar from '../../components/User/Post/PostSidebar';

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

          <PostSidebar />
        </div>
      </div>
    </div>
  );
};

export default BlogListPage;
