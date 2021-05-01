import React from "react";

const Button = ({
  buttonClassName = "",
  buttonContent = "",
  onClick,
  disabled = false,
  type = "button",
}) => {
  return (
    <button
      className={"button " + buttonClassName}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {buttonContent}
    </button>
  );
};
export default Button;
