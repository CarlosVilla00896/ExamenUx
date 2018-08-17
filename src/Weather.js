import React, { Component } from 'react';
//import "./App.css";

class Weather extends Component{
    constructor(props) {
        super(props);
        this.state = {Ubication: '',temp: '',humedad: '' };

        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount(){
        this.setState({
            Ubication: this.props.ubication, temp: this.props.temp, humedad: this.props.humidity
        });
    }
    render(){
        return(
            <div className = "lista"> 
                <h4>Ubicacion: {this.props.ubication}</h4>
                <h4>Temperatura: {this.props.temp}</h4>
                <h4>Humedad: {this.props.humidity}</h4>
            </div>
        );
    }

}

export default Weather;