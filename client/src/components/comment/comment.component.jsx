import React from "react";
import "./comment.styles.css";

// importing off the self
import Skeleton from "react-loading-skeleton";

const Comment = ({content}) => {
  return (
    <div className="comment">
      <Skeleton circle={true} height={50} width={50} />
      <p className="comment-content">{content}</p>
    </div>
  );
};

export default Comment;
