import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import { HomePage } from "./Pages/HomePage";
import { ArticlePage } from "./Pages/ArticlePage";
import { TopicsPage } from "./Pages/TopicsPage";
import { LoginPage } from "./Pages/LoginPage";
import { MyProfilePage } from "./Pages/MyProfilePage";
import { LoginProvider } from "./contexts/LoginContext";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <LoginProvider>
      <NavBar isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles/:article_id" element={<ArticlePage />} />
        <Route path="/topics" element={<TopicsPage />} />
        <Route
          path="/login"
          element={
            <LoginPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          }
        />
        <Route path="/myProfile" element={<MyProfilePage />} />
      </Routes>
    </LoginProvider>
  );
}

export default App;
