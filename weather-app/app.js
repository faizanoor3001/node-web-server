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

geocode.getGeoCode(argv.address);
