import React, { useEffect, useState } from "react";
import { editPost } from "../../api/useSevice";

interface UserEditData {
  id: string;
  title: string;
  description?: string;
  tags?: string;
}

interface ModalEditUserProps {
  show: boolean;
  onClose: () => void;
  dataUserEdit: UserEditData;
  onEditUser: (user: UserEditData) => void; // thêm prop này
}

export default function ModalEditUser({
  show,
  onClose,
  dataUserEdit,
  onEditUser, // thêm prop này
}: ModalEditUserProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");

  const handleEditUser = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await editPost(dataUserEdit.id, title, description, tags);
      const updatedUser = {
        ...dataUserEdit,
        title,
        description,
        tags,
      };
      onEditUser(updatedUser); // gọi callback để cập nhật bảng
      onClose();
    } catch (error) {
      console.error("Lỗi khi cập nhật:", error);
      alert("Có lỗi xảy ra khi cập nhật.");
    }
  };

  useEffect(() => {
    if (show) {
      setTitle(dataUserEdit.title);
      setDescription(dataUserEdit.description || "");
      setTags(dataUserEdit.tags || "");
    }
  }, [dataUserEdit, show]);

  console.log("check >>", dataUserEdit);

  if (!show) return null;
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <h2>Edit User</h2>
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
            onClick={handleEditUser}
          >
            Edit
          </button>
        </form>
      </div>
    </div>
  );
}
