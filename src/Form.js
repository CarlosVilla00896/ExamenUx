import React, { Component } from 'react';

class Form extends React.Component{
    render() {
        return (
          <div>
              <div class="form-group">
                <label for=""></label>
                <input type="text" class="form-control" name="" id="ciudad" aria-describedby="helpId" placeholder="Ciudad"/>
                <input type="text" class="form-control" name="" id="pais" aria-describedby="helpId" placeholder="Pais"/>
                <button type="submit" class="btn btn-primary">Obtener Clima</button>
              </div>
          </div>
        );
      }
    }

export default Form;