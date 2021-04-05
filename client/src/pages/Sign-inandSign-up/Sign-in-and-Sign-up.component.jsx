import React from "react";
import "./Sign-in-and-Sign-up.styles.scss";
import SignIn from "../../components/Sign-in/Sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const SignInAndSignUP = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUP;
