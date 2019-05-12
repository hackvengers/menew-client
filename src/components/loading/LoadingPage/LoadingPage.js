import React from 'react';
import './LoadingPage.scss';
import logo from 'static/splash/splash_logo.png';

const LoadingPage = (props) => {
  const fadeOut = props.step;

  return(
    <div className={fadeOut !== 0 ? "loading-container nonactive" : "loading-container"}>
      <div className="logo-area">
        <img src={logo} id="logo" alt=""/>
      </div>
    </div>
  )
};

export default LoadingPage;