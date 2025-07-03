import { useContext } from "react";
import { Link } from "react-router";

import { useNavigate } from "react-router";
import { UserContext } from "../../hooks/userContext";
import { logoutApi } from "../../api/useSevice";

const Header = () => {
  const { logout, user } = useContext(UserContext);
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logoutApi();
      logout();
      navigate("/");
    } catch (error) {}
  };

  return (
    <header className="header">
      <Link to="/" className="logo-link">
        <span className="dot_purple" />
        <span className="dot_pink" />
      </Link>

      {user.auth ? (
        <div className="button-group">
          <Link to="/test-user" className="header_btn btn btn--secondary">
            Profile !
          </Link>
          <Link
            to="#"
            onClick={() => {
              handleLogout();
            }}
            className="header_btn btn btn--secondary"
          >
            Log Out !
          </Link>
        </div>
      ) : (
        <Link to="/signin" className="header_btn btn btn--secondary">
          Sign In
          <span className="btn_icon material-icons">trending_flat</span>
        </Link>
      )}
    </header>
  );
};

export default Header;
