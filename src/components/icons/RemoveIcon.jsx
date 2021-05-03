import React from "react";

const RemoveIcon = ({ className = "", color = "#000" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={"ionicon " + className}
      viewBox="0 0 512 512"
    >
      <title>Remove</title>
      <path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M400 256H112"
      />
    </svg>
  );
};
export default RemoveIcon;
