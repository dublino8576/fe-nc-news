import { HeartBtn } from "./HeartBtn";
import { Link } from "react-router-dom";
export const ArticleCard = ({ article }) => {
  return (
    <li className="article-card" key={article.id}>
      <Link to="/articles/:article_id">
        <h1 className="article-title">{article.title}</h1>
      </Link>
      <Link to="/articles/:article_id">
        <img src={article.article_img_url} />
      </Link>

      <HeartBtn />
      <p className="author">Author: {article.author}</p>
    </li>
  );
};
