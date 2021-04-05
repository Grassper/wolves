import React from "react";
import "./postCard.styles.css";
import SocialMediaButtons from "react-social-media-buttons";



const PostCard = ({ _id, title, description, imageUrl}) => {
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
              console.log(_id);
            }}
          >
            {title.substring(0, 60)}..
          </p>
          <p className="post-description">{description.substring(0, 80)}..</p>
          <SocialMediaButtons
            links={[
              "https://www.facebook.com/facebook",
              "https://twitter.com/Twitter",
              "https://www.instagram.com/instagram/",
              "https://www.linkedin.com/company/linkedin/",
            ]}
            buttonStyle={{
              width: "25px",
              height: "25px",
              margin: "0px 10px",
              backgroundColor: "#ffffff",
              borderRadius: "50%",
              border: "2px solid #000000",
            }}
            iconStyle={{ color: "#000000" }}
            openNewTab={true}
          />
        </div>
      </div>
    </div>
  );
};

export default PostCard;
