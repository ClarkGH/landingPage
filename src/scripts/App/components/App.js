import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import HomePage from './Home';
import About from './About';
import Portfolio from './Portfolio';

const App = () => {
  return (<div>
    <Route path='/' exact component={HomePage} />
    <Route path='/about' component={About} />
    <Route path='/portfolio' component={Portfolio} />
  </div>);
}

export default App;