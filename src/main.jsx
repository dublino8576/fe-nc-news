import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { LoginProvider } from "./contexts/LoginContext.jsx";
import { AllArticlesProvider } from "./contexts/AllArticlesContext.jsx";

createRoot(document.getElementById("root")).render(
  <LoginProvider>
    <AllArticlesProvider>
      <BrowserRouter>
        <StrictMode>
          <App />
        </StrictMode>
      </BrowserRouter>
    </AllArticlesProvider>
  </LoginProvider>
);
