import React from "react";

const Button = ({ name, onClick, className, type }) => {
  return (
    <button className={className} type={type} onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
