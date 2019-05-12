import React from 'react';
import './LoadingPage.scss';
import logo from 'static/splash/splash_logo.png';

const LoadingPage = () => {
  return(
    <div className="loading-container">
      <div className="logo-area">
        <img src={logo} id="logo" alt=""/>
      </div>
    </div>
  )
};

export default LoadingPage;