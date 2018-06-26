import React, {Component} from 'react';

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
      <div className="split left">
        <h1>About Clark</h1>
        <a href="#" className="button">Read More</a>
      </div>
      <div className="split right">
        <h1>Projects</h1>
        <a href="#" className="button">Read More</a>
      </div>
    </div>
  }
}