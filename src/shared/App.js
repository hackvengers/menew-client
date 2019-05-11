import React from 'react';
import { Route } from 'react-router-dom';
import { Home } from 'pages';

const App = () => {
  return (
    <div className="App">
      <Route exact path="/" component={Home}/>
    </div>
  )
};

export default App;