import React, { useRef } from "react";

const data = [
  {
    label: "First Card",
    style: {
      width: "100%",
      height: "600px",
      background: "red",
    },
  },
  {
    label: "Second Card",
    style: {
      width: "100%",
      height: "600px",
      background: "yellow",
    },
  },
  {
    label: "Third Card",
    style: {
      width: "100%",
      height: "600px",
      background: "black",
    },
  },
  {
    label: "Fourth Card",
    style: {
      width: "100%",
      height: "600px",
      background: "Pink",
    },
  },
  {
    label: "Fifth Card",
    style: {
      width: "100%",
      height: "600px",
      background: "green",
    },
  },
];

const handleScrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
}

const ScrollToSection = () => {
    const ref = useRef(null)
  return <div>
    <h1>Scroll to a particular Section</h1>
    <button onClick={() => handleScrollToSection(ref)}>Click to Scroll</button>
    {
        data.map((dataItem,index) => <div ref={index === 0? ref : null} style={dataItem.style}>
            <h3>{dataItem.label}</h3>
        </div>)
    }
  </div>;
};

export default ScrollToSection;
