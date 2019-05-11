import React from 'react';
import './LandingThird.scss';
import foodImg from 'static/1/1-3/1_3_img.png';
import phrase3 from 'static/1/1-3/1_3_text.png';

const LandingThird = (props) => {

  const fadeOut = props.step;

  return (
    <div className={fadeOut !== 3 ? "main-container nonactive" : "main-container active"}>
      <img id="food_img" src={foodImg} alt=""/>
      <div id="main_phrase">
        <img className="phrase3" src={phrase3} alt=""/>
      </div>
    </div>
  )
};

export default LandingThird;