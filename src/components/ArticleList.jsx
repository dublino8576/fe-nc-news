import { useContext, useEffect } from "react";
import { fetchArticles } from "../utils/api";
import { AllArticlesContext } from "../contexts/AllArticlesContext";
import { ArticleCard } from "./ArticleCard";

export const ArticleList = () => {
  const { allArticles, setAllArticles } = useContext(AllArticlesContext);

  useEffect(() => {
    fetchArticles().then(({ articles }) => {
      console.log(articles);
      setAllArticles(articles);
    });
  }, []);
  return (
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
  );
};
