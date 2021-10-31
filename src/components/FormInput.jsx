import React, { useState } from "react";
import "./FormInput.css";

const FormInput = (props) => {
  const [focused, setLeave] = useState(false);
  const { label, onChange, id, errorMessage, ...inputProps } = props;

  const handleFocus = (e) => {
    setLeave(true);
  };

  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        key={id}
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() => inputProps.name === "confirmPassword" && setLeave(true)}
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
