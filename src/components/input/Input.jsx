import React from "react";
import NumberToggle from "./NumberToggle";

const Input = ({
  name = "input",
  className = "",
  type = "text",
  onChange,
  onBlur,
  onDelete,
  defaultValue,
}) => {
  // Render input components based on the name property
  const renderInput = () => {
    switch (name) {
      case "number-toggle":
        return (
          <NumberToggle
            className={className}
            onChange={onChange}
            onBlur={onBlur}
            onDelete={onDelete}
            defaultValue={defaultValue}
          />
        );

      default:
        return <input type={type} />;
    }
  };
  return renderInput();
};
export default Input;
