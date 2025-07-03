import { useEffect, useState } from "react";
import { fetchDataPage } from "../../api/useSevice";
import ModalAddNew from "./ModalAddNew";
import ModalEditUser from "./ModalEditUser";
import edit from "../../assets/img/edit.png";
import trash from "../../assets/img/trash.png";
import { deletePosts } from "../../api/useSevice";

type User = {
  id: number;
  title: string;
  description: string;
  tags: string[];
};

export default function TableUser() {
  const [listUsers, setListUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [dataUserEdit, setDataUserEdit] = useState({});

  useEffect(() => {
    getUsers(currentPage);
  }, [currentPage]);

  const getUsers = async (page: number) => {
    let res = await fetchDataPage(page);
    if (res && res.data && res.data.posts) {
      setTotalUsers(res.data.total);
      setListUsers(res.data.posts);
      setTotalPages(res.data.total_page);
    }
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const handleUserAdded = () => {
    getUsers(currentPage);
  };

  type UserEditData = {
    id: string;
    title: string;
    description: string;
    tags: string[];
  };

  const handleEditUser = (updatedUser: UserEditData) => {
    setListUsers((prev) =>
      prev.map((user) =>
        user.id === Number(updatedUser.id)
          ? { ...user, ...updatedUser, id: Number(updatedUser.id) }
          : user
      )
    );
  };

  const handleEditUserModal = (user: User) => {
    setDataUserEdit(user);
    setShowEdit(true);
  };

  const handleDeleteUser = async (user: User) => {
    try {
      await deletePosts(
        user.id.toString(),
        user.title,
        user.description,
        JSON.stringify(user.tags)
      );
      getUsers(currentPage);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="tableuser-header">
        <button
          className="header_btn btn btn--secondary"
          onClick={() => setShowModal(true)}
        >
          Add new
        </button>
        <div className="tableuser-header__inputs">
          <input className="custom-input" placeholder="Title" />
          <input className="custom-input" placeholder="Tags" />
        </div>
      </div>
      <ModalAddNew
        show={showModal}
        onClose={() => setShowModal(false)}
        onUserAdded={handleUserAdded}
      />
      <ModalEditUser
        show={showEdit}
        onClose={() => {
          setShowEdit(false);
        }}
        dataUserEdit={dataUserEdit}
        onEditUser={handleEditUser}
      />

      <div style={{ padding: "24px" }}>
        <table className="table-custom">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Tags</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {listUsers &&
              listUsers.length > 0 &&
              listUsers.map((item, index) => (
                <tr key={`users-${index}`}>
                  <td>{JSON.stringify(item.id)}</td>
                  <td>{JSON.stringify(item.title)}</td>
                  <td>{JSON.stringify(item.description)}</td>
                  <td>{JSON.stringify(item.tags)}</td>
                  <td>
                    <button onClick={() => handleEditUserModal(item)}>
                      <img src={edit} />
                    </button>
                    <button
                      onClick={() => {
                        handleDeleteUser(item);
                      }}
                    >
                      <img src={trash} />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "24px 0",
        }}
      >
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => handlePageClick(i + 1)}
            style={{
              margin: "0 4px",
              padding: "8px 16px",
              border:
                currentPage === i + 1 ? "2px solid #000" : "1px solid #000",
              background: currentPage === i + 1 ? "#000" : "#fff",
              color: currentPage === i + 1 ? "#fff" : "#000",
              borderRadius: "4px",
              cursor: "pointer",
              fontWeight: currentPage === i + 1 ? "bold" : "normal",
            }}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </>
  );
}
