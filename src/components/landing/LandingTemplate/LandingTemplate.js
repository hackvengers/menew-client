import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./LandingTemplate.scss";
import LandingFirst from "components/landing/LandingFirst";
import LandingSecond from "components/landing/LandingSecond";
import LandingThird from "components/landing/LandingThird";

import skip_icon from "static/1_common/1_common_skip.png";
import next_icon from "static/1_common/1_common_next_icon.png";
import cam_icon from "static/1-3/1_3_camera_icon.png";
import progress_icon1 from "static/1-1/1_1_circle.png";
import progress_icon2 from "static/1-2/1_2_circle.png";
import progress_icon3 from "static/1-3/1_3_circle.png";
import * as MenuAPI from "lib/api/menu";

class LandingTemplate extends Component {
  state = {
    step: 1
  };

  toggle = () => {
    let step = this.state.step;
    this.setState({
      step: step + 1
    });
  };

  getLandingPage = () => {
    const { step } = this.state;
    if (step === 1) return <LandingFirst step={this.state.step} />;
    if (step === 2) return <LandingSecond step={this.state.step} />;
    if (step === 3) return <LandingThird step={this.state.step} />;
  };

  getProgressImg = () => {
    const { step } = this.state;
    if (step === 1)
      return <img className="progress_icon" src={progress_icon1} alt="" />;
    if (step === 2)
      return <img className="progress_icon" src={progress_icon2} alt="" />;
    if (step === 3)
      return <img className="progress_icon" src={progress_icon3} alt="" />;
  };

  getNextImg = () => {
    const { step } = this.state;
    if (step === 3)
      return (
        <img
          className="cam_icon"
          src={cam_icon}
          alt=""
          onClick={this.cameraClick}
        />
      );
    else
      return (
        <img
          className="next_icon"
          src={next_icon}
          alt=""
          onClick={this.toggle}
        />
      );
  };

  cameraClick = () => {
    this.upload.click();
  };

  handleFileChange = event => {
    const formData = new FormData();
    formData.append("photo", event.target.files[0]);
    MenuAPI.getOcrBoundingBox({ formData }).then(res => {
      const { regions } = res.data;
      this.props.history.push({
        pathname: "/ocr",
        state: regions
      });
    });
  };

  render() {
    return (
      <div className="landing">
        {this.getLandingPage()}
        {this.getNextImg()}
        <div className="footer">
          {this.getProgressImg()}
          <img
            className="skip_icon"
            src={skip_icon}
            alt=""
            onClick={() => {
              alert("skip clicked");
            }}
          />
          <input
            type="file"
            id="camera"
            accept="image/*"
            capture="camera"
            ref={ref => {
              this.upload = ref;
            }}
            onChange={this.handleFileChange}
            hidden
          />
        </div>
      </div>
    );
  }
}

export default withRouter(LandingTemplate);
