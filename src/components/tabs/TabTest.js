import React from "react";
import Tabs from "./Tab";

function RandomComponent() {
  return <h1>Some Random Content</h1>;
}

const TabTest = () => {
  const tabs = [
    {
      label: "Tab 1",
      content: <div>This is content for Tab 1</div>,
    },
    {
      label: "Tab 2",
      content: <div>This is content for Tab 2</div>,
    },
    {
      label: "Tab 3",
      content: <RandomComponent />,
    },
  ];

  const handleChange = (currentTabIndex) => {
    console.log(currentTabIndex);
  };

  return (
    <>
      <Tabs tabContent={tabs} onChange={handleChange} />
    </>
  );
};

export default TabTest;
