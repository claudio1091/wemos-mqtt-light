import React, { Component } from 'react';
import moment from 'moment';
import './../Card.css';

import firebase from './../../commons/firebase.js';

export default class CardHumidity extends Component {
  state = {
    humidity: 0,
    lastUpdate: 0
  };

  componentDidMount() {
    // Updating the `humidity` local state attribute when the Firebase Realtime Database data
    // under the '/humidity' path changes.
    this.firebaseRef = firebase.database().ref('/tempHum');
    this.firebaseCallback = this.firebaseRef
      .limitToLast(1)
      .on('value', snap => {
        let readValue = snap.val();
        readValue = readValue[Object.keys(readValue)[0]];

        this.setState({ humidity: readValue.humidity });
        this.setState({ lastUpdate: readValue.timestamp });
      });
  }

  componentWillUnmount() {
    // Un-register the listener on '/humidity'.
    this.firebaseRef.off('value', this.firebaseCallback);
  }

  render() {
    return (
      <div className="Card Card-short">
        <div className="Card-title">Room Humidity</div>
        <div className="Card-content">
          <span className="highlight">{this.state.humidity}</span>%
        </div>
        <div className="Card-footer">
          <div>
            Last Update: {moment(this.state.lastUpdate).fromNow()}
          </div>
        </div>
      </div>
    );
  }
}
