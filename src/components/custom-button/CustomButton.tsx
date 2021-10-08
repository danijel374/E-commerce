import React, { MouseEventHandler } from 'react';

import './CustomButton.scss';

export default function CustomButton({
  children,
  onClick,
  isGoogleSignIn,
  ...otherProps
}: {
  children: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  isGoogleSignIn?: boolean;
}) {
  return (
    <button
      className={`${isGoogleSignIn ? 'google-sign-in' : null} custom-button `}
      {...otherProps}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
