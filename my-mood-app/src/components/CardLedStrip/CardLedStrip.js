import React, { Component } from 'react';
import Switch from 'react-ios-switch';
import { RadioGroup, Radio } from 'react-radio-group';
import Slider from 'rc-slider';
import { SketchPicker } from 'react-color';

import './../Card.css';

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
        <div>Led Strip</div>
        <div>
          <div>
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

            <Slider
              min={0}
              max={255}
              step={1}
              value={this.state.brightness}
              onChange={value => {
                this.setState({ brightness: value });
              }}
            />

            <SketchPicker />
          </div>
        </div>
      </div>
    );
  }
}
