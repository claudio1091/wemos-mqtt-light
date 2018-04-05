import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import firebase from './firebase.js';

class App extends Component {
  state = {
    temperatureNow: 0
  };

  componentDidMount() {
    // Updating the `temperatureNow` local state attribute when the Firebase Realtime Database data
    // under the '/temperatureNow' path changes.
    this.firebaseRef = firebase.database().ref('/temperatureNow');
    this.firebaseCallback = this.firebaseRef.on('value', (snap) => {      
      this.setState({ temperatureNow: snap.val() });
    });
  }
  
  componentWillUnmount() {
    // Un-register the listener on '/temperatureNow'.
    this.firebaseRef.off('value', this.firebaseCallback);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {this.state.temperatureNow}
        </p>
      </div>
    );
  }
}

export default App;
