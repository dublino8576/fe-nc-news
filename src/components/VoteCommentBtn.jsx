import { useState } from "react";
import * as Icon from "react-bootstrap-icons";
export const VoteCommentBtn = ({ comment }) => {
  const [isThumbsUp, setIsThumbsUp] = useState(comment.votes >= 0);

  return (
    <div className="btn-group btn-group-toggle" data-toggle="buttons">
      <label className="btn btn-light">
        <Icon.HandThumbsUpFill size={20} color="grey" />{" "}
        {isThumbsUp ? comment.votes : null}
      </label>
      <label className="btn btn-light">
        <Icon.HandThumbsDownFill size={20} color="grey" />{" "}
        {!isThumbsUp ? comment.votes : null}
      </label>
    </div>
  );
};
