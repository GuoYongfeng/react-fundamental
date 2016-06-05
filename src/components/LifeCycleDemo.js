import React, { Component } from 'react';
import LifeCycle from './LifeCycle';

class LifeCycleDemo extends Component {

  state = {
    value:1,
    destroyed:false
  }

  increase = () => {
    this.setState({
      value: this.state.value + 1
    });
  }

  destroy = () => {
    this.setState({
      destroyed: true
    });
  }

  render() {
    if(this.state.destroyed){
        return null;
    }

    return <div>
      <p>
        <button onClick={this.increase}>每次加1，更新组件</button>
        <button onClick={this.destroy}>干掉这两个按钮，销毁</button>
      </p>
      <LifeCycle value={this.state.value}/>
    </div>;
  }
}

export default LifeCycleDemo;
