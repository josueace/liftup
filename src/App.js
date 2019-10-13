import React, { Component } from 'react';

import './App.css';
import Foo from './foo.js';
import Calculator from './components/Calculator.js';
import Calculator2 from './components/Calculator2.js'
;
class App extends Component {
  render() {
    return (
      <div className="App">
       <Foo />
       <Calculator />
       <Calculator2 />
      </div>
    );
  }
}

export default App;
