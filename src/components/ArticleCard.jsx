import { HeartBtn } from "./HeartBtn";
import { Link, useLocation } from "react-router-dom";
import { VoteArticleBtn } from "./VoteArticleBtn";
import { dateFormat } from "../utils/dateFormat";

export const ArticleCard = ({ id, article, likesCount, setLikesCount }) => {
  //use location of the page to change behaviour of single article component
  const { pathname } = useLocation();
  //if in location /articles/:article_id no <Link> tag as already in the destination
  const isArticlePage = pathname.startsWith(`/articles/`);
  const created_at = article.created_at;
  const formattedDate = dateFormat(created_at);

  return (
    <li className="article-card" key={article.id}>
      {isArticlePage ? (
        <h1 className="article-title">{article.title}</h1>
      ) : (
        <Link to={`/articles/${id}`}>
          <h1 className="article-title">{article.title}</h1>
        </Link>
      )}

      {isArticlePage ? (
        <img
          src={article.article_img_url}
          alt={`article cover for ${article.title}`}
        />
      ) : (
        <Link to={`/articles/${id}`}>
          <img
            src={article.article_img_url}
            alt={`article cover for ${article.title}`}
          />
        </Link>
      )}

      {isArticlePage ? (
        <>
          <VoteArticleBtn
            id={id}
            article={article}
            likesCount={likesCount}
            setLikesCount={setLikesCount}
          />
          <HeartBtn />
        </>
      ) : (
        <HeartBtn />
      )}
      <p className="author">Author: {article.author}</p>
      {isArticlePage ? (
        <>
          <p className="article-body">{article.body}</p>{" "}
          <p>Date posted: {formattedDate}</p>
        </>
      ) : null}
    </li>
  );
};
