import { ArticleList } from "../components/ArticleList";
import { SearchBar } from "../components/SearchBar";

export const HomePage = () => {
  return (
    <>
      <SearchBar />
      <div className="article-list">
        <ArticleList />
      </div>
    </>
  );
};
