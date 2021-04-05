import React from "react";
import "./header.styles.css";

import { Link } from "react-router-dom";

// importing redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// importing selectors
import { selectCurrentUser } from "../../redux/user/user.selectors";

// importing actions
import { userSignOutAsyncStart } from "../../redux/user/user.actions";
import { toggleEditor } from "../../redux/editor/editor.actions";

import CustomButton from "../custom-button/custom-button.component";

const Header = ({ currentUser, signOut,toggleEditor }) => {
  const signOutHandler = () => {
    signOut(currentUser.token);
  };
  return (
    <div className="headerContainer">
      <Link className="header" to="/">
        Photofolio.
      </Link>
      {!currentUser ? (
        <Link to="/signin" className="headerSignIn">
          Log in
        </Link>
      ) : (
        <div className="headerButtonContainer">
          <CustomButton type="button" onClick={toggleEditor} inverted>
            Add Post
          </CustomButton>
          <div className="headerSeparator"></div>
          <CustomButton type="button" onClick={signOutHandler}>
            Log out
          </CustomButton>
        </div>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signOut: (token) => dispatch(userSignOutAsyncStart(token)),
  toggleEditor: () => dispatch(toggleEditor())
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
