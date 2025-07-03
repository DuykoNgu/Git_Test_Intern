import React, { createContext, useState } from "react";
import { loginApi } from "../api/useSevice";

interface User {
  username: string;
  auth: boolean;
}

interface UserContextType {
  user: User;
  loginContext: (username: string) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType>({
  user: { username: "", auth: false },
  loginContext: async () => {},
  logout: () => {},
});

const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User>({ username: "", auth: false });

  const loginContext = async (username: string) => {
    try {
      const res = await loginApi(username);
      const accessToken = res.data?.accessToken;
      const refreshToken = res.data?.refreshToken;
      if (accessToken && refreshToken) {
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        setUser({ username, auth: true });
      } else {
        console.error("Không lấy được token từ response:", res);
      }
    } catch (error) {
      console.error("Lỗi đăng nhập:");
    }
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setUser({ username: "", auth: false });
  };

  return (
    <UserContext.Provider value={{ user, loginContext, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
