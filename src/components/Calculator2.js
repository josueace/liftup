// components/Calculator.js
import React, { Component } from 'react';
import BoilingVerdict from './BoilingVerdict';
import TemperatureInput2 from './TemperatureInput2';
import { tryConvert, toCelsius, toFahrenheit } from './ConversionFunctions';

class Calculator extends Component {
  constructor(props){
      super(props);
      this.state = {
          temperature: '',
          scale: 'c'
      }
  }

  handleChange = (e) => {
    alert(e.target.value);
    this.setState({
      scale: 'c', temperature:e.target.value
    }, () => console.log('state is: ', this.temperature));
  }
  handleChange2 = (e) => {
    alert(e.target.value);
    this.setState({
      scale: 'f', temperature:e.target.value
    }, () => console.log('state is: ', this.temperature));
  }

  render() {
   
    const scale = this.state.scale;
    const temperature = this.state.temperature; // !!!
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
    
    alert(celsius+ ' co');
    alert(fahrenheit+ 'ca');
    

    return (
     
    <div>
        <TemperatureInput2 scale="c"  temperature={celsius}   onTemperatureChange={this.handleChange} />
        <TemperatureInput2 scale="f" temperature={fahrenheit}   onTemperatureChange={this.handleChange2}  />

        <BoilingVerdict
          celsius={parseFloat(celsius)} />
    </div>
    );
  }
}

export default Calculator;// nomatter there is another export with same name