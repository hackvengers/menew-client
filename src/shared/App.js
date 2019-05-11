import React from "react";
import { Route } from "react-router-dom";
import { Home, Ocr, Info } from "pages";

const App = () => {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/ocr" component={Ocr} />
      <Route exact path="/info" component={Info} />
    </div>
  );
};

export default App;
