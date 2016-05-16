import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  render(){
    return <h1> React，我们来了... </h1>
  }
}

const rootEle = document.getElementById('app')
render(<App />, rootEle)
