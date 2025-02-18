import * as Icon from "react-bootstrap-icons";
export const VoteBtn = () => {
  return (
    <div className="btn-group btn-group-toggle" data-toggle="buttons">
      <label className="btn btn-light">
        <Icon.HandThumbsUpFill size={20} color="grey" />
      </label>
      <label className="btn btn-light">
        <Icon.HandThumbsDownFill size={20} color="grey" />
      </label>
    </div>
  );
};
