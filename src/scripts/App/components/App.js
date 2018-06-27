import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';


class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
      </div>
    );
  }
}

export default App;
