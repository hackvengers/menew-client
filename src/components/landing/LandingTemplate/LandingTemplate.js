import React, { Component } from 'react';
import './LandingTemplate.scss';
import LandingFirst from 'components/landing/LandingFirst';
import skip_icon from 'static/1_common/1_common_skip.png';
import next_icon from 'static/1_common/1_common_next_icon.png';
import progress_icon1 from 'static/1-1/1_1_circle.png';
import progress_icon2 from 'static/1-2/1_2_circle.png';
import progress_icon3 from 'static/1-3/1_3_circle.png';

class LandingTemplate extends Component {

  state = {
    step: 1,
  };

  toggle = () => {
    let step = this.state.step;

    this.setState({
      step: step + 1,
    });
  };

  getProgressImg =()=>{
    const {step} = this.state;
    if (step === 1) return  <img className="progress_icon" src={progress_icon1} alt=""/>;
    if (step === 2) return  <img className="progress_icon" src={progress_icon2} alt=""/>;
    if (step === 3) return  <img className="progress_icon" src={progress_icon3} alt=""/>;
  };

  render() {
    return (
      <div className="landing">
        <LandingFirst
          fadeOut={this.state.step}
        />
        <img className="next_icon" src={next_icon} alt="" onClick={this.toggle}/>
        <div className="footer">
          {this.getProgressImg()}
          {/*<img className="skip_icon" src={skip_icon} alt="" onClick={()=>{alert("skip clicked")}}/>*/}
          <input type="file" id="camera" accept="image/*" capture="camera"/>
        </div>
      </div>
    )
  }
}

export default LandingTemplate;