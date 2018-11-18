const request = require('request');
const yargs = require('yargs')
const geocode = require('./geocode/geocode')

const argv = yargs.
  options({
      a: {
          demand: true,
          describe: 'enter the address',
          alias: 'address',
          string: true
          }
  })
  .help()
  .alias('help', 'h')
  .argv;

console.log(argv);
console.log('------------------');
console.log('argv',argv.address);
console.log('------------------');
console.log('slice' ,process.argv.slice(2));
console.log('------------------');
var encodedAddress = encodeURIComponent(argv.address);
console.log(encodedAddress);
console.log('------------------');

// not working the
var address = 'lucknow uttar pradesh';
var address1 = argv.address;
console.log(address1);
console.log('------------------');
const optionsAccuWeather = {
  method: 'GET',
  url: 'http://apidev.accuweather.com/locations/v1/search',
  qs: {
    q: address,
    apikey:'hoArfRosT1215'
  },
  json: true
};

request( optionsAccuWeather, function (error, response, body) {
  //console.log(`body: ${JSON.stringify(body,undefined, 4)}`);
  console.log(`Address: ${body[0].LocalizedName}` );
  console.log(`Latitude ${body[0].GeoPosition.Latitude}`);
  console.log(`Longitude ${body[0].GeoPosition.Longitude}`);
});

// hoArfRosT1215
geocode.getGeoCode(argv.address);
// request({
//     url : `http://apidev.accuweather.com/locations/v1/search?q=${encodedAddress}&apikey=horfsT1215`,
//     json : true
//   }
//     ,(error, response, body) => {
//       if(error) {
//         console.log("unable to connect to API dev");
//       } else if( body.Code === 'Unauthorized') {
//         console.log("unauthorised");
//       }
//   //console.log(`body: ${JSON.stringify(body,undefined, 4)}`);
//   console.log(`Address: ${body[0].LocalizedName}` );
//   console.log(`Latitude ${body[0].GeoPosition.Latitude}`);
//   console.log(`Longitude ${body[0].GeoPosition.Longitude}`);
// });

// using the mapquest api to get the details

const optionsMapquest = {
  url:'http://www.mapquestapi.com/geocoding/v1/address',
  qs: {
    key : 'XERNy7vvnjzh3IUca4Cg1M9KH7TxUxVe',
    location: address1
  },
  json:true
};


request( optionsMapquest , (error, response, body)=> {
  if (error) {
   console.log("unable to connect to the mapquest api");
  }
  //console.log(`body: ${JSON.stringify(body,undefined, 4)}`);
  console.log(`Address: ${body.results[0].providedLocation.location}`);
  console.log(`Latitude ${body.results[0].locations[0].latLng.lat}`);
  console.log(`Longitude ${body.results[0].locations[0].latLng.lng}`);

});
