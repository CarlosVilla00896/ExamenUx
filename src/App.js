import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import Weather from './Weather';
import Axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      ubication: '',
      temp: '',
      humedad: ''
    }
}

// componentDidMount() {
//   axios.get(`http://api.openweathermap.org/data/2.5/weather?q='{city}','{country}'&appid='{API_KEY}'&u
//   nits=metric
//   `)
//     .then(res => {
//       const persons = res.data;
//       this.setState({ persons   });
//     })
// }


  updateState(){
    {}
  }


  render() {
    return (
      <div className="App">
        <div className = "flex-container">
          <div className = "inside">
          <Form updateState = {this.updateState} />
          <Weather ubicaction ={this.state.ubicaction} temp = {this.state.temp} humidity = {this.state.humedad}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
