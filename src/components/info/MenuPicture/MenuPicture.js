import React from "react";
import "./MenuPicture.scss";

const MenuPicture = ({ urls }) => {
  console.log(urls);
  return (
    <div className="picture-area">
      {urls.map(url => {
        return <div className="cell" style={{ backgroundImage: url }} />;
      })}
    </div>
  );
};

export default MenuPicture;
