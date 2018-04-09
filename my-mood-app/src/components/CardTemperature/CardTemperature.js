import React, { Component } from 'react';
import moment from 'moment';
import './../Card.css';

import firebase from './../../commons/firebase.js';

export default class CardTemperature extends Component {
  state = {
    temperature: 0,
    lastUpdate: 0
  };

  componentDidMount() {
    // Updating the `temperature` local state attribute when the Firebase Realtime Database data
    // under the '/temperature' path changes.
    this.firebaseRef = firebase.database().ref('/tempHum');
    this.firebaseCallback = this.firebaseRef
      .limitToLast(1)
      .on('value', snap => {
        let readValue = snap.val();
        readValue = readValue[Object.keys(readValue)[0]];

        this.setState({ temperature: readValue.temperature });
        this.setState({ lastUpdate: readValue.timestamp });
      });
  }

  componentWillUnmount() {
    // Un-register the listener on '/temperature'.
    this.firebaseRef.off('value', this.firebaseCallback);
  }

  render() {
    return (
      <div className="Card Card-short">
        <div className="Card-title">Room Temperature</div>
        <div className="Card-content">
          <span className="highlight">{this.state.temperature}</span>° C
        </div>
        <div className="Card-footer">
          <div>
            Last Update: {moment(this.state.lastUpdate).format('HH:mm:ss')}
          </div>
        </div>
      </div>
    );
  }
}
