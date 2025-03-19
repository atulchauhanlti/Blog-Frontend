import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTags, createTag } from "../../../features/tags/tagsSlice";

const TagLists = () => {
  const dispatch = useDispatch();
  const { tags, status, error } = useSelector((state) => state.tags);

  const [showModal, setShowModal] = useState(false); 
  const [tagName, setTagName] = useState("");

  useEffect(() => {
    if (!tags.length) {
      dispatch(fetchTags());
    }
  }, [dispatch, tags.length]);

  const handleCreateTag = (e) => {
    e.preventDefault();
    if (tagName.trim()) {
      dispatch(createTag({ name: tagName }))
        .then(() => {
          setTagName(""); 
          setShowModal(false);
        })
        .catch((err) => console.error("Error creating tag:", err));
    }
  };

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Tag List</h2>
      <button
        className="btn btn-primary mb-3"
        onClick={() => setShowModal(true)}
      >
        + Add Tag
      </button>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Tag Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tags.map((tag, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{tag.name}</td>
              <td>
                <button className="btn btn-warning btn-sm me-2">Edit</button>
                <button className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <div
          className="modal show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Tag</h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={() => setShowModal(false)} 
                ></button>
              </div>
              <form onSubmit={handleCreateTag}>
                <div className="modal-body">
                  <div className="mb-3">
                    <label htmlFor="tagName" className="form-label">Tag Name</label>
                    <input
                      type="text"
                      id="tagName"
                      className="form-control"
                      value={tagName}
                      onChange={(e) => setTagName(e.target.value)}
                      placeholder="Enter tag name"
                      required
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setShowModal(false)} 
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">Add Tag</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TagLists;
