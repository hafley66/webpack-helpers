var fs = require( `fs` );
var path = require( `path` );
var entry_points = fs.readdirSync( `/usr/src/app/client/app` );
var entry = entry_points.filter( e => e.match( /\.babel$/ ));

entry = entry.map( e => e.replace( /\.babel/, `` ));
entry = entry.map( e => path.join( `app`, e ));
entry = entry.reduce(( s, e ) => {
  s[ e ] = e;
  return s;
}, {});
module.exports = { entry };
