import { useEffect, useState } from "react";
import { fetchUserInfo } from "../utils/api";
import { dateFormat } from "../utils/dateFormat";
import { VoteCommentBtn } from "./VoteCommentBtn";

export const CommentCard = ({
  id,
  comment,
  article_id,
  allComments,
  setAllComments,
}) => {
  const [userImg, setUserImg] = useState("");
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
      </div>
    </li>
  );
};
