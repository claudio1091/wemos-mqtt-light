import React, { Component } from 'react';
import Switch from 'react-ios-switch';
import { RadioGroup, Radio } from 'react-radio-group';
import Slider from 'rc-slider';
import { BlockPicker } from 'react-color';

import './../Card.css';
import './CardLedStrip.css';

export default class CardLedStrip extends Component {
  state = {
    state: false,
    colorFade: false,
    brightness: 0,
    color: {
      r: 0,
      g: 0,
      b: 0
    }
  };

  handleChange = value => {
    this.setState({ state: value });
  };

  handleChangeMode = value => {
    this.setState({ colorFade: value });
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
              onChange={state => {
                this.setState({ state });
              }}
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
                trackStyle={{ backgroundColor: 'blue', height: 10 }}
                railStyle={{ backgroundColor: 'red', height: 10 }}
                handleStyle={{
                  borderColor: 'blue',
                  height: 28,
                  width: 28,
                  marginLeft: -14,
                  marginTop: -9,
                  backgroundColor: 'black'
                }}
                onChange={value => {
                  this.setState({ brightness: value });
                }}
              />
            </div>

            <BlockPicker />
          </div>
        </div>
      </div>
    );
  }
}
