import { createContext, useState } from "react";

export const AllArticlesContext = createContext();

export const AllArticlesProvider = ({ children }) => {
  const [allArticles, setAllArticles] = useState([]);
  return (
    <AllArticlesContext.Provider value={{ allArticles, setAllArticles }}>
      {children}
    </AllArticlesContext.Provider>
  );
};
