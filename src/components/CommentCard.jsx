import { useContext, useEffect, useState } from "react";
import { fetchUserInfo } from "../utils/api";
import { dateFormat } from "../utils/dateFormat";
import { VoteCommentBtn } from "./VoteCommentBtn";
import { DeleteCommentBtn } from "./DeleteCommentBtn";
import { LoginContext } from "../contexts/LoginContext";
export const CommentCard = ({
  id,
  comment,
  article_id,
  allComments,
  setAllComments,
  isCommentDeleted,
  setIsCommentDeleted,
  isLoading,
  setIsLoading,
}) => {
  const [userImg, setUserImg] = useState("");
  const { loginInfo, setLoginInfo } = useContext(LoginContext);

  useEffect(() => {
    fetchUserInfo().then(({ users }) => {
      users.forEach((user) => {
        if (user.username === comment.author) {
          setUserImg(user.avatar_url);
        }
      });
    });
  }, []);

  const commentDate = comment.created_at;
  const formattedDate = dateFormat(commentDate);
  return (
    <li key={comment.comment_id}>
      <div className="post">
        <p className="avatar">
          <img
            src={userImg}
            alt="User's profile picture"
            className="comments comment-img"
          />
        </p>
        <strong className="comments post-text">
          {comment.author}
          <span className="says"> says:</span>
        </strong>
        <p className="post-text">{comment.body}</p>
        <p className="post-text date-votes">{formattedDate}</p>
        <VoteCommentBtn comment={comment} />
        {comment.author === loginInfo.username && (
          <DeleteCommentBtn
            comment={comment}
            isCommentDeleted={isCommentDeleted}
            setIsCommentDeleted={setIsCommentDeleted}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
        )}
      </div>
    </li>
  );
};
