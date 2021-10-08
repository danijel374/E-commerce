import React from "react";

import "./SingInAndSingUp.scss";

import SignIn from "../../components/sign-in/SignIn";
import SignUp from "../../components/sign-up/SignUp";

export default function SingInAndSingUp() {
  return (
    <div className="sign-in-and-sing-up">
      <SignIn />
      <SignUp />
    </div>
  );
}
