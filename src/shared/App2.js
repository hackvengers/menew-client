import React from 'react';
import logo from './logo.svg';
import './App.css';

const App2 = () => {
  let displayAsImage = (file) => {
    var imgURL = URL.createObjectURL(file),
      img = document.createElement('img');

    img.onload = function() {
      URL.revokeObjectURL(imgURL);
    };

    img.src = imgURL;
    document.body.appendChild(img);
  };

  // var camera = document.getElementById('camera');
  // var frame = document.getElementById('frame');

  // const camListen = (e) => {
  //   console.log(e);
  //   var file = e.target.files[0];
  //   var frame = document.getElementById('frame');
  //   // Do something with the image file.
  //   frame.src = URL.createObjectURL(file);
  // };

  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>hi</div>
        {/*<input type="file" id="camera" accept="image/*" capture="camera" onChange={camListen(this)}></input>*/}
        {/*<img id="frame"/>*/}
        <div id="textTest"></div>
        {/*<img id="imgCam" width="500px" height="300px"/>*/}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App2;
