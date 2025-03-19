import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsByCategory } from "../../../features/posts/postsSlice";
import { Link } from "react-router-dom";

const BASE_URL = "http://localhost:44301/";

const FreshBlogsSection = () => {
  const dispatch = useDispatch();
  const { freshPosts, status } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPostsByCategory("Fresh"));
  }, [dispatch]);

  return (
    <section className="section bg-light">
      <div className="container">
        <div className="row align-items-stretch retro-layout">
          {status === "loading" && <p>Loading...</p>}
          {status === "failed" && <p>Failed to fetch posts. Try again later.</p>}
          {status === "succeeded" && freshPosts.length === 0 && <p>No posts available in the "Fresh" category.</p>}
          {status === "succeeded" &&
            freshPosts.map((post) => (
              <div className="col-md-4" key={post.id}>
                <Link to={`/blog/${post.slug}`} className="h-entry mb-30 v-height gradient">
                  <div
                    className="featured-img"
                    style={{
                      backgroundImage: `url('${BASE_URL}${post.imageUrl.replace(/\\/g, "/")}')`,
                    }}
                  ></div>
                  <div className="text">
                    <span className="date">{new Date(post.publishedAt).toLocaleDateString()}</span>
                    <h2>{post.title}</h2>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default FreshBlogsSection;
