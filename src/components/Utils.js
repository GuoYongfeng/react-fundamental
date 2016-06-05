import React, { Component } from 'react';

let Mixin = MixinComponent => class extends Component {
  constructor() {
    super();
    this.state = { val: 0 };
    this.update = this.update.bind(this);
  }
  update(){
    this.setState({val: this.state.val + 1});
  }
  componentWillMount(){
    console.log('will mount...')
  }
  render(){
    return (
      <MixinComponent
        update={this.update}
        {...this.state}
        {...this.props}
       />
    )
  }
  componentDidMount(){
    console.log('mounted...')
  }
}

export default Mixin;
