import React, { Component } from 'react';

class Counter extends Component {
  render() {
    return (
      <div className="Counter">
        <h1>{this.props.value}</h1>
        <button onClick={this.props.dispatchIncrement}>+</button>
        <button onClick={this.props.dispatchDecrement}>-</button>
      </div>
    );
  }
}

export default Counter;
