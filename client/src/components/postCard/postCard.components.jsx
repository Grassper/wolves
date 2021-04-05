import React from "react";
import "./postCard.styles.css";
import SocialMediaButtons from "react-social-media-buttons";
import { withRouter } from "react-router-dom";

const PostCard = ({ _id, title, description, imageUrl, history,author}) => {
  return (
    <div className="post">
      <div className="post-card">
        <div
          className="post-image"
          style={{
            backgroundImage: `URL(${imageUrl})`,
          }}
        ></div>
        <div className="post-content">
          <p
            className="post-title"
            onClick={() => {
              history.push(`/${_id}`)
            }}
          >
            {title.substring(0, 60)}..
          </p>
          <p className="post-description">{description.substring(0, 80)}..</p>
          <SocialMediaButtons
            links={[
              `https://twitter.com/intent/tweet?text=${description} - ${author}`,
            ]}
            buttonStyle={{
              width: "50px",
              height: "50px",
              margin: "0px 10px",
              backgroundColor: "#ffffff",
              borderRadius: "50%",
              border: "2px solid #1DA1F2",
            }}
            iconStyle={{ color: "#1DA1F2" }}
            openNewTab={true}
          />
        </div>
      </div>
    </div>
  );
};

export default withRouter(PostCard);
