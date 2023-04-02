import React from "react";

const Text = () => {
  function handleCopy(e) {
    console.log(e);
  }
  function handleCut() {
    console.log("Cut");
  }
  function handlePaste() {
    console.log("Paste");
  }
  function handleSelect() {
    console.log("Selected");
  }
  return (
    <>
      <p
        onSelect={handleSelect}
        onCopy={handleCopy}
        onPaste={handlePaste}
        onCut={handleCut}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus,
        asperiores.
      </p>
    </>
  );
};

export default Text;
