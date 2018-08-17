import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import Weather from './Weather';
import Axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {ubication: '',temp: '',humedad: ''};
    this.updateState = this.updateState.bind(this);

}

// componentDidMount() {
//   
// }

  updateState(ubica,tempe, hum){
    this.setState({ubicaction: ubica, temp:tempe, humedad: hum});
  }


  render() {
    return (
      <div className="App">
        <div className = "flex-container">
          <div className = "inside">
          <Form updateState = {this.updateState} />
          <Weather ubication ={this.state.ubicaction} temp = {this.state.temp} humidity = {this.state.humedad}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
