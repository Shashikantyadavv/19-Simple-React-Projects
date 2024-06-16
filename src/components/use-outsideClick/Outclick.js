import React, { useRef, useState } from "react";
import useOutside from "./useOutside";

const Outclick = () => {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  const handleClick = () => {
    setShowContent(!showContent);
  };
  useOutside(ref, () => setShowContent(false));
  return (
    <div>
      {showContent ? (
        <div ref={ref}>
          <h1>This is a random content</h1>
          <p>click outside the content</p>
        </div>
      ) : (
        <button onClick={handleClick}>Show Content</button>
      )}
    </div>
  );
};

export default Outclick;
