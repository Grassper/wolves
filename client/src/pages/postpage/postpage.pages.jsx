import React, { useEffect } from "react";
import "./postpage.styles.css";

import SocialMediaButtons from "react-social-media-buttons";

// importing redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// importing action
import {
  fetchPostAsyncStart,
  clearPostState,
} from "../../redux/individualPost/individualPost.actions";

import { deletePostAsyncStart } from "../../redux/post/post.actions";

import {
  updateEditor,
  toggleEditor,
  resetEditor,
} from "../../redux/editor/editor.actions";

// importing selectors
import { selectPost } from "../../redux/individualPost/individualPost.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

// importing off the self
import Skeleton from "react-loading-skeleton";

import CustomButton from "../../components/custom-button/custom-button.component";

const PostPage = ({
  post,
  match,
  fetchPost,
  history,
  clearPostState,
  currentUser,
  updateEditor,
  toggleEditor,
  resetEditor,
  deletePost,
}) => {
  useEffect(() => {
    clearPostState();
    fetchPost(match.params.postId);
  }, [fetchPost, match.params.postId, clearPostState]);

  if (!post) {
    return (
      <div>
        <div className="loader-Container-PostPage">
          <div className="loader-PostPage">
            <Skeleton count={1} height={300} />
            <Skeleton count={1} height={50} />
            <Skeleton count={1} height={50} />
            <Skeleton count={1} height={50} width={100} />
          </div>
        </div>
      </div>
    );
  }

  const editHandler = () => {
    resetEditor();
    updateEditor({
      _id: post._id,
      title: post.title,
      description: post.description,
      imageUrl: post.imageUrl,
    });
    toggleEditor();
  };

  const deleteHandler = () => {
    deletePost(post._id, currentUser.token);
    history.push(`/`);
  };

  return (
    <div className="postPageContainer">
      <div
        className="postPage-image"
        style={{
          backgroundImage: `URL(${post.imageUrl})`,
        }}
      ></div>
      <div className="postPage-content">
        <p className="postPage-title" onClick={() => {}}>
          {post.title}
        </p>
        <p className="postPage-description">{post.description}</p>
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
        {currentUser ? (
          <div className="PostPageButtonContainer">
            <CustomButton type="button" onClick={editHandler}>
              Edit Post
            </CustomButton>
            <div className="headerSeparator"></div>
            <CustomButton type="button" onClick={deleteHandler} inverted>
              delete Post
            </CustomButton>
          </div>
        ) : null}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  post: selectPost,
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPost: (id) => dispatch(fetchPostAsyncStart(id)),
  clearPostState: () => dispatch(clearPostState()),
  updateEditor: (content) => dispatch(updateEditor(content)),
  toggleEditor: () => dispatch(toggleEditor()),
  resetEditor: () => dispatch(resetEditor()),
  deletePost: (id, token) => dispatch(deletePostAsyncStart(id, token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
