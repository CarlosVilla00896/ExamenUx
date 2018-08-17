var axios = require("axios");

module.exports = {
    obtenertiempo: function(city, country) {
      var url =
        "http://api.openweathermap.org/data/2.5/weather?q=" +city + "," +country + "&appid=5fd698b3ff8cf421251cae54a65f966a&units=metric";
  
      return axios.get(url).then(function(response) {
        console.log(response.data);
        return response.data;
      });

    //   return axios.get(url).then(function(response) {
    //     return response.data.items;
    //   });
    }
  };