const request = require('request');

const optionsAccuWeather = {
  method: 'GET',
  url: 'http://apidev.accuweather.com/locations/v1/search',
  qs: {
    q:'bangalore',
    apikey:'hoArfRosT1215'
  },
  json: true
};

request( optionsAccuWeather
//   {
//   //url: 'http://apidev.accuweather.com/locations/v1/search?q=bangalore&apikey=hoArfRosT1215',
//   json : true
// }
, function (error, response, body) {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  //pretty printing the body so that all data in response is printed and is visible on the console
  console.log('body:', JSON.stringify(body,undefined, 4));
  console.log('headers:', response.headers);
  console.log('Latitude' ,body[0].GeoPosition.Latitude);
  console.log('Longitude' ,body[0].GeoPosition.Longitude);
});

// using the mapquest api to get the details

const optionsMapquest = {
  url:'http://www.mapquestapi.com/geocoding/v1/address',
  //url:'http://www.mapqutapi.com/geocoding/v1/address',
  qs: {
    key : 'XERNy7vvnjzh3IUca4Cg1M9KH7TxUxVe',
    location: 'chennai'
  },
  json:true
};


request(optionsMapquest , function(error, response, body){
  //console.log('---------------------MaqQuest response------------------');
  console.log('error:', JSON.stringify(error,undefined, 4));
  // very big output -----
  //console.log('response:', response );
  console.log('statusCode:', response.statusCode);
  console.log('body:', JSON.stringify(body,undefined, 4));
  // to get the headers of response explicitly
  //console.log('headers:', JSON.stringify(response.headers,undefined, 4));
  console.log('Latitude' ,body.results[0].locations[0].latLng.lat);
  console.log('Longitude' ,body.results[0].locations[0].latLng.lng);

})
