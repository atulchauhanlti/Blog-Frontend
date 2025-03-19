import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, createCategory, editCategory, deleteCategory } from "../../../features/categories/categoriesSlice";

const CategoryLists = () => {
  const dispatch = useDispatch();
  const { categories, status, error } = useSelector((state) => state.categories);

  const [showModal, setShowModal] = useState(false); 
  const [categoryName, setCategoryName] = useState(""); 
  const [editingCategory, setEditingCategory] = useState(null); 

  useEffect(() => {
    if (!categories.length) {
      dispatch(fetchCategories());
    }
  }, [dispatch, categories.length]);

  const handleCreateOrEditCategory = (e) => {
    e.preventDefault();
    if (categoryName.trim()) {
      if (editingCategory) {
        dispatch(editCategory({ id: editingCategory.id, updatedData: { name: categoryName } }))
          .then(() => {
            console.log("Category updated successfully!");
            resetForm();
          })
          .catch((err) => console.error("Error updating category:", err));
      } else {
        dispatch(createCategory({ name: categoryName }))
          .then(() => {
            console.log("Category created successfully!");
            resetForm();
          })
          .catch((err) => console.error("Error creating category:", err));
      }
    }
  };

  const handleDeleteCategory = (id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      dispatch(deleteCategory(id))
        .then(() => console.log("Category deleted successfully!"))
        .catch((err) => console.error("Error deleting category:", err));
    }
  };

  const resetForm = () => {
    setCategoryName("");
    setEditingCategory(null);
    setShowModal(false);
  };

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Category List</h2>
      <button
        className="btn btn-primary mb-3"
        onClick={() => {
          setShowModal(true);
          setEditingCategory(null);
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
            <tr key={category.id}>
              <td>{index + 1}</td>
              <td>{category.name}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => {
                    setEditingCategory(category);
                    setCategoryName(category.name);
                    setShowModal(true);
                  }}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDeleteCategory(category.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {showModal && (
        <div
          className="modal show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {editingCategory ? "Edit Category" : "Add Category"}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={resetForm}
                ></button>
              </div>
              <form onSubmit={handleCreateOrEditCategory}>
                <div className="modal-body">
                  <div className="mb-3">
                    <label htmlFor="categoryName" className="form-label">
                      Category Name
                    </label>
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
                    onClick={resetForm}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    {editingCategory ? "Save Changes" : "Add Category"}
                  </button>
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
