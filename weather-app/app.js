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


  // geocode.getGeoCode(argv.address, (errorMessage , results) => {
  //   if(errorMessage) {
  //     console.log(errorMessage);
  //   }
  //   else {
  //     console.log(JSON.stringify(results, undefined, 2));
  //     console.log(results.status);
  //   }
  // });

  geocode.getForecast(argv.address, (errorMessage, results) => {
    if(errorMessage) {
      console.log(errorMessage);
    }
    else {
      console.log(results);
    }
  });
