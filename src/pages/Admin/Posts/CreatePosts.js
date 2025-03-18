import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { fetchCategories } from "../../../features/categories/categoriesSlice";
import { fetchTags } from "../../../features/tags/tagsSlice";
import { createPost, resetCreateStatus } from "../../../features/posts/postsSlice";

const CreatePosts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { categories, status: categoriesStatus } = useSelector((state) => state.categories);
  const { tags, status: tagsStatus } = useSelector((state) => state.tags);
  const { status: createStatus, error: createError } = useSelector((state) => state.posts);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    categoryId: "",
    tagIds: [],
    imageFile: null,
  });

  useEffect(() => {
    dispatch(resetCreateStatus());
  }, [dispatch]);

  useEffect(() => {
    if (categoriesStatus === "idle") {
      dispatch(fetchCategories());
    }
    if (tagsStatus === "idle") {
      dispatch(fetchTags());
    }

    if (isSubmitted && createStatus === "succeeded") {
      navigate("/posts", { state: { refreshPosts: true } });
    }
  }, [categoriesStatus, tagsStatus, createStatus, isSubmitted, dispatch, navigate]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleTagsChange = (selectedOptions) => {
    const tagIds = selectedOptions.map((option) => option.value);
    setFormData((prev) => ({
      ...prev,
      tagIds,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      imageFile: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true); 
    dispatch(createPost(formData));
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Create a New Post</h1>
      {createStatus === "failed" && <p className="text-danger">{createError}</p>}
      {createStatus === "succeeded" && <p className="text-success">Post created successfully!</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter the post title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">Content</label>
          <textarea
            className="form-control"
            id="content"
            rows="5"
            value={formData.content}
            onChange={handleChange}
            placeholder="Enter the post content"
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="categoryId" className="form-label">Category</label>
          <select
            className="form-select"
            id="categoryId"
            value={formData.categoryId}
            onChange={handleChange}
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="tagIds" className="form-label">Tags</label>
          <Select
            id="tagIds"
            isMulti
            options={tags.map((tag) => ({ value: tag.id, label: tag.name }))}
            onChange={handleTagsChange}
            placeholder="Select tags"
            className="basic-multi-select"
            classNamePrefix="select"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="imageFile" className="form-label">Upload Image</label>
          <input
            type="file"
            className="form-control"
            id="imageFile"
            onChange={handleFileChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default CreatePosts;
