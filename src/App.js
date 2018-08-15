import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';
import Weather from './Weather';

class App extends Component {
  constructor(){
    super();
    this.state = {
      Ubicacion: '',
      Temperatur: '',
      Edad: ''
    }
}

  updateState(){
    
  }


  render() {
    return (
      <div className="App">
        <Form myUbicacionProp = {this.state.Ubicacion} />
        <Weather/>
      </div>
    );
  }
}

export default App;
