import { useEffect, useState } from "react";
import { fetchCommentsByArticleId } from "../utils/api";
import { CommentCard } from "./CommentCard";

export const CommentList = ({ article_id }) => {
  const [allComments, setAllComments] = useState([]);
  useEffect(() => {
    fetchCommentsByArticleId(article_id).then(({ comments }) => {
      setAllComments(comments);
    });
  }, []);

  return (
    <ol>
      {allComments.map((comment) => {
        return (
          <CommentCard
            key={comment.comment_id}
            id={comment.comment_id}
            comment={comment}
            article_id={article_id}
          />
        );
      })}
    </ol>
  );
};
