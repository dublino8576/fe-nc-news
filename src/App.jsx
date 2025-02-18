import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import { HomePage } from "./Pages/HomePage";
import { ArticlePage } from "./Pages/ArticlePage";
import { TopicsPage } from "./Pages/TopicsPage";
import { LoginPage } from "./Pages/LoginPage";
import { MyProfilePage } from "./Pages/MyProfilePage";
import { LoginProvider } from "./contexts/LoginContext";

function App() {
  return (
    <div>
      <LoginProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/articles/:article_id" element={<ArticlePage />} />
          <Route path="/topics" element={<TopicsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/myProfile" element={<MyProfilePage />} />
        </Routes>
      </LoginProvider>
    </div>
  );
}

export default App;
