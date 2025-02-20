import { useEffect, useState } from "react";
import { fetchCommentsByArticleId } from "../utils/api";
import { CommentCard } from "./CommentCard";
import { PostNewComment } from "./PostNewComment";
import { LoadingSpinner } from "./LoadingSpinner";

export const CommentList = ({ article_id }) => {
  const [allComments, setAllComments] = useState([]);
  const [isCommentDeleted, setIsCommentDeleted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    fetchCommentsByArticleId(article_id).then(({ comments }) => {
      setAllComments(comments);
    });
  }, [isCommentDeleted]);

  return (
    <div className="comment-list">
      <PostNewComment
        allComments={allComments}
        setAllComments={setAllComments}
      />
      {isCommentDeleted && (
        <p className="success">Comment deleted successfully!</p>
      )}
      {isLoading ? (
        <LoadingSpinner />
      ) : (
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
                isCommentDeleted={isCommentDeleted}
                setIsCommentDeleted={setIsCommentDeleted}
                isLoading={setIsLoading}
                setIsLoading={setIsLoading}
              />
            );
          })}
        </ol>
      )}
    </div>
  );
};
