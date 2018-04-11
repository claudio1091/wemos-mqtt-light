import React, { Component } from 'react';
import Switch from 'react-ios-switch';
import { RadioGroup, Radio } from 'react-radio-group';
import Slider from 'rc-slider';
import { BlockPicker } from 'react-color';

import firebase from './../../commons/firebase.js';

import './../Card.css';
import './CardLedStrip.css';
import 'rc-slider/assets/index.css';

export default class CardLedStrip extends Component {
  state = {
    state: false,
    colorFade: false,
    brightness: 0,
    color: {
      r: 0,
      g: 0,
      b: 0
    },
    transition: 15
  };

  componentDidMount() {
    this.firebaseRef = firebase.database().ref('/rgbstrip');
    this.firebaseCallback = this.firebaseRef.on('value', snap => {
      console.log(snap.val());
      this.setState({ state: snap.val().state });
      this.setState({ colorFade: snap.val().colorFade });
      this.setState({ brightness: snap.val().brightness });
      this.setState({ color: snap.val().color });
    });
  }

  componentWillUnmount() {
    // Un-register the listener on '/humidity'.
    this.firebaseRef.off('value', this.firebaseCallback);
  }

  handleStateChange = value => {
    this.firebaseRef.child('state').set(value);
    this.setState({ state: value });
  };

  handleChangeMode = value => {
    this.firebaseRef.child('colorFade').set(value);
    this.setState({ colorFade: value });
  };

  handleChangeBrightness = value => {
    this.firebaseRef.child('brightness').set(value);
    this.setState({ brightness: value });
  };

  handleChangeComplete = (color, event) => {
    this.firebaseRef.child('color').child('r').set(color.rgb.r);
    this.firebaseRef.child('color').child('g').set(color.rgb.g);
    this.firebaseRef.child('color').child('b').set(color.rgb.b);
    this.setState({ color: color.rgb });
  };

  render() {
    const { state } = this.state;
    return (
      <div className="Card">
        <div className="Card-title">Led Strip</div>
        <div className="Card-content-flex">
          <div className="Card-column">
            <Switch
              checked={this.state.state}
              onChange={this.handleStateChange}
            />
            <RadioGroup
              name="mode"
              selectedValue={this.state.colorFade}
              onChange={this.handleChangeMode}
            >
              <Radio value={false} />Static Color
              <Radio value={true} />Color Fade
            </RadioGroup>
          </div>
          <div className="Card-column">
            <div className="slider-container">
              <Slider
                min={0}
                max={255}
                step={1}
                value={this.state.brightness}
                onChange={this.handleChangeBrightness}
              />
            </div>

            <BlockPicker color={ this.state.color } triangle="hide" width={590} onChangeComplete={ this.handleChangeComplete } colors={['#4D4D4D', '#999999', '#FFFFFF', '#F44E3B', '#FE9200', '#FCDC00', '#DBDF00', '#A4DD00', '#68CCCA', '#73D8FF', '#AEA1FF', '#FDA1FF', '#333333', '#808080', '#cccccc', '#D33115', '#E27300', '#FCC400', '#B0BC00', '#68BC00', '#16A5A5', '#009CE0', '#7B64FF', '#FA28FF', '#000000', '#666666', '#B3B3B3', '#9F0500', '#C45100', '#FB9E00', '#808900', '#194D33', '#0C797D', '#0062B1', '#653294', '#AB149E']} />
          </div>
        </div>
      </div>
    );
  }
}
