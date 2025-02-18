import { useEffect, useState } from "react";
import { fetchArticles } from "../utils/api";
import { ArticleCard } from "./ArticleCard";
import { LoadingSpinner } from "./LoadingSpinner";
export const ArticleList = () => {
  const [allArticles, setAllArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArticles().then(({ articles }) => {
      setIsLoading(false);
      setAllArticles(articles);
    });
  }, []);
  return (
    <>
      {isLoading ? (
        <>
          <LoadingSpinner /> <p>Loading...</p>
        </>
      ) : (
        <ol className="article-list">
          {allArticles.map((article) => {
            return (
              <ArticleCard
                key={article.article_id}
                id={article.article_id}
                article={article}
              />
            );
          })}
        </ol>
      )}
    </>
  );
};
