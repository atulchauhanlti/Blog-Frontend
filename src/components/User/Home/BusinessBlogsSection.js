import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsByCategory } from "../../../features/posts/postsSlice";
import { stripHtmlTags } from "../../../utils/helpers";
import { Link } from "react-router-dom";

const BASE_URL = "http://localhost:44301/";

const BusinessBlogsSection = () => {
  const dispatch = useDispatch();
  const { businessPosts, status } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPostsByCategory("Business"));
  }, [dispatch]);

  const limitedPosts = businessPosts.slice(0, 5);

  return (
    <section className="section posts-entry">
      <div className="container">
        <div className="row mb-4">
          <div className="col-sm-6">
            <h2 className="posts-entry-title">Business</h2>
          </div>
          <div className="col-sm-6 text-sm-end">
            <Link to="/blog/category/Business" className="read-more">
              View All
            </Link>
          </div>
        </div>
        <div className="row g-3">
          {status === "loading" && <p>Loading...</p>}
          {status === "failed" && <p>Failed to fetch posts. Try again later.</p>}
          {status === "succeeded" && limitedPosts.length === 0 && (
            <p>No posts available in the "Business" category.</p>
          )}
          {status === "succeeded" && (
            <>
              <div className="col-md-9">
                <div className="row g-3">
                  {limitedPosts.slice(0, 2).map((post) => (
                    <div className="col-md-6" key={post.id}>
                      <div className="blog-entry">
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
                        <span className="date">{new Date(post.publishedAt).toLocaleDateString()}</span>
                        <h2>
                          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                        </h2>
                        <p>{stripHtmlTags(post.content).substring(0, 100)}...</p>
                        <p>
                          <Link to={`/blog/${post.slug}`} className="btn btn-sm btn-outline-primary">
                            Read More
                          </Link>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-md-3">
                <ul className="list-unstyled blog-entry-sm">
                  {limitedPosts.slice(2).map((post) => (
                    <li key={post.id}>
                      <span className="date">{new Date(post.publishedAt).toLocaleDateString()}</span>
                      <h3>
                        <a href={`single.html?slug=${post.slug}`}>{post.title}</a>
                      </h3>
                      <p>{stripHtmlTags(post.content).substring(0, 100)}...</p>
                      <p>
                        <a href={`single.html?slug=${post.slug}`} className="read-more">
                          Continue Reading
                        </a>
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default BusinessBlogsSection;
