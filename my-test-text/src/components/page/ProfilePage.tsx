import { useContext } from "react";
import TableUser from "../profile/TableUser";
import { Link, useNavigate } from "react-router-dom";
import { logoutApi } from "../../api/useSevice";
import { UserContext } from "../../hooks/userContext";

const ProfilePage = () => {
  const { logout } = useContext(UserContext);

  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logoutApi();
      logout();
      navigate("/");
    } catch (error) {}
  };
  return (
    <div className="profile-layout">
      <aside className="sidebar">
        <Link to="/" className="logo-link">
          <span className="dot_purple" />
          <span className="dot_pink" />
        </Link>
        <nav className="sidebar-menu">
          <Link to="/posts" className="sidebar-link">
            Posts
          </Link>
          <Link
            to="#"
            className="sidebar-link"
            onClick={async (e) => {
              e.preventDefault();
              await handleLogout();
            }}
          >
            Logout
          </Link>
        </nav>
      </aside>
      <main className="profile-content">
        <TableUser />
      </main>
    </div>
  );
};

export default ProfilePage;
