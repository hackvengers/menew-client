import React, { Component } from 'react';
import './LandingTemplate.scss';
import logo from 'static/1-1/1_1_logo.png';
import phrase1 from 'static/1-1/1_1_text.png';
import next_icon from 'static/1_common/1_common_next_icon.png';
import skip_icon from 'static/1_common/1_common_skip.png';
import progress_icon from 'static/1-1/1_1_circle.png';

class LandingTemplate extends Component {

  state = {
    fadeOut: false
  };

  toggle = () => {
    this.setState({
      fadeOut: !this.state.fadeOut
    })
  };

  render() {
    return (
      <div className={this.state.fadeOut ? "landing active" : "landing"}>
        <img id="main_logo" src={logo} alt=""/>
        <div id="main_phrase">
          <img className="phrase1" src={phrase1} alt=""/>
          <img className="next_icon" src={next_icon} alt="" onClick={this.toggle}/>
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