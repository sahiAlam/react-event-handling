import React from "react";

const Input = ({ type, placeholder }) => {
  function handleFocus() {
    console.log("Focused On Inputbox");
  }
  function handleBlur() {
    console.log("Removed from Inputbox");
  }
  return (
    <>
      <input
        onFocus={handleFocus}
        onBlur={handleBlur}
        type={type}
        placeholder={placeholder}
      />
    </>
  );
};
export default Input;
