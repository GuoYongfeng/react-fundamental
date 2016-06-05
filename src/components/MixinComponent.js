import React, { Component } from 'react';
import Mixin from './Utils.js';

const Button = (props) => {
  return (
    <button onClick={props.update}>
      {props.txt} - {props.val}
    </button>
  )
}

const Label = (props) => {
  return (
    <label onMouseMove={props.update}>
      {props.txt} - {props.val}
    </label>
  )
}

/**
 * 定义
 * mixin 用来连接的
 * @param {[type]} Button [description]
 */
let ButtonMixed = Mixin(Button);
let LabelMixed = Mixin(Label);

class Mixins extends Component {
  render(){
    return (
      <div>
        <ButtonMixed txt="button" />
        <LabelMixed txt="label" />
      </div>
    )
  }
}

export default Mixins;
