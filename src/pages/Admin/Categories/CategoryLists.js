import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, createCategory } from "../../../features/categories/categoriesSlice";

const CategoryLists = () => {
  const dispatch = useDispatch();
  const { categories, status, error } = useSelector((state) => state.categories);

  const [showModal, setShowModal] = useState(false); // Modal visibility state
  const [categoryName, setCategoryName] = useState(""); // New category input state

  // Fetch categories on component mount
  useEffect(() => {
    if (!categories.length) {
      dispatch(fetchCategories());
    }
  }, [dispatch, categories.length]);

  const handleCreateCategory = (e) => {
    e.preventDefault();
    if (categoryName.trim()) {
      dispatch(createCategory({ name: categoryName }))
        .then(() => {
          console.log("Category created successfully!");
          setCategoryName(""); // Clear input field
          setShowModal(false); // Close modal after submission
        })
        .catch((err) => console.error("Error creating category:", err));
    }
  };

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Category List</h2>
      <button
        className="btn btn-primary mb-3"
        onClick={() => {
          console.log("Opening modal...");
          setShowModal(true); // Ensure this is triggered
        }}
      >
        + Add Category
      </button>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Category Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{category.name}</td>
              <td>
                <button className="btn btn-warning btn-sm me-2">Edit</button>
                <button className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add Category Modal */}
      {showModal && (
        <div
          className="modal show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Category</h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={() => {
                    console.log("Closing modal...");
                    setShowModal(false); // Ensure this is triggered
                  }}
                ></button>
              </div>
              <form onSubmit={handleCreateCategory}>
                <div className="modal-body">
                  <div className="mb-3">
                    <label htmlFor="categoryName" className="form-label">Category Name</label>
                    <input
                      type="text"
                      id="categoryName"
                      className="form-control"
                      value={categoryName}
                      onChange={(e) => setCategoryName(e.target.value)}
                      placeholder="Enter category name"
                      required
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => {
                      console.log("Closing modal from cancel button...");
                      setShowModal(false);
                    }}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">Add Category</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryLists;
