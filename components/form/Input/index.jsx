import React from "react";

const Input = (props) => {
  const { type, placeholder, ...inputProps } = props;
  return (
    <div>
      <label className="relative block cursor-text">
        <input
          type={type}
          className={`w-full h-14 border px-4 ${
            type !== "datetime-local" && "py-1"
          } border-primary outline-none peer`}
          required
          {...inputProps}
        />
        {type !== "datetime-local" && (
          <span className="absolute top-0 left-0 px-4 text-sm  h-full flex items-center peer-focus:text-xs peer-focus:h-7 peer-valid:text-xs peer-valid:h-7 transition all ">
            {placeholder}
          </span>
        )}
      </label>
    </div>
  );
};

export default Input;
