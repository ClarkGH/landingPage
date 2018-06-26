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
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/airports">Airports</Link></li>
          <li><Link to="/cities">Cities</Link></li>
        </ul>

        <Route path="/" component={Home} />
        <Route path="/airports" component={Airport} />
        <Route path="/cities" component={City} />
      </div>
    );
  }
}

export default App;

// export default class App extends React.Component {
//   componentDidMount() {
//     const left = document.querySelector('.left');
//     const right = document.querySelector('.right');
//     const container = document.querySelector('.container');

//     left.addEventListener('mouseenter', () => {
//       container.classList.add('hover-left');
//     });

//     left.addEventListener('mouseleave', () => {
//       container.classList.remove('hover-left');
//     });

//     right.addEventListener('mouseenter', () => {
//       container.classList.add('hover-right');
//     });

//     right.addEventListener('mouseleave', () => {
//       container.classList.remove('hover-right');
//     });
//   }

//   render() {
//     return <div>
//       <div className="split left">
//         <h1>About Clark</h1>
//         <a href="#" className="button">Read More</a>
//       </div>
//       <div className="split right">
//         <h1>Projects</h1>
//         <a href="#" className="button">Read More</a>
//       </div>
//     </div>
//   }
// }