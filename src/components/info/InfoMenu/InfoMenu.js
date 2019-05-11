import React, {useState} from 'react';
import './InfoMenu.scss';
// import orangeBox from 'static/2/2_common/2_orange_box.png';

const InfoMenu = (props) => {

  const [curTab, setCurTab] = useState("image-tab");

  const tabClick = (e) => {
    setCurTab(e);
    props.callback(e);
  };

  return (
    <div className="info-menu-area">
      <div className="menu-area">
        <div id="image-tab" className={curTab === "image" ? "curTab" : ""} onClick={()=>{tabClick("image")}}>Image</div>
        {/*<img src={orangeBox} hidden={tabValue === "image-tab"}/>*/}
      </div>
      <div className="menu-area">
        <div id="about-tab" className={curTab === "about" ? "curTab" : ""} onClick={()=>{tabClick("about")}}>About</div>
        {/*<img src={orangeBox} hidden={tabValue === "about-tab"}/>*/}
      </div>
      <div className="menu-area">
        <div id="review-tab" className={curTab === "review" ? "curTab" : ""} onClick={()=>{tabClick("review")}}>Review</div>
        {/*<img src={orangeBox} hidden={tabValue === "review-tab"}/>*/}
      </div>
    </div>
  );
};

export default InfoMenu;