import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsByCategory } from "../../../features/posts/postsSlice";
import { stripHtmlTags } from "../../../utils/helpers";
import { Link } from "react-router-dom";

const BASE_URL = "http://localhost:44301/";

const PoliticsBlogsSection = () => {
  const dispatch = useDispatch();
  const { politicsPosts, status } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPostsByCategory("Politics"));
  }, [dispatch]);

  const limitedPosts = politicsPosts.slice(0, 6);

  return (
    <section className="section">
      <div className="container">
        <div className="row mb-4">
          <div className="col-sm-6">
            <h2 className="posts-entry-title">Politics</h2>
          </div>
            <Link to="/blog/category/Politics" className="read-more">
              View All
            </Link>
        </div>

        <div className="row">
          {status === "loading" && <p>Loading...</p>}
          {status === "failed" && <p>Failed to fetch posts. Try again later.</p>}
          {status === "succeeded" && limitedPosts.length === 0 && (
            <p>No posts available in the "Politics" category.</p>
          )}
          {status === "succeeded" &&
            limitedPosts.map((post) => (
              <div className="col-lg-4 mb-4" key={post.id}>
                <div className="post-entry-alt">
                  <Link to={`/blog/${post.slug}`} className="img-link">
                    {post.imageUrl ? (
                      <img
                        src={`${BASE_URL}${post.imageUrl.replace(/\\/g, "/")}`}
                        alt={post.title}
                        className="image-fixed"
                      />
                    ) : (
                      <div className="no-image-placeholder">No Image</div>
                    )}
                  </Link>
                  <div className="excerpt">
                    <h2>
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <div className="post-meta align-items-center text-left clearfix">
                      <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                    </div>
                    <p>{stripHtmlTags(post.content).substring(0, 100)}...</p>
                    <p>
                      <Link to={`/blog/${post.slug}`} className="read-more">Continue Reading</Link>
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default PoliticsBlogsSection;
