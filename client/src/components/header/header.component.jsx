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

import CustomButton from "../custom-button/custom-button.component";

const Header = ({ currentUser, signOut }) => {
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
        <CustomButton type="button" onClick={signOutHandler}>
          Log out
        </CustomButton>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signOut: (token) => dispatch(userSignOutAsyncStart(token)),
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
