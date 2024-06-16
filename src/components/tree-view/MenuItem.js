import React, { useState } from "react";
import MenuList from "./MenuList";
import {FaPlus, FaMinus} from 'react-icons/fa'

const MenuItem = ({ item }) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  const handleToggleChildren = (item) => {
    if (Object.keys(displayCurrentChildren).length !== 0) {
      setDisplayCurrentChildren({});
    } else {
      setDisplayCurrentChildren(item.children);
    }
  };
  console.log(displayCurrentChildren);

  return (
    <li>
      <div className="menu-item">
        <p>{item.label}</p>
        {item && item.children && item.children.length > 0 ? (
          <span onClick={() => handleToggleChildren(item)}>
            {Object.keys(displayCurrentChildren).length !== 0 ? <FaMinus/> : <FaPlus/>}
          </span>
        ) : null}
      </div>
      {item &&
      item.children &&
      item.children.length > 0 &&
      Object.keys(displayCurrentChildren).length !== 0 ? (
        <MenuList menus={item.children} />
      ) : null}
    </li>
  );
};

export default MenuItem;
