import React, { Component, PropTypes } from 'react';

class StateComponent extends Component {
  constructor(props){
    super(props)
  }

  static defaultProps = {
    name: "珠峰培训~~~~",
    course: "react & Redux"
  }

  /**
   * 定义初始的state
   * ES5 去定义初始的state
   * getInitialState: function(){
   *
   * }
   * @type {Object}
   */
  state = {
    status: true,
    val: "222222222"
  }
  /**
   * 使用箭头函数定义handleClick方法
   * @return {[type]} [description]
   */
  handleClick = () => {
    // setState 改变state
    // replaceState 全局替换state,新的
    this.setState({
      // status字段在true和false之间切换
      status: !this.state.status
    })
  }
  /**
   * 这个方法就是用来处理onKeyDwon事件的
   * @return {[type]} [description]
   */
  handleKeyDwon = () => {

  }
  render(){
    // console.log( this.props );

    /**
     * template string
     * @type {[type]}
     */
    const str = `欢迎参加
      ${this.props.name}的
      ${this.props.course}课程`;

    const List = this.props.children.map( ( index, item, input ) => {
      console.log( index )
      console.log( item )
      console.log( input )
    })

    return (
      <div>
        <h1 onKeyDown={this.handleKeyDwon} onClick={this.handleClick}>
            数据流相关的demo,
            {this.state.status ? "展示" : "隐藏"}
            {this.state.val}
        </h1>
        <h3> {str} </h3>
        {this.props.children}
      </div>
    )
  }
}

/**
 * 定义我们组件的初始的props
 * 父组件没有传入props
 * 默认的props
 * @type {Object}
 */
// StateComponent.defaultProps = {
//   name: "珠峰培训~~~~",
//   course: "react & Redux"
// }

console.log( StateComponent );

StateComponent.propTypes = {
  // name type string,必传项
  name: PropTypes.string.isRequired,
  course: PropTypes.string
}

export default StateComponent;
