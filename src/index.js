import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { Router, Route, browserHistory, Link } from 'react-router';

import './index.css';

const Home = () => <h1> <Links />Home {}</h1>
const About = () => <h1> <Links /> About </h1>
const Contact = () => <h1> <Links /> Contact </h1>

class App extends Component {
  render(){
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/Contact" component={Contact} />
      </Router>
    )
  }
}

const Links = () =>
  <nav>
    <Link activeClassName="active" to="/">Home </Link>
    <Link activeClassName="active" to="/about">About </Link>
    <Link activeClassName="active" to="/contact">Contact </Link>
  </nav>

let rootEle = document.getElementById('app')

render(<App />, rootEle)
