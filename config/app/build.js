
const webpackMerge = require( `webpack-merge` );
const base = require( `./base` );
const { env } = require( `../utils` );

const watch = {
  watch: !!process.env.NODE_WATCH,
  bail: true,
};


var MergedConfig = webpackMerge( base, require( `./environment/${ env }.js` ), watch );
console.log( `The MergedConfig is...` );
console.log( MergedConfig );

console.log( `And the loaders are...` );
MergedConfig.module.rules.map( r => console.log( r ));

module.exports = MergedConfig;
