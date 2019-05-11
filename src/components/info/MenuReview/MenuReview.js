import React from 'react';
import './MenuReview.scss';
import sendIcon from 'static/2/2-3/2_3_send_ui.png';

const MenuReview = () => {
  return (
    <div className="review-area">

    <div className="rest-area">
      <div className="box">
        <div className="nametag">Anonymous1</div>
        <div className="comment">loremIpsumDolorSitAmetConsecteturAdipiscingElitSedDo</div>
      </div>
      <div className="box">
        <div className="nametag">Anonymous2</div>
        <div className="comment">loremIpsumDolorSitAmetConsecteturAdipiscingElitSedDo</div>
      </div>
      <div className="box">
        <div className="nametag">Anonymous3</div>
        <div className="comment">loremIpsumDolorSitAmetConsecteturAdipiscingElitSedDo</div>
      </div>
    </div>


    <div className="footer">
      <input type="text" id="comment-area" placeholder="Enter your comments"/>
      <img id="sendIcon" src={sendIcon} alt=""/>
    </div>

    </div>

    
  );
};

export default MenuReview;