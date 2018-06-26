import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './Home';

const Airport = () => (
  <div>
    <ul>
      <li>Jomo Kenyatta</li>
      <li>Tambo</li>
      <li>Murtala Mohammed</li>
    </ul>
  </div>
);

const City = () => (
  <div>
    <ul>
      <li>San Francisco</li>
      <li>Istanbul</li>
      <li>Tokyo</li>
    </ul>
  </div>
);

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" component={Home} />
        <Route path="/airports" component={Airport} />
        <Route path="/cities" component={City} />
      </div>
    );
  }
}

export default App;
