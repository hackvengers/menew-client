import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Home, Ocr, Info } from "pages";
import "./App.scss";
import "./devices.min.css";

class App extends Component {
  state = {
    width: window.innerWidth
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 500;

    if (isMobile) {
      return (
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/ocr" component={Ocr} />
          <Route exact path="/info" component={Info} />
        </div>
      );
    } else {
      return (
        <div className="App">
          <div className="marvel-device iphone8 silver">
            <div className="top-bar" />
            <div className="sleep" />
            <div className="volume" />
            <div className="camera" />
            <div className="sensor" />
            <div className="speaker" />
            <div className="screen">
              <Route exact path="/" component={Home} />
              <Route exact path="/ocr" component={Ocr} />
              <Route exact path="/info" component={Info} />
            </div>
            <div className="home" />
            <div className="bottom-bar" />
          </div>
        </div>
      );
    }
  }
}

export default App;
