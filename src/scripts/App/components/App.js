import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './Home';

const Portfolio = () => (
  <div>
  </div>
);

const About = () => (
  <div>
  </div>
);

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/about" component={About} />
      </div>
    );
  }
}

export default App;
