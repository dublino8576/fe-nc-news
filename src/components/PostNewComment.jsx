import { useContext, useState } from "react";
import { postCommentByArticleId } from "../utils/api";
import { LoginContext } from "../contexts/LoginContext";
import { useParams } from "react-router-dom";
export const PostNewComment = ({ allComments, setAllComments }) => {
  const [newComment, setNewComment] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isPendingPost, setIsPendingPost] = useState(false);
  const { loginInfo, setLoginInfo } = useContext(LoginContext);
  const authorName = loginInfo.username;
  let { article_id } = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSuccess(false);
    setIsPendingPost(true);
    const postedCommentInState = {
      body: newComment,
      author: authorName,
      article_id: article_id,
      votes: 0,
      created_at: new Date(),
    };

    setAllComments((allComments) => {
      return [postedCommentInState, ...allComments];
    });
    postCommentByArticleId(authorName, article_id, newComment)
      .then(({ newComment }) => {
        console.log("New Comment post request: ", newComment);
        setIsSuccess(true);
        setIsPendingPost(false);
      })
      .catch((err) => {
        setIsSuccess(false);
        console.log(err);
      })
      .finally(() => {
        setIsPendingPost(false);
      });

    setNewComment("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label className="label-post">
        Add a new comment:{" "}
        <textarea
          value={newComment}
          onChange={(event) => setNewComment(event.target.value)}
          disabled={isPendingPost}
          required
        ></textarea>
      </label>
      <button type="submit" className="btn btn-light post">
        {isPendingPost ? "Posting..." : "Post comment"}
      </button>
      {isSuccess && !newComment && (
        <p className="success">Posted successfully!!</p>
      )}
    </form>
  );
};
