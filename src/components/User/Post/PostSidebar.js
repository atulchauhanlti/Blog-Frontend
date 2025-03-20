import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../../features/categories/categoriesSlice";
import { fetchTags } from "../../../features/tags/tagsSlice";
import { Link } from "react-router-dom";

const PostSidebar = () => {
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.categories.categories);
  const tags = useSelector((state) => state.tags.tags);
  const categoriesStatus = useSelector((state) => state.categories.status);
  const tagsStatus = useSelector((state) => state.tags.status);

  useEffect(() => {
    if (categoriesStatus === "idle") {
      dispatch(fetchCategories());
    }
    if (tagsStatus === "idle") {
      dispatch(fetchTags());
    }
  }, [dispatch, categoriesStatus, tagsStatus]);

  return (
    <div className="col-md-12 col-lg-4 sidebar">
      <div className="sidebar-box">
        <h3 className="heading">Categories</h3>
        <ul className="categories">
          {categories.length > 0 ? (
            categories.map((category) => (
              <li key={category.id}>
                <Link to={`/blog/category/${category.name}`}>
                  {category.name} <span>({category.count || 0})</span>
                </Link>
              </li>
            ))
          ) : (
            <p>No categories available</p>
          )}
        </ul>
      </div>

      <div className="sidebar-box">
        <h3 className="heading">Tags</h3>
        <ul className="tags">
          {tags.length > 0 ? (
            tags.map((tag) => (
              <li key={tag.id}>
                <a href="#">{tag.name}</a>
              </li>
            ))
          ) : (
            <p>No tags available</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default PostSidebar;
