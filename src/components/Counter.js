import React, { Component } from 'react';
import {connect} from 'react-redux';
import store from '../redux/store';

const mapStateToProps = () => {
  return {
    value: store.getState()
  };
};

const mapDispatchToProps = () => {
  return {
    dispatchIncrement () {
      store.dispatch({
        type: 'INCREMENT'
      })
    },
    dispatchDecrement () {
      store.dispatch({
        type: 'DECREMENT'
      })
    }
  }
};

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

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
