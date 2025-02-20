import { useEffect, useState } from "react";
import { fetchCommentsByArticleId } from "../utils/api";
import { CommentCard } from "./CommentCard";
import { PostNewComment } from "./PostNewComment";

export const CommentList = ({ article_id }) => {
  const [allComments, setAllComments] = useState([]);

  useEffect(() => {
    fetchCommentsByArticleId(article_id).then(({ comments }) => {
      setAllComments(comments);
    });
  }, []);

  return (
    <div className="comment-list">
      <PostNewComment
        allComments={allComments}
        setAllComments={setAllComments}
      />
      <ol>
        {allComments.map((comment) => {
          return (
            <CommentCard
              key={comment.comment_id}
              id={comment.comment_id}
              comment={comment}
              article_id={article_id}
              allComments={allComments}
              setAllComments={setAllComments}
            />
          );
        })}
      </ol>
    </div>
  );
};
