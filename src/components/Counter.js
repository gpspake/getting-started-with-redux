import React, { Component } from 'react';

class Counter extends Component {
  render() {
    return (
      <div className="Counter">
        <h1>{this.props.value}</h1>
      </div>
    );
  }
}

export default Counter;
