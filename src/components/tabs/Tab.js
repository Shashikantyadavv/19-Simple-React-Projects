import React, { useState } from "react";
// import "./tabs.css"

const Tabs = ({ tabContent, onChange }) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const handleOnClick = (index) => {
    setCurrentTabIndex(index);
    // onChange(index);
  };

  return (
    <div className="warpper">
      <div className="heading">
        {tabContent.map((item, index) => (
          <div
            className={`tab-item ${currentTabIndex === index ? "active" : ""}`}
            onClick={() => handleOnClick(index)}
            key={item.label}
          >
            <span className="label">{item.label}</span>
          </div>
        ))}
      </div>
      <div className="content" style={{color : "red"}}>
        {tabContent[currentTabIndex] && tabContent[currentTabIndex].content}
      </div>
    </div>
  );
};

export default Tabs;
