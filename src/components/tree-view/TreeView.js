import React from "react";
// import "./style.css";

import menus from "./data";
import MenuList from "./MenuList";

const TreeView = () => {
  return (
    <div className="tree-view-container">
      <MenuList menus={menus} />
    </div>
  );
};

export default TreeView;
