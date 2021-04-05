import React, { useState, useEffect } from "react";
import "./postpage.styles.css";

// importing redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// importing action
import {
  fetchPostAsyncStart,
  clearPostState,
} from "../../redux/individualPost/individualPost.actions";
import {
  deletePostAsyncStart,
  addCommentAsyncStart,
} from "../../redux/post/post.actions";
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
import SocialMediaButtons from "react-social-media-buttons";

// importing components
import CustomButton from "../../components/custom-button/custom-button.component";
import FormInput from "../../components/form-input/form-input.component";
import Comment from "../../components/comment/comment.component";

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
  addComment,
}) => {
  useEffect(() => {
    clearPostState();
    fetchPost(match.params.postId);
  }, [fetchPost, match.params.postId, clearPostState]);

  const [comments, setComment] = useState({
    comment: "",
  });

  const { comment } = comments;

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    addComment(post._id, { content: comment });
    setComment({
      comment: "",
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setComment({ ...comments, [name]: value });
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
        <div className="separator"></div>
        <SocialMediaButtons
          links={[
            `https://twitter.com/intent/tweet?text=${post.description} - ${post.author}`,
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
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="comment"
          value={comment}
          onChange={handleChange}
          label="Comment"
          required
        />
      </form>
      {post.comments.length !== 0 ? (
        <div className="commentsContainer">
          {post.comments.map((comment) => {
            return <Comment key={comment.id} content={comment.content} />;
          })}
        </div>
      ) : null}
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
  addComment: (id, obj) => dispatch(addCommentAsyncStart(id, obj)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
