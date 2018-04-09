import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import firebase from './commons/firebase.js';
import CardTemperature from './components/CardTemperature/CardTemperature';
import CardHumidity from './components/CardHumidity/CardHumidity';
import CardLedStrip from './components/CardLedStrip/CardLedStrip';

class App extends Component {
  state = {
    temperatureNow: 0
  };

  componentDidMount() {
    // Updating the `temperatureNow` local state attribute when the Firebase Realtime Database data
    // under the '/temperatureNow' path changes.
    this.firebaseRef = firebase.database().ref('/temperatureNow');
    this.firebaseCallback = this.firebaseRef.on('value', snap => {
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
        <div className="App-content">
          <CardTemperature />
          <CardHumidity />
        </div>
        <div className="App-content">
          <CardLedStrip />
        </div>
      </div>
    );
  }
}

export default App;
