import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { fetchPosts } from "../../../features/posts/postsSlice";

const PostLists = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { posts, status, error } = useSelector((state) => state.posts);

  const BASE_URL = "http://localhost:44301/"; 

  useEffect(() => {
    if (!posts.length || location.state?.refreshPosts) {
      dispatch(fetchPosts());
    }
  }, [dispatch, location.state, posts.length]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <div>
      <Link to={"/posts/create"} className="btn btn-primary mb-3">
        + Create Post
      </Link>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Title</th>
            <th>Category</th>
            <th>Tags</th>
            <th>Published At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                {post.imageUrl ? (
                  <img
                    src={`${BASE_URL}${post.imageUrl.replace(/\\/g, "/")}`}
                    alt={post.title}
                    style={{ width: "100px", height: "auto" }}
                  />
                ) : (
                  "No Image"
                )}
              </td>
              <td>{post.title}</td>
              <td>{post.categoryName}</td>
              <td>{post?.tags?.join(", ")}</td>
              <td>{new Date(post.publishedAt).toLocaleDateString()}</td>
              <td>
                <button className="btn btn-warning btn-sm me-2">Edit</button>
                <button className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostLists;
