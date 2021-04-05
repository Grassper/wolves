import React, { useEffect } from "react";
import "./postpage.styles.css";

import SocialMediaButtons from "react-social-media-buttons";

// importing redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// importing action
import { fetchPostAsyncStart,clearPostState} from "../../redux/individualPost/individualPost.actions";

// importing selectors
import {selectPost} from "../../redux/individualPost/individualPost.selectors"

// importing off the self
import Skeleton from "react-loading-skeleton";

const PostPage = ({
  post,
  match,
  fetchPost,
  clearPostState
}) => {
  useEffect(() => {
    clearPostState()
    fetchPost(match.params.postId);
  }, [fetchPost,match.params.postId,clearPostState]);


  if(!post){
    return(
      <div>
      <div className="loader-Container-PostPage">
        <div className="loader-PostPage">
          <Skeleton count={1} height={300} />
          <Skeleton count={1} height={50} />
          <Skeleton count={1} height={50} />
          <Skeleton count={1} height={50}  width={100}/>
        </div>
      </div>
    </div>
    )
  }

  return (
    <div className="postPageContainer">
      <div
        className="postPage-image"
        style={{
          backgroundImage: `URL(
            https://images.unsplash.com/photo-1448375240586-882707db888b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80
            )`,
        }}
      ></div>
      <div className="postPage-content">
        <p className="postPage-title" onClick={() => {}}>
          {post.title}
        </p>
        <p className="postPage-description">
          {post.description}
        </p>
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
  );
};

const mapStateToProps = createStructuredSelector({
  post:selectPost
})

const mapDispatchToProps = (dispatch) => ({
  fetchPost: (id) => dispatch(fetchPostAsyncStart(id)),
  clearPostState: () => dispatch(clearPostState())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
