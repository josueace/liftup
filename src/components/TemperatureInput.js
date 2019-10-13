// components/TemperatureInput.js

import React, { Component } from 'react';

class TemperatureInput extends Component {
  
    constructor(props) {
    super(props);
  }

  scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
  };

  handleChange = (e) => {
    this.props.onTemperatureChange(e.target.value);//good lifting up
  }

  render() {
     
    const temperature = this.props.temperature;// keep it easy why to create state for temperature and scale
    const scale = this.props.scale;
    return (
         //this is ok onChange={this.handleChange}
      <fieldset>
        <legend>Enter temperature in {this.scaleNames[scale]}:</legend>
        <input value={temperature} onChange={e => this.handleChange(e)} /> 
      </fieldset>
    );
  }
}

export default TemperatureInput;