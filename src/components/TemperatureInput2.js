
import React, { Component } from 'react';

class TemperatureInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      temperature: ''
    }
  }
  
  scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
  };

  handleChange(e) {
    this.setState({
      temperature: e.target.value
    }, () => {
      console.log('temp input in component state: ', this.state)
    });
    alert('now pushing up');
    this.props.onTemperatureChange(e);
  }

  render() {
    const temperature = this.props.temperature;//no source of truth if usgin this.state.temperature 
    const scale = this.props.scale;

    return (
      <fieldset>
        <legend>Enter temperature in {this.scaleNames[scale]}:</legend>
        <input value={temperature} onChange={e => this.handleChange(e)} />
      </fieldset>
    );
  }
}

export default TemperatureInput;