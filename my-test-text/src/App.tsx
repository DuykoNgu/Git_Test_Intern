import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./components/page/SignIn";
import HomePage from "./components/page/HomePage";
import { UserContext } from "./hooks/userContext.tsx";
import ProfilePage from "./components/page/ProfilePage.tsx";
const App = () => {
  const { user } = useContext(UserContext);
  console.log("Check>>", user);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/test-user" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
