import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

const propTypes = {
  status: PropTypes.string,
}

const defaultProps = {
  status: 'default props'
}

class App extends Component {

  state = {
    a: 'hhh'
  }

  render(){
    return (
      <div>
        <h1> React，我们来了...{this.state.a} </h1>
        <h2>{this.props.status}</h2>
      </div>
    )
  }
}

App.defaultProps = defaultProps;
App.propTypes = propTypes;

const rootEle = document.getElementById('app')
render(<App />, rootEle)
