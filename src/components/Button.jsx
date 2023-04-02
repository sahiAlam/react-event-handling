import React from "react";

const Button = ({ children }) => {
  function handleDoubleClick() {
    alert("Double Clicked");
  }

  function handleClick() {
    console.log("Button Clicked");
  }
  return (
    <>
      <button onClick={handleClick} onDoubleClick={handleDoubleClick}>
        {children}
      </button>
    </>
  );
};

export default Button;
