const request = require('request');

var getForecast = (latitude, longitude, callback) => {
    var key = '149638136730e9a110dfebe2ef5bba1e';
    var res = request({
      url: `https://api.darksky.net/forecast/149638136730e9a110dfebe2ef5bba1e/${latitude},${longitude}` ,
      json: true
    } , (error, response, body) => {
        if(!error && response.statusCode === 200){
          callback(undefined, {
            temperature: body.currently.temperature,
            apparentTemperature: body.currently.apparentTemperature
          })
        } else {
          callback(`Unable to connect to API forecast dev ${response.statusCode}`);
        }
    });
};

module.exports = {
  getForecast
}
