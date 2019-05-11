import React, { Component } from 'react';
import './LandingTemplate.scss';
import logo from 'static/1-1/1_1_logo.png';
import phrase1 from 'static/1-3/1_3_text.png';
import next_icon from 'static/1-1/1_1_next_icon.png';
import skip_icon from 'static/1-1/1_1_skip.png';
import progress_icon from 'static/1-1/1_1_circle.png';

class LandingTemplate extends Component {

  render() {
    return (
      <div className="landing">
        <img id="main_logo" src={logo} alt=""/>
        <div id="main_phrase">
          <img className="phrase1" src={phrase1} alt=""/>
          <img className="next_icon" src={next_icon} alt=""/>
        </div>
        <div className="footer">
          <img className="progress_icon" src={progress_icon} alt=""/>
          <img className="skip_icon" src={skip_icon} alt=""/>
        </div>
      </div>
    )
  }
}

export default LandingTemplate;