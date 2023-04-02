import React, { useState } from "react";

const Image = () => {
  const [resizeImage, setResizeImage] = useState(false);
  function handleMouseOver() {
    setResizeImage(true);
  }

  function handleMouseOut() {
    setResizeImage(false);
  }
  return (
    <>
      <img
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        src="https://picsum.photos/200"
        alt="dummyimage"
        style={{ width: resizeImage ? "50%" : null }}
      />
    </>
  );
};

export default Image;
