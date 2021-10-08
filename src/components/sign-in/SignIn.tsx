import React, { Component, FormEvent } from "react";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import "./SignIn.scss";

import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";
import { signInWithEmailAndPassword } from "@firebase/auth";

export default class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.error(`Mine ${error}`);
    }

    this.setState({ email: "", password: "" });
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    this.setState((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="email"
            value={this.state.email}
            required
            handleChange={this.handleChange}
            label="Email"
            id="email"
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
            label="Password"
            id="password"
          />

          <div className="buttons">
            <CustomButton type="submit">Sign in </CustomButton>
            <CustomButton
              type="button"
              onClick={signInWithGoogle}
              isGoogleSignIn
            >
              Sign in With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
