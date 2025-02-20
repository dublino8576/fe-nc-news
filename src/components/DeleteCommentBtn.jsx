import * as Icon from "react-bootstrap-icons";
import { deleteCommentByCommentId } from "../utils/api";
import { useState } from "react";
export const DeleteCommentBtn = ({
  comment,
  isCommentDeleted,
  setIsCommentDeleted,
  isLoading,
  setIsLoading,
}) => {
  const comment_idd = comment.comment_id;
  const handleClick = () => {
    setIsLoading(true);
    setIsCommentDeleted(false);
    deleteCommentByCommentId(comment_idd)
      .then((comment) => {
        setIsCommentDeleted(true);
        console.log("comment deleted!");
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <button
      type="button"
      className="btn btn-light btn-sm save-btn"
      onClick={handleClick}
    >
      <Icon.Bucket color="grey" /> Delete
    </button>
  );
};
