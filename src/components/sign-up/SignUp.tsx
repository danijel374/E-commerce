import React, { Component, FormEvent } from "react";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./SignUp.scss";

import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";
import { createUserWithEmailAndPassword } from "@firebase/auth";

export default class SignUp extends Component {
  state = { displayName: "", email: "", password: "", confirmPassword: "" };

  handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) alert("Passwords don't match");

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(`My error ${error}`);
    }
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            handleChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            handleChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}
