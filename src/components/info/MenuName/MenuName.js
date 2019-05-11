import React from "react";
import "./MenuName.scss";

const MenuName = ({ translatedText, menuName }) => {
  return (
    <div className="menu-name-container">
      <div className="menu_name">
        <p className="kor">{translatedText}</p>
        <p className="eng">{menuName}</p>
      </div>
      <div className="menu_summary">
        Lorem ipsum dolor sit amet, consectetur
      </div>
    </div>
  );
};

export default MenuName;
