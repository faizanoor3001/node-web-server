const yargs = require('yargs')
const geocode = require('./geocode/geocode')
const weather = require('./weather/weather')

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


  geocode.getGeoCode(argv.address, (errorMessage , results) => {
    if(errorMessage) {
      console.log(errorMessage);
    }
    else {
      console.log(results.address);
      weather.getForecast(results.Latitude, results.Longitude, (errorMessage, weatherResults) => {
        if(errorMessage) {
          console.log(errorMessage);
        }
        else {
          console.log(`The temperature is ${weatherResults.temperature}. It appears to be ${weatherResults.apparentTemperature}.`);
        }
      });
    }
  });
