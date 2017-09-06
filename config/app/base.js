const { lib, implicitVendors, cachedVendors, webpackBootstrap } = require( `./code-splits` );
const { env } = require( `../utils` );
const commonPlugins = require( `../shared/plugins` );

const resolve = require( `../shared/resolve` );
const entry = require( `./entry` );
const loaders = require( `./loaders` );

var plugins = lib();
if ( !env.isTest()) {
  plugins = [
    ...plugins,
    ...implicitVendors(),
    ...cachedVendors(),
    ...webpackBootstrap(),
  ];
}


module.exports = require( `webpack-merge` )(
   entry, resolve, loaders, { plugins }, commonPlugins
 );
