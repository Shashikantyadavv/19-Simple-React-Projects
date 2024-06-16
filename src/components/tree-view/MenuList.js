import React from "react";
import MenuItem from "./MenuItem";

const MenuList = ({ menus }) => {
  return (
    <ul className="menu-list-container">
      {menus && menus.length ? (
        menus.map((item) => <MenuItem item={item} />)
      ) : (
        <div>List is Empty</div>
      )}
    </ul>
  );
};

export default MenuList;
