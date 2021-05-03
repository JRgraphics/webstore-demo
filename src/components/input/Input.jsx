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
        return <input type="text" />;
    }
  };
  return renderInput();
};
export default Input;
