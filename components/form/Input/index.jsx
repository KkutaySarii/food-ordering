import React from "react";

const Input = (props) => {
  const { type, placeholder, touched, errorMessage, ...inputProps } = props;
  return (
    <div className="w-full">
      <label className="relative block cursor-text">
        <input
          type={type}
          className={`w-full h-14 border px-4 ${
            type !== "datetime-local" && "py-1"
          } ${
            touched && errorMessage ? "border-danger" : "border-primary"
          }  outline-none peer`}
          required
          {...inputProps}
        />
        {type !== "datetime-local" && (
          <span className="absolute top-0 left-0 px-4 text-sm  h-full flex items-center peer-focus:text-xs peer-focus:h-7 peer-valid:text-xs peer-valid:h-7 transition all ">
            {placeholder}
          </span>
        )}
      </label>
      {touched && errorMessage && (
        <span className="text-xs text-danger">{errorMessage}</span>
      )}
    </div>
  );
};

export default Input;
