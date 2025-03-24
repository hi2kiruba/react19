import React from "react";

const Sidebar = ({ onMenuSelect }) => {
  const menuItem = ["Home", "About", "Services", "Contact"];
  return (
    <div className="sidebar">
      <ul>
        {/*<li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>*/}
        {menuItem.map((item) => (
          <li key={item} onClick={() => onMenuSelect(item)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
