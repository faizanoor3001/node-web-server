console.log("inside the geocode.js");
const request = require('request');


var getGeoCode = (address) => {
    var encodedAddress = encodeURIComponent(address);
    request( {
    url : `http://apidev.accuweather.com/locations/v1/search?q=${encodedAddress}&apikey=hoArfRosT1215`,
    json : true
  }
    ,(error, response, body) => {
      if(error) {
        console.log("unable to connect to API dev");
      } else if( body.Code === 'Unauthorized') {
        console.log("unauthorised");
      }
  //console.log(`body: ${JSON.stringify(body,undefined, 4)}`);
  console.log(`Address: ${body[0].LocalizedName}` );
  console.log(`Latitude ${body[0].GeoPosition.Latitude}`);
  console.log(`Longitude ${body[0].GeoPosition.Longitude}`);
})};

module.exports = {
  getGeoCode
}
