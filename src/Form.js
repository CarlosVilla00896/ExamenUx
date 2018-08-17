import React, { Component } from 'react';
import api from "./api";

class Form extends Component{
    constructor(props){
        super(props);
        this.state= {city:'', country:''};
        this.updateInputValueCiudad = this.updateInputValueCiudad.bind(this);
        this.updateInputValuePais = this.updateInputValuePais.bind(this);
        this.submitEvent = this.submitEvent.bind(this);
    }

    updateInputValueCiudad(evt){
        this.setState({
            city: evt.target.value
        });

    }
    updateInputValuePais(evt){
        this.setState({
            country: evt.target.value
        });
    }

    submitEvent(){
        api.obtenertiempo(this.state.city, this.state.country)
        .then(function(info){
            this.props.updateStates(
            info.name + ", " + info.sys.country,
            info.main.temp,
            info.main.humidity
          );
        }.bind(this)
        );
    }
    render() {
        return (
          <div class = "home-container">
              <div class="form-group">
                <input  type="text" class="form-control" name="" id="ciudad" aria-describedby="helpId" placeholder="Ciudad"
                 value={this.state.inputValue} onChange={evt => this.updateInputValueCiudad(evt)}/>
                <input type="text" class="form-control" name="" id="pais" aria-describedby="helpId" placeholder="Pais"
                value={this.state.inputValue} onChange={evt => this.updateInputValueCiudad(evt)}/>
                <button type="submit" class="btn btn-primary" id="submit" onClick = {this.submitEvent}>Obtener Clima</button>
              </div>
          </div>
        );
      }
    }

export default Form;