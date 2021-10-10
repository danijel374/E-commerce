import React, { MouseEventHandler } from "react";

import "./CustomButton.scss";

export default function CustomButton({
  children,
  onClick,
  isGoogleSignIn,
  inverted,
  ...otherProps
}: {
  children: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  isGoogleSignIn?: boolean;
  inverted?: boolean;
}) {
  return (
    <button
      className={`${inverted ? "inverted" : null} ${
        isGoogleSignIn ? "google-sign-in" : null
      } custom-button `}
      {...otherProps}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
