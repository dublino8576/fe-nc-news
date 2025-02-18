import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleById } from "../utils/api";
import { ArticleCard } from "../components/ArticleCard";
import { LoadingSpinner } from "../components/LoadingSpinner";

export const ArticlePage = ({}) => {
  let { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArticleById(article_id).then(({ article }) => {
      setIsLoading(false);
      setArticle(article);
    });
  }, []);
  return (
    <div className="article-page">
      {isLoading ? (
        <>
          <LoadingSpinner />
          <p>Loading...</p>
        </>
      ) : (
        <ArticleCard article_id={article_id} article={article} />
      )}
    </div>
  );
};
