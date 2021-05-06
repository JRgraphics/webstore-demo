import React, { useState } from "react";

// Components
import AddIcon from "../icons/AddIcon";
import Button from "../Button";
import RemoveIcon from "../icons/RemoveIcon";

const NumberToggle = ({
  className = "",
  onChange,
  onDelete,
  defaultValue = 0,
}) => {
  // State hooks
  const [value, setValue] = useState(defaultValue); // Current value of the input
  // The last number value of the input set by handleChange function
  const [lastNumericValue, setLastNumericValue] = useState(defaultValue);

  // Set value and trigger onChange property if the input field is not empty
  const handleChange = (number) => {
    setValue(parseInt(number));
    if (!!number) {
      setLastNumericValue(parseInt(number));
      onChange(parseInt(number));
    }
  };
  // Check input field's value on blur event, if the field is empty, set the value to the last appropriate numeric value
  // If the value is 0, trigger onDelete proparty
  const handleBlur = () => {
    if (!!!value) {
      setValue(lastNumericValue);
    } else if (value === 0 || value === "0") {
      onDelete();
    }
  };
  return (
    <div className="flex--center">
      <Button
        buttonClassName={"button__number-toggle flex--center"}
        buttonContent={<RemoveIcon className="icon__number-toggle" />}
        onClick={() => handleChange(value - 1)}
        disabled={value < 2}
      />
      <input
        className={"input " + className}
        type="number"
        min={1}
        value={value}
        onChange={(e) => handleChange(parseInt(e.target.value))}
        onBlur={handleBlur}
      />
      <Button
        buttonClassName={"button__number-toggle flex--center"}
        buttonContent={<AddIcon className="icon__number-toggle" />}
        onClick={() => handleChange(value + 1)}
      />
    </div>
  );
};
export default NumberToggle;
