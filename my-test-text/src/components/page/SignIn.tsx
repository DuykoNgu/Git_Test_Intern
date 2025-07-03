import React from "react";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";

import { useNavigate } from "react-router-dom";
import { UserContext } from "../../hooks/userContext";

export default function SignIn() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const { loginContext } = useContext(UserContext);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await loginContext(userName);
      navigate("/");
    } catch (error) {
      console.error("Lỗi đăng nhập:", error);
    }
  };
  return (
    <div className="container wrapper">
      <div className="header">
        <Link to="/" className="logo-link">
          <span className="dot_purple" />
          <span className="dot_pink" />
        </Link>
      </div>
      <form className="signin-form">
        <h1>Sign In</h1>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <button onClick={handleSubmit} type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
}
