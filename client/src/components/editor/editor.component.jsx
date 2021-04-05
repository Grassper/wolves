import React, { useState } from "react";
import "./editor.styles.css";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

// importing redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// importing selectors
import { selectCurrentUser } from "../../redux/user/user.selectors";

// importing actions
import { toggleEditor } from "../../redux/editor/editor.actions";
import { addPostAsyncStart } from "../../redux/post/post.actions";

const Editor = ({ currentUser, toggleEditor, addPost }) => {
  const [postContent, setPostContent] = useState({
    title: "",
    description: "",
    imageUrl: "",
  });

  const { title, description, imageUrl } = postContent;

  const handleSubmit = async (event) => {
    event.preventDefault();
    addPost(
      { title, author: currentUser.name, description, imageUrl },
      currentUser.token
    );
    toggleEditor();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPostContent({ ...postContent, [name]: value });
  };

  return (
    <div className="editor-container">
      <div className="editor">
        <h2 className="title">Add post to gallery</h2>
        <span>Make sure to add valid url</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
            label="Title"
            required
          />
          <FormInput
            type="text"
            name="description"
            value={description}
            onChange={handleChange}
            label="Description"
            required
          />
          <FormInput
            type="text"
            name="imageUrl"
            value={imageUrl}
            onChange={handleChange}
            label="Image Url"
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Let's Post!</CustomButton>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleEditor: () => dispatch(toggleEditor()),
  addPost: (obj, token) => dispatch(addPostAsyncStart(obj, token)),
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
