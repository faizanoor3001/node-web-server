const request = require('request');

var geocodeAddress = (address) => {
  return new Promise((resolve, reject) => {
    var encodedAddress = encodeURIComponent(address);
    request( {
    url : `http://apidev.accuweather.com/locations/v1/search?q=${encodedAddress}&apikey=hoArfRosT1215`,
    json : true
  }
    ,(error, response, body) => {
      if(error) {
        reject(`unable to connect to API dev ${response.statusCode}`);
      } else if( body.Code === 'Unauthorized') {
        reject(`Unauthorised ${response.statusCode}`);
      }
      else if(response.statusCode === 200) {
        resolve ({
            status : response.statusCode,
            address : body[0].LocalizedName,
            Latitude : body[0].GeoPosition.Latitude,
            Longitude : body[0].GeoPosition.Longitude
          })}
})}
  )};

geocodeAddress('19146').then((location) => {
  console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
  console.log(errorMessage);
}
);
