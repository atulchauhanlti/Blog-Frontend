import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPostsByCategory } from "../../../features/posts/postsSlice";

const BASE_URL = "http://localhost:44301/";

const CategoryPostList = ({ category, type }) => {
  const dispatch = useDispatch();

  const { businessPosts, freshPosts, travelPosts, politicsPosts, categoryPosts, status } =
    useSelector((state) => state.posts);

  const posts =
    category === "Business"
      ? businessPosts
      : category === "Fresh"
      ? freshPosts
      : category === "Travel"
      ? travelPosts
      : category === "Politics"
      ? politicsPosts
      : categoryPosts;

  useEffect(() => {
    if (category) {
      dispatch(fetchPostsByCategory(category)); 
    }
  }, []);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "failed") {
    return <p>Failed to fetch posts. Try again later.</p>;
  }

  if (status === "succeeded" && posts.length === 0) {
    return <p>No posts available in this category.</p>;
  }

  return (
    <div className={type === "GRID" ? "row" : ""}>
      {status === "succeeded" &&
        posts.map((post) => {
          if (type === "GRID") {
            // Render in grid format
            return (
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
                    <p>{post.content ? post.content.substring(0, 100).replace(/<\/?[^>]+(>|$)/g, "") : ""}...</p>
                    <p>
                      <Link to={`/blog/${post.slug}`} className="read-more">Continue Reading</Link>
                    </p>
                  </div>
                </div>
              </div>
            );
          } else {
            // Render in default list format
            return (
              <div className="blog-entry d-flex blog-entry-search-item" key={post.id}>
                <a href={`/blog/${post.slug}`} className="img-link me-4">
                  <img
                    src={post.imageUrl ? `${BASE_URL}${post.imageUrl.replace(/\\/g, "/")}` : "default-image.jpg"}
                    alt={post.title}
                    className="img-fluid"
                  />
                </a>
                <div>
                  <span className="date">
                    {new Date(post.publishedAt).toLocaleDateString()} &bullet;{" "}
                    <a href="#">{post.category || "Category"}</a>
                  </span>
                  <h2>
                    <a href={`/blog/${post.slug}`}>{post.title}</a>
                  </h2>
                  <p>{post.excerpt || "No description available."}</p>
                  <p>
                    <a href={`/blog/${post.slug}`} className="btn btn-sm btn-outline-primary">
                      Read More
                    </a>
                  </p>
                </div>
              </div>
            );
          }
        })}
    </div>
  );
};

export default CategoryPostList;
