import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import store from './redux/store';

class App extends Component {
  render() {

    const render = () => {
      document.body.innerText = store.getState();
    };

    store.subscribe(render);
    render();

    document.addEventListener('click', () => {
      store.dispatch( { type: 'INCREMENT' } )
    });

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
