import React from "react";
import "./style.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input
      name={label}
      className="form-input"
      onChange={handleChange}
      {...otherProps}
    />
    {label ? (
      <label
        htmlFor={label}
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
