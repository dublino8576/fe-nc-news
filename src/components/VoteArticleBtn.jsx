import * as Icon from "react-bootstrap-icons";
import { updateArticleVotesDown, updateArticleVotesUp } from "../utils/api";
import { useState } from "react";
export const VoteArticleBtn = ({ article, likesCount, setLikesCount }) => {
  const [errorLikes, setErrorLikes] = useState(null);
  const [errorDislikes, setErrorDislikes] = useState(null);
  const handleLike = () => {
    setLikesCount((likesCount) => likesCount + 1);
    setErrorLikes(null);
    const article_id = article.article_id;
    updateArticleVotesUp(article_id)
      .then(({ updatedArticle }) => {
        console.log("updated article: ", updatedArticle);
      })
      .catch((err) => {
        setLikesCount((likesCount) => likesCount - 1);
        setErrorLikes(err.message);
      });
  };

  const handleDislike = () => {
    setLikesCount((likesCount) => likesCount - 1);
    setErrorDislikes(null);
    const article_id = article.article_id;
    updateArticleVotesDown(article_id)
      .then(({ updatedArticle }) => {
        console.log("updated Article: ", updatedArticle);
      })
      .catch((err) => {
        setLikesCount((likesCount) => likesCount + 1);
        setErrorDislikes(err.message);
      });
  };

  return (
    <div>
      <div className="btn-group btn-group-toggle" data-toggle="buttons">
        <label className="btn btn-light" onClick={handleLike}>
          <Icon.HandThumbsUpFill
            size={20}
            color={errorLikes ? "red" : "grey"}
          />{" "}
          {likesCount >= 0 ? likesCount : null}
          {errorLikes ? "  " + errorLikes : null}
        </label>
        <label className="btn btn-light" onClick={handleDislike}>
          <Icon.HandThumbsDownFill
            size={20}
            color={errorDislikes ? "red" : "grey"}
          />{" "}
          {likesCount < 0 ? likesCount : null}
          {errorDislikes ? "  " + errorDislikes : null}
        </label>
      </div>
    </div>
  );
};
