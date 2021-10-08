import React, { ChangeEvent } from "react";

import "./FormInput.scss";

export default function FormInput({
  handleChange,
  onChange,
  label,
  id,
  ...otherProps
}: {
  type: string;
  name: string;
  value?: string;
  required: true;
  label?: string;
  id?: string;
  defaultValue?: string;
  handleChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="group">
      <input
        className="form-input"
        onChange={handleChange}
        {...otherProps}
        id={id}
      />
      {label ? (
        <label
          htmlFor={id}
          className={`${
            otherProps.value?.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
}
