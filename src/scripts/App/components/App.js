import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import About from './About';
import Portfolio from './Portfolio';

const HomePage = () => {
  return (
    <div className="home">
      <div className="split left">
        <h1>About Clark</h1>
        <Link to="/about" className="button">Read More</Link>
      </div>
      <div className="split right">
        <h1>Projects</h1>
        <Link to="/portfolio" className="button">Read More</Link>
      </div>
    </div>
  );
}

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const left = document.querySelector('.left');
    const right = document.querySelector('.right');
    const container = document.querySelector('.container');

    left.addEventListener('mouseenter', () => {
      container.classList.add('hover-left');
    });

    left.addEventListener('mouseleave', () => {
      container.classList.remove('hover-left');
    });

    right.addEventListener('mouseenter', () => {
      container.classList.add('hover-right');
    });

    right.addEventListener('mouseleave', () => {
      container.classList.remove('hover-right');
    });
  }

  render() {
    return <div>
      <Route path="/" exact component={HomePage} />
      <Route path="/about" component={About} />
      <Route path="/portfolio" component={Portfolio} />
    </div>
  }
}