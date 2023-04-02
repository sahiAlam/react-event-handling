import React from "react";
import Input from "./Input";

const Form = () => {
  function handleSubmit(e) {
    e.preventDefault();
    alert("Form Submitted");
  }
  return (
    <>
      <form>
        <Input type="text" placeholder="UserName" />
        <Input type="email" placeholder="Email" />
        <button onClick={handleSubmit}>Send Data</button>
      </form>
    </>
  );
};

export default Form;
