const yargs = require('yargs');
const axios = require('axios');
const fs = require('fs')

const argv = yargs.
  options({
      a: {
          demand: true,
          describe: 'enter the address',
          alias: 'address',
          string: true,
          default : "lucknow"
          }
  })
  .help()
  .alias('help', 'h')
  .argv;

// axios library that has promises inbuilt

var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `http://apidev.accuweather.com/locations/v1/search?q=${encodedAddress}&apikey=hoArfRosT1215`;

axios.get(geocodeUrl).then((response) => {
if(response.data.Code === 'Unauthorized') {
    throw new Error(`Unauthorized ${response.statusCode}`);
}
  var lat = response.data[0].GeoPosition.Latitude;
  var lng = response.data[0].GeoPosition.Longitude;
  var weatherUrl = `https://api.darksky.net/forecast/149638136730e9a110dfebe2ef5bba1e/${lat},${lng}`;
  var location = response.data[0].LocalizedName;
  console.log(location);
  return axios.get(weatherUrl,location);
}).then((response) => {
    var temp_json = {
      temperature : response.data.currently.temperature,
      apparentTemperature : response.data.currently.apparentTemperature,
      humidity : response.data.currently.humidity
    }
    return fs.appendFile('temperature-data.json',JSON.stringify(temp_json), (err) => {
      if(err) throw err;
      console.log('Saved!');
    });
    //fs.writeFileSync('temperature-data.json' , JSON.stringify(temp_json));
    // console.log(`The temperature is : ${response.data.currently.temperature}`);
    // console.log(`The apparent temperature is: ${response.data.currently.apparentTemperature}`);
    // console.log(`The current humidity is: ${response.data.currently.humidity}`);
}).then((response) => {
    console.log('Data saved succeesfully in file');
}).catch((e) => {
  if(e.code === 'ENOTFOUND') {
  console.log('Unable to connect to API servers');
} else {
  console.log(e.message);
}
});
