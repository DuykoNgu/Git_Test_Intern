import React, { useState } from "react";
import { postCreateUser } from "../../api/useSevice";

interface ModalAddNewProps {
  show: boolean;
  onClose: () => void;
  onUserAdded: () => void;
}

export default function ModalAddNew({
  show,
  onClose,
  onUserAdded,
}: ModalAddNewProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");

  const handleSaveUser = async (event: React.FormEvent) => {
    event.preventDefault();
    let res = await postCreateUser(title, description, tags);
    console.log("Check", res);
    if (res) {
      setTitle("");
      setDescription("");
      setTags("");
      onClose();
      onUserAdded();
      console.log("Nice");
    }
  };

  if (!show) return null;
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <h2>Add New User</h2>
        <form>
          <div className="modal-group">
            <label>Title</label>
            <input
              type="text"
              placeholder="Enter title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>
          <div className="modal-group">
            <label>Description</label>
            <input
              type="text"
              placeholder="Enter description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </div>
          <div className="modal-group">
            <label>Tags</label>
            <input
              type="text"
              placeholder="Enter tags"
              value={tags}
              onChange={(event) => setTags(event.target.value)}
            />
          </div>
          <button
            type="submit"
            className="modal-submit"
            onClick={handleSaveUser}
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
}
