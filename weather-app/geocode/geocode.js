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

module.exports = {
  getGeoCode
}
