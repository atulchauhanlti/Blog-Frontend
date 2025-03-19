import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsByCategory } from "../../../features/posts/postsSlice";
import { Link } from "react-router-dom";

const BASE_URL = "http://localhost:44301/";

const TravelBlogsSection = () => {
  const dispatch = useDispatch();
  const { travelPosts, status } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPostsByCategory("Travel"));
  }, [dispatch]);

  const limitedPosts = travelPosts.slice(0, 4);

  const verticalPost = limitedPosts[0];
  const horizontalPost = limitedPosts[1];
  const squarePosts = limitedPosts.slice(2);

  return (
    <div className="section bg-light">
      <div className="container">
        <div className="row mb-4">
          <div className="col-sm-6">
            <h2 className="posts-entry-title">Travel</h2>
          </div>
          <div className="col-sm-6 text-sm-end">
            <Link to="/blog/category/Travel" className="read-more">
              View All
            </Link>
          </div>
        </div>

        <div className="row align-items-stretch retro-layout-alt">
          {status === "loading" && <p>Loading...</p>}
          {status === "failed" && <p>Failed to fetch posts. Try again later.</p>}
          {status === "succeeded" && limitedPosts.length === 0 && (
            <p>No posts available in the "Travel" category.</p>
          )}
          {status === "succeeded" && (
            <>
              <div className="col-md-5 order-md-2">
                {verticalPost && (
                  <Link
                    to={`/blog/${verticalPost.slug}`}
                    className="hentry img-1 h-100 gradient"
                  >
                    <div
                      className="featured-img"
                      style={{
                        backgroundImage: `url('${BASE_URL}${verticalPost.imageUrl.replace(
                          /\\/g,
                          "/"
                        )}')`,
                      }}
                    ></div>
                    <div className="text">
                      <span>
                        {new Date(verticalPost.publishedAt).toLocaleDateString()}
                      </span>
                      <h2>{verticalPost.title}</h2>
                    </div>
                  </Link>
                )}
              </div>
              <div className="col-md-7">
                {horizontalPost && (
                  <Link
                    to={`/blog/${horizontalPost.slug}`}
                    className="hentry img-2 v-height mb30 gradient"
                  >
                    <div
                      className="featured-img"
                      style={{
                        backgroundImage: `url('${BASE_URL}${horizontalPost.imageUrl.replace(
                          /\\/g,
                          "/"
                        )}')`,
                      }}
                    ></div>
                    <div className="text text-sm">
                      <span>
                        {new Date(horizontalPost.publishedAt).toLocaleDateString()}
                      </span>
                      <h2>{horizontalPost.title}</h2>
                    </div>
                  </Link>
                )}

                <div className="two-col d-block d-md-flex justify-content-between">
                  {squarePosts.map((post, index) => (
                    <Link
                      key={post.id}
                      to={`/blog/${post.slug}`}
                      className={`hentry v-height img-2 gradient ${
                        index === 1 ? "ms-auto float-end" : ""
                      }`}
                    >
                      <div
                        className="featured-img"
                        style={{
                          backgroundImage: `url('${BASE_URL}${post.imageUrl.replace(
                            /\\/g,
                            "/"
                          )}')`,
                        }}
                      ></div>
                      <div className="text text-sm">
                        <span>
                          {new Date(post.publishedAt).toLocaleDateString()}
                        </span>
                        <h2>{post.title}</h2>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TravelBlogsSection;
