const request = require('request');


var getGeoCode = (address, callback) => {
    var encodedAddress = encodeURIComponent(address);
    request( {
    url : `http://apidev.accuweather.com/locations/v1/search?q=${encodedAddress}&apikey=hoArfRosT1215`,
    json : true
  }
    ,(error, response, body) => {
      if(error) {
        callback(`unable to connect to API dev ${response.statusCode}`);
      } else if( body.Code === 'Unauthorized') {
        callback(`Unauthorised ${response.statusCode}`);
      }
      else if(response.statusCode === 200) {
        callback (undefined, {
            status : response.statusCode,
            address : body[0].LocalizedName,
            Latitude : body[0].GeoPosition.Latitude,
            Longitude : body[0].GeoPosition.Longitude
          })}
})};



// var callForecast = (latitude, longitude) => {
//     console.log('in forecast', latitude);
//     var key = '149638136730e9a110dfebe2ef5bba1e';
//     var res = request({
//       url: 'https://api.darksky.net/forecast/' ,
//       qs: {
//         key:'149638136730e9a110dfebe2ef5bba1e',
//         latitude: latitude,
//         longitude: longitude
//       },
//
//       json: true
//     } , (error, response, body) => {
//         console.log(error);
//         console.log('temperature', body[0].currently.temperature);
//     });
//
// };


var callForecast = (latitude, longitude, callback) => {
    //console.log('in forecast', latitude);
    var key = '149638136730e9a110dfebe2ef5bba1e';
    var res = request({
      url: 'https://api.darksky.net/forecast/149638136730e9a110dfebe2ef5bba1e/37.8267,-122.4233' ,
      json: true
    } , (error, response, body) => {
        if(response.statusCode === 400){
          callback(`Unable to connect to API forecast dev ${response.statusCode}`);
        }else if(response.statusCode === 200){
          callback (undefined , body.currently.temperature);
        }
    });
};

// 149638136730e9a110dfebe2ef5bba1e

//https://api.darksky.net/forecast/149638136730e9a110dfebe2ef5bba1e/37.8267,-122.4233


var getForecast = (address,callback) => {
    getGeoCode(address , (errorMessage, results) => {
      if(errorMessage) {
        console.log(errorMessage);
      }
      else {
        //var results = (JSON.stringify(results, undefined, 2));
        var results = results;
        console.log(results);
        callForecast(results.Latitude, results.Longitude, (error, temperature) =>  {
          if(error) {
              callback(undefined , error);
          } else {
              temp = temperature;
              console.log(results["Temperature"]);
              callback(undefined, {results, temp});

          }

        });
      }
    });

};


module.exports = {
  getGeoCode,
  getForecast
}
